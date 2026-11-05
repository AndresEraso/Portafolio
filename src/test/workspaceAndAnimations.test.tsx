import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
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

describe('Navegación unificada, panal hexagonal de tecnologías y animaciones interactivas', () => {
  afterEach(() => {
    vi.useRealTimers();
    window.history.replaceState(null, '', '/');
  });

  it('mantiene una sola barra de navegación en el Header sin barras de pestañas duplicadas ni jerga de consola', () => {
    const { container } = renderPortfolio();

    expect(container.querySelector('header.header')).toBeInTheDocument();
    expect(container.querySelector('#workspace-console')).not.toBeInTheDocument();
    expect(container.textContent).not.toContain('CONSOLA MODULAR');
  });

  it('escribe en vivo el encabezado h1 del Hero letra por letra y mantiene el cursor | parpadeando', () => {
    vi.useFakeTimers();
    const { container } = renderPortfolio();

    const headline = container.querySelector('h1.hero__headline');
    const nameSpan = container.querySelector('.hero__name');
    const roleSpan = container.querySelector('.hero__role-badge.mono');

    expect(headline).toBeInTheDocument();
    expect(nameSpan).toBeInTheDocument();
    expect(roleSpan).toBeInTheDocument();

    expect(nameSpan?.textContent).toBe('|');

    for (let i = 0; i < 75; i++) {
      act(() => {
        vi.advanceTimersByTime(220);
      });
    }

    expect(headline).toHaveAttribute('data-typing-complete', 'true');
    expect(nameSpan?.textContent).toContain('Duber Andrés Eraso Uni');
    expect(roleSpan?.textContent).toContain('ST&T LTDA');

    const idleCursor = container.querySelector('.hero__typing-cursor--idle');
    expect(idleCursor).toBeInTheDocument();
    expect(idleCursor?.textContent).toBe('|');
  });

  it('renderiza las 26 tecnologías verificadas en un panal hexagonal con iconos SVG oficiales, pop-up al pasar el cursor y modal al hacer clic', () => {
    const { container } = renderPortfolio();

    const hexCells = container.querySelectorAll('.hex-cell');
    expect(hexCells.length).toBe(PORTFOLIO_DATA.techHoneycomb.length);
    expect(hexCells.length).toBe(26);

    // Verifica que cada hexágono tenga su icono oficial descargado en /icons/tech/*.svg
    const icons = container.querySelectorAll<HTMLImageElement>('.hex-cell__icon');
    expect(icons.length).toBe(26);
    icons.forEach((img) => {
      expect(img.getAttribute('src')).toMatch(/^\/icons\/tech\/[a-z0-9-]+\.svg$/);
    });

    // Al pasar el cursor sobre un hexágono (ej. Java), crece (.is-hovered) y muestra el pop-up flotante
    const firstHex = hexCells[0] as HTMLButtonElement;
    fireEvent.mouseEnter(firstHex);

    expect(firstHex).toHaveClass('is-hovered');
    const popup = container.querySelector('.hex-popup[role="tooltip"]');
    expect(popup).toBeInTheDocument();
    expect(popup?.textContent).toContain('Java');

    // Al hacer clic en el hexágono, abre el modal detallado y lo cierra con Escape
    fireEvent.click(firstHex);
    const modal = screen.getByRole('dialog');
    expect(modal.querySelector('.hex-modal')).toBeInTheDocument();
    expect(modal.textContent).toContain('Java');

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(container.querySelector('.hex-modal')).not.toBeInTheDocument();

    // Resaltado por categoría en el panal
    const filterButtons = container.querySelectorAll('.honeycomb-filters__btn');
    expect(filterButtons.length).toBeGreaterThan(1);
    fireEvent.click(filterButtons[1]);
    expect(container.querySelectorAll('.hex-cell:not(.is-dimmed)').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('.hex-cell.is-dimmed').length).toBeGreaterThan(0);
  });

  it('prioriza EventManager finalizado con rol explícito y aplica variantes de animación scroll-reveal', () => {
    const { container } = renderPortfolio();

    const projectTitles = Array.from(container.querySelectorAll('.case-study__title')).map((el) =>
      el.textContent?.trim()
    );
    expect(projectTitles[0]).toBe('EventManager');
    expect(projectTitles[1]).toContain('Ñimpe Misak');

    const roleCallouts = container.querySelectorAll('.case-study__role-callout');
    expect(roleCallouts.length).toBe(2);

    // Variantes dinámicas de scroll-reveal y foco ambiental
    expect(container.querySelectorAll('.reveal--left').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('.reveal--right').length).toBeGreaterThan(0);
    expect(container.querySelector('.cursor-spotlight')).toBeInTheDocument();
  });
});
