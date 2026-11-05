import { useEffect } from 'react';

/**
 * Activa animaciones dinámicas al hacer scroll (clase .is-visible en .reveal y .scroll-line).
 * Cuando un elemento vuelve a quedar por debajo del viewport, se rearma suavemente para
 * que el efecto de entrada al bajar siempre sea visible y fluido.
 */
export function useScrollReveal(triggerKey?: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('.reveal, .scroll-line');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else if (entry.boundingClientRect.top > window.innerHeight * 0.94) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -56px 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [triggerKey]);
}
