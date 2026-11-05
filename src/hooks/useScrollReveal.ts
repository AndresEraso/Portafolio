import { useEffect } from 'react';

const REVEAL_SELECTOR =
  '.tab-screen:not([hidden]) .reveal, .tab-screen:not([hidden]) .scroll-line, main > section .reveal, main > section .scroll-line';

/**
 * Anima progresivamente los elementos .reveal y .scroll-line a medida que entran
 * al viewport haciendo scroll hacia abajo:
 * - Usa data-revealed="true" + data-reveal-done="true" (inmunes a re-renders de
 *   className en React al hacer hover o expandir tarjetas) para que ningún objeto
 *   vuelva a ocultarse por error una vez revelado.
 * - Reinicia limpiamente el ciclo al cambiar de pestaña principal (triggerKey)
 *   después de posicionar el scroll arriba, evitando revelados prematuros fuera de vista.
 */
export function useScrollReveal(triggerKey?: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const queryRevealables = (): HTMLElement[] =>
      Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('.reveal, .scroll-line').forEach((el) => {
        el.dataset.revealed = 'true';
        el.dataset.revealDone = 'true';
        el.classList.add('is-visible');
      });
      return;
    }

    // Reinicia el estado de aparición en la pestaña que acaba de activarse
    queryRevealables().forEach((el) => {
      delete el.dataset.revealed;
      delete el.dataset.revealDone;
      el.classList.remove('is-visible');
    });

    const timers = new Set<number>();
    const observed = new WeakSet<Element>();

    const markRevealed = (el: HTMLElement) => {
      if (el.dataset.revealed === 'true') return;
      el.dataset.revealed = 'true';
      el.classList.add('is-visible');

      const rawStagger = el.style.getPropertyValue('--stagger-index');
      const staggerIdx = rawStagger ? Number.parseFloat(rawStagger) || 0 : 0;
      const doneDelay = 760 + Math.min(Math.max(staggerIdx, 0) * 80, 480);

      const timerId = window.setTimeout(() => {
        timers.delete(timerId);
        el.dataset.revealDone = 'true';
      }, doneDelay);
      timers.add(timerId);
    };

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
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.05,
      }
    );

    const registerElements = () => {
      queryRevealables().forEach((el) => {
        if (el.dataset.revealed === 'true') return;
        if (!observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    };

    const checkVisibleOnScroll = () => {
      const triggerLine = window.innerHeight * 0.9;
      queryRevealables().forEach((el) => {
        if (el.dataset.revealed === 'true') return;
        const rect = el.getBoundingClientRect();
        if (rect.height > 0 && rect.top <= triggerLine && rect.bottom > 20) {
          markRevealed(el);
          observer.unobserve(el);
        }
      });
    };

    let scrollRafId = 0;
    const handleScroll = () => {
      if (scrollRafId) return;
      scrollRafId = window.requestAnimationFrame(() => {
        scrollRafId = 0;
        checkVisibleOnScroll();
      });
    };

    let initRaf2 = 0;
    const initRaf1 = window.requestAnimationFrame(() => {
      initRaf2 = window.requestAnimationFrame(() => {
        registerElements();
      });
    });

    const activeScreen =
      document.querySelector<HTMLElement>('.tab-screen:not([hidden])') ??
      document.getElementById('main-content') ??
      document.body;

    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(activeScreen, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(initRaf1);
      if (initRaf2) window.cancelAnimationFrame(initRaf2);
      if (scrollRafId) window.cancelAnimationFrame(scrollRafId);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
    };
  }, [triggerKey]);
}
