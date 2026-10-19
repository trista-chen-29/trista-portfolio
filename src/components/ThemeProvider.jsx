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

function applyTheme(next) {
  currentTheme = next;
  document.documentElement.dataset.theme = next;
  saveTheme(next);
  emit();
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const next = readSavedTheme() || 'light';
    document.documentElement.dataset.theme = next;
    if (next !== currentTheme) {
      currentTheme = next;
      emit();
    }
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
