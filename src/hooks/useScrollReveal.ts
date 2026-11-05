import { useEffect } from 'react';

/**
 * Activa las animaciones de aparición al hacer scroll (clase .is-visible en .reveal y .scroll-line).
 * Acepta una clave opcional para re-evaluar elementos al cambiar de pestaña o filtro.
 * Respeta automáticamente prefers-reduced-motion.
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
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    elements.forEach((el) => {
      if (!el.closest('[hidden]')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [triggerKey]);
}
