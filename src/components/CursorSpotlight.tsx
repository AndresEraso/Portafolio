import { useEffect } from 'react';

/**
 * Luz ambiental que sigue el puntero (inspirado en v4) + progreso de lectura
 * en el documento para la barra superior de telemetría.
 * Respeta prefers-reduced-motion y dispositivos táctiles.
 */
export function CursorSpotlight() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let pointerRaf = 0;
    let scrollRaf = 0;

    const updateScrollProgress = () => {
      scrollRaf = 0;
      const scrollTop = window.scrollY || root.scrollTop || 0;
      const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(1, Math.max(0, scrollTop / maxScroll));
      root.style.setProperty('--scroll-progress', ratio.toFixed(4));
    };

    const handleScroll = () => {
      if (scrollRaf === 0) {
        scrollRaf = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    if (prefersReducedMotion) {
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        if (scrollRaf) window.cancelAnimationFrame(scrollRaf);
      };
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const { clientX, clientY, target } = event;

      if (pointerRaf !== 0) {
        window.cancelAnimationFrame(pointerRaf);
      }

      pointerRaf = window.requestAnimationFrame(() => {
        pointerRaf = 0;
        root.style.setProperty('--spotlight-x', `${clientX}px`);
        root.style.setProperty('--spotlight-y', `${clientY}px`);

        if (target instanceof Element) {
          const card = target.closest<HTMLElement>('.focus-card');
          if (card) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--card-mouse-x', `${clientX - rect.left}px`);
            card.style.setProperty('--card-mouse-y', `${clientY - rect.top}px`);
          }
        }
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (pointerRaf) window.cancelAnimationFrame(pointerRaf);
      if (scrollRaf) window.cancelAnimationFrame(scrollRaf);
    };
  }, []);

  return <div className="cursor-spotlight" aria-hidden="true" />;
}
