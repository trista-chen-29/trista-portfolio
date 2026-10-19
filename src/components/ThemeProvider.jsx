'use client';

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {}, setTheme: () => {} });

let currentTheme = 'light';
const listeners = new Set();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentTheme;
}

function getServerSnapshot() {
  return 'light';
}

// Storage can throw (private mode, blocked site data). The theme must still work without it.
function readSavedTheme() {
  try {
    const saved = window.localStorage.getItem('theme');
    return saved === 'dark' || saved === 'light' ? saved : null;
  } catch {
    return null;
  }
}

function saveTheme(next) {
  try {
    window.localStorage.setItem('theme', next);
  } catch {
    /* not persisted; the theme still applies for this visit */
  }
}

const themeColor = { light: '#f6f1e8', dark: '#261e30' };

function paintTheme(next) {
  currentTheme = next;
  document.documentElement.dataset.theme = next;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute('content', themeColor[next]);
  });
}

function applyTheme(next) {
  paintTheme(next);
  saveTheme(next);
  emit();
}

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const sync = () => {
      const next = readSavedTheme() || systemTheme();
      if (next === currentTheme && document.documentElement.dataset.theme === next) return;
      paintTheme(next);
      emit();
    };
    sync();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => {
      if (!readSavedTheme()) sync();
    };
    media.addEventListener('change', onScheme);
    return () => media.removeEventListener('change', onScheme);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, []);

  const setTheme = useCallback((next) => {
    if (next === 'light' || next === 'dark') applyTheme(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
