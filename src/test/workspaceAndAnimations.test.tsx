import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

function renderPortfolio() {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
}

describe('División en 4 pestañas, botón Uiverse de avance y persistencia visual del panal y proyectos', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    vi.useRealTimers();
    window.history.replaceState(null, '', '/');
  });

  it('divide la página en las 4 pestañas exactas y avanza entre ellas con el botón Uiverse inferior', () => {
    const { container } = renderPortfolio();

    const tab1 = container.querySelector('#screen-tab1')!;
    const tab2 = container.querySelector('#screen-tab2')!;
    const tab3 = container.querySelector('#screen-tab3')!;
    const tab4 = container.querySelector('#screen-tab4')!;

    // Agrupación exacta de secciones por pestaña
    expect(tab1.querySelector('#hero')).toBeInTheDocument();
    expect(tab1.querySelector('#about')).toBeInTheDocument();

    expect(tab2.querySelector('#tech-stack')).toBeInTheDocument();
    expect(tab2.querySelector('#experience')).toBeInTheDocument();
    expect(tab2.querySelector('#projects')).toBeInTheDocument();

    expect(tab3.querySelector('#education')).toBeInTheDocument();
    expect(tab3.querySelector('#soft-skills')).toBeInTheDocument();
    expect(tab3.querySelector('#languages')).toBeInTheDocument();
    expect(tab3.querySelector('#focus')).toBeInTheDocument();

    expect(tab4.querySelector('#contact')).toBeInTheDocument();

    // Inicialmente solo la pestaña 1 está activa
    expect(tab1).not.toHaveAttribute('hidden');
    expect(tab2).toHaveAttribute('hidden');
    expect(tab3).toHaveAttribute('hidden');
    expect(tab4).toHaveAttribute('hidden');

    // Las 4 pestañas del Header usan una sola palabra clara por pestaña
    const headerTabLabels = Array.from(
      container.querySelectorAll('.header__tab-btn .header__tab-label')
    ).map((el) => el.textContent?.trim());
    expect(headerTabLabels).toEqual(['Perfil', 'Trayectoria', 'Formación', 'Contacto']);
    headerTabLabels.forEach((word) => {
      expect(word?.split(/\s+/).length).toBe(1);
    });

    // Botón Uiverse al final de Pestaña 1 ("Habilidades técnicas") -> Pestaña 2
    const nextBtn1 = tab1.querySelector<HTMLButtonElement>('.next-tab-btn')!;
    expect(nextBtn1.textContent).toContain('Habilidades técnicas');
    fireEvent.click(nextBtn1);
    expect(tab2).not.toHaveAttribute('hidden');
    expect(tab1).toHaveAttribute('hidden');

    // Botón Uiverse al final de Pestaña 2 ("Educación y certificaciones") -> Pestaña 3
    const nextBtn2 = tab2.querySelector<HTMLButtonElement>('.next-tab-btn')!;
    expect(nextBtn2.textContent).toContain('Educación y certificaciones');
    fireEvent.click(nextBtn2);
    expect(tab3).not.toHaveAttribute('hidden');
    expect(tab2).toHaveAttribute('hidden');

    // Botón Uiverse al final de Pestaña 3 ("Contacto profesional") -> Pestaña 4
    const nextBtn3 = tab3.querySelector<HTMLButtonElement>('.next-tab-btn')!;
    expect(nextBtn3.textContent).toContain('Contacto profesional');
    fireEvent.click(nextBtn3);
    expect(tab4).not.toHaveAttribute('hidden');
    expect(tab3).toHaveAttribute('hidden');

    // Botón Uiverse al final de Pestaña 4 ("Inicio") -> regresa a Pestaña 1
    const nextBtn4 = tab4.querySelector<HTMLButtonElement>('.next-tab-btn')!;
    expect(nextBtn4.textContent).toContain('Inicio');
    fireEvent.click(nextBtn4);
    expect(tab1).not.toHaveAttribute('hidden');
  });

  it('escribe en vivo el encabezado h1 del Hero letra por letra y mantiene el cursor | parpadeando', () => {
    vi.useFakeTimers();
    const { container } = renderPortfolio();

    const headline = container.querySelector('h1.hero__headline');
    const nameSpan = container.querySelector('.hero__name');
    const roleSpan = container.querySelector('.hero__role-badge.mono');

    expect(headline).toBeInTheDocument();
    expect(nameSpan?.textContent).toBe('|');

    for (let i = 0; i < 75; i++) {
      act(() => {
        vi.advanceTimersByTime(220);
      });
    }

    expect(headline).toHaveAttribute('data-typing-complete', 'true');
    expect(nameSpan?.textContent).toContain('Duber Andrés Eraso Uni');
    expect(roleSpan?.textContent).toContain('ST&T LTDA');
    expect(container.querySelector('.hero__typing-cursor--idle')?.textContent).toBe('|');
  });

  it('mantiene visibles los 26 hexágonos del panal después de pasar y retirar el cursor', () => {
    const { container } = renderPortfolio();

    // Ir a Pestaña 2
    fireEvent.click(container.querySelector('#header-tab-tab2')!);

    const honeycomb = container.querySelector('.honeycomb')!;
    const hexCells = container.querySelectorAll<HTMLButtonElement>('.hex-cell');
    expect(hexCells.length).toBe(PORTFOLIO_DATA.techHoneycomb.length);
    expect(hexCells.length).toBe(26);

    // Ningún hexágono usa .reveal directamente para evitar que desaparezca al actualizar su clase
    hexCells.forEach((cell) => {
      expect(cell).not.toHaveClass('reveal');
    });

    const firstHex = hexCells[0];
    fireEvent.mouseEnter(firstHex);
    expect(firstHex).toHaveClass('is-hovered');
    expect(honeycomb).toHaveClass('has-hovered-cell');
    expect(container.querySelector('.hex-popup[role="tooltip"]')).toBeInTheDocument();

    // Al retirar el cursor, vuelve a su estado inicial sin ocultarse
    fireEvent.mouseLeave(firstHex);
    expect(firstHex).not.toHaveClass('is-hovered');
    expect(honeycomb).not.toHaveClass('has-hovered-cell');
    expect(container.querySelector('.hex-popup[role="tooltip"]')).not.toBeInTheDocument();
    expect(container.querySelectorAll('.hex-cell').length).toBe(26);

    // Clic abre el modal detallado y Escape lo cierra
    fireEvent.click(firstHex);
    const modal = screen.getByRole('dialog');
    expect(modal.querySelector('.hex-modal')).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(container.querySelector('.hex-modal')).not.toBeInTheDocument();
  });

  it('mantiene visibles las tarjetas de proyectos al filtrar y al interactuar con ellas', () => {
    const { container } = renderPortfolio();

    fireEvent.click(container.querySelector('#header-tab-tab2')!);

    const filterPills = container.querySelectorAll<HTMLButtonElement>('.projects__filter-pill');
    expect(filterPills.length).toBe(3);

    // Filtrar Finalizados (1) -> Trabajo de grado (1) -> Todos (2)
    fireEvent.click(filterPills[1]);
    expect(container.querySelectorAll('.case-study').length).toBe(1);

    fireEvent.click(filterPills[2]);
    expect(container.querySelectorAll('.case-study').length).toBe(1);

    fireEvent.click(filterPills[0]);
    const allCards = container.querySelectorAll('.case-study');
    expect(allCards.length).toBe(2);
    allCards.forEach((card) => {
      expect(card).not.toHaveClass('reveal');
    });
  });

  it('revela progresivamente los objetos .reveal al hacer scroll hacia abajo y los mantiene visibles', () => {
    vi.useFakeTimers();
    let observerCallback: IntersectionObserverCallback | null = null;
    const observedElements = new Set<Element>();
    const originalIO = window.IntersectionObserver;

    class TrackingIntersectionObserver {
      constructor(cb: IntersectionObserverCallback) {
        observerCallback = cb;
      }
      observe = (el: Element) => {
        observedElements.add(el);
      };
      unobserve = (el: Element) => {
        observedElements.delete(el);
      };
      disconnect = () => {
        observedElements.clear();
      };
      takeRecords = () => [];
    }

    window.IntersectionObserver =
      TrackingIntersectionObserver as unknown as typeof IntersectionObserver;

    try {
      const { container } = renderPortfolio();

      act(() => {
        vi.advanceTimersByTime(60);
      });

      const aboutMain = container.querySelector<HTMLElement>('#about .about__main.reveal')!;
      expect(observedElements.has(aboutMain)).toBe(true);
      expect(aboutMain).not.toHaveAttribute('data-revealed', 'true');

      // Simular que el usuario hace scroll hacia abajo y el elemento entra al viewport
      const emitIntersection = observerCallback as
        | ((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void)
        | null;
      act(() => {
        emitIntersection?.(
          [{ isIntersecting: true, target: aboutMain } as unknown as IntersectionObserverEntry],
          {} as IntersectionObserver
        );
      });

      expect(aboutMain).toHaveAttribute('data-revealed', 'true');

      act(() => {
        vi.advanceTimersByTime(900);
      });

      expect(aboutMain).toHaveAttribute('data-reveal-done', 'true');
    } finally {
      window.IntersectionObserver = originalIO;
    }
  });
});
