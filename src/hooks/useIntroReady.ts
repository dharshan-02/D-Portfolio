import { useEffect, useState } from 'react';

export const introCompleteEvent = 'portfolio:intro-complete';

export function useIntroReady() {
  const [introReady, setIntroReady] = useState(
    () =>
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (introReady) return;

    const handleIntroComplete = () => setIntroReady(true);
    window.addEventListener(introCompleteEvent, handleIntroComplete, { once: true });
    return () => window.removeEventListener(introCompleteEvent, handleIntroComplete);
  }, [introReady]);

  return introReady;
}
