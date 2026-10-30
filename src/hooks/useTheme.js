import { useCallback, useEffect, useState } from 'react';

/**
 * Dark / light theme state.
 * - Initial value matches what the inline script in index.html applied.
 * - Persists the user's explicit choice in localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0a0e14' : '#f6f8fa');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable (private mode) – theme still works for this session */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return { theme, toggleTheme };
}
