import { useEffect } from 'react';

/**
 * Marca los elementos .reveal y .scroll-line con data-revealed="true" cuando entran al viewport.
 * - Usa un atributo data-revealed (inmune a re-renders de className en React al hacer hover,
 *   filtrar o expandir tarjetas) para que ningún elemento vuelva a ocultarse jamás por error.
 * - Incluye un MutationObserver para detectar al instante tarjetas insertadas dinámicamente
 *   (por ejemplo, al cambiar filtros en Proyectos).
 */
export function useScrollReveal(triggerKey?: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const markRevealed = (el: HTMLElement) => {
      el.dataset.revealed = 'true';
      el.classList.add('is-visible');
    };

    const queryRevealables = (): HTMLElement[] =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          '.tab-screen:not([hidden]) .reveal, .tab-screen:not([hidden]) .scroll-line, main > section .reveal, main > section .scroll-line'
        )
      );

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document
        .querySelectorAll<HTMLElement>('.reveal, .scroll-line')
        .forEach(markRevealed);
      return;
    }

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markRevealed(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -36px 0px',
        threshold: 0.06,
      }
    );

    const registerElements = () => {
      queryRevealables().forEach((el) => {
        if (el.dataset.revealed === 'true') return;
        const rect = el.getBoundingClientRect();
        // Si ya está visible en pantalla al montar o filtrar, se revela de inmediato
        if (rect.height > 0 && rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
          markRevealed(el);
          return;
        }
        if (!observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    };

    registerElements();

    const rootTarget = document.getElementById('main-content') ?? document.body;
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(rootTarget, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [triggerKey]);
}
