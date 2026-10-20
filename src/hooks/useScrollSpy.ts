import { useEffect, useState } from 'react';

/**
 * Detecta la sección activa actual según la posición de scroll del usuario.
 */
export function useScrollSpy(sectionIds: readonly string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      if (sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
