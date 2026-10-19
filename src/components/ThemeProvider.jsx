'use client';

import { MotionConfig } from 'framer-motion';
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

function applyTheme(next) {
  currentTheme = next;
  document.documentElement.dataset.theme = next;
  window.localStorage.setItem('theme', next);
  emit();
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    const next = saved === 'dark' || saved === 'light' ? saved : 'light';
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
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
