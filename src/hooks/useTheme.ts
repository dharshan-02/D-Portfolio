import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem('portfolio-theme');
  return stored === 'dark' || stored === 'light' ? stored : null;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => getStoredTheme() ?? 'light'
  );
  const [hasExplicitChoice, setHasExplicitChoice] = useState(() => getStoredTheme() !== null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'dark' ? '#0d1420' : '#ffffff');
    if (hasExplicitChoice) window.localStorage.setItem('portfolio-theme', theme);
    else window.localStorage.removeItem('portfolio-theme');
  }, [hasExplicitChoice, theme]);

  function toggleTheme() {
    setHasExplicitChoice(true);
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return { theme, toggleTheme };
}
