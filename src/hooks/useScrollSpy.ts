import { useEffect, useState } from 'react';

/**
 * Detecta la sección visible activa actual según la posición de scroll del usuario,
 * ignorando paneles ocultos ([hidden]) y ordenando por posición real en el documento.
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  offset = 140,
  triggerKey?: string
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const visibleSections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el || el.closest('[hidden]')) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id, top };
        })
        .filter((item): item is { id: string; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);

      for (let i = visibleSections.length - 1; i >= 0; i--) {
        if (scrollPosition >= visibleSections[i].top) {
          setActiveId(visibleSections[i].id);
          return;
        }
      }

      if (visibleSections.length > 0) {
        setActiveId(visibleSections[0].id);
      }
    };

    const raf = window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset, triggerKey]);

  return activeId;
}
