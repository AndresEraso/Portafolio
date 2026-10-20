import { useEffect } from 'react';

/**
 * Activa las animaciones de aparición al hacer scroll (clase .is-visible en .reveal).
 * Respeta automáticamente prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
