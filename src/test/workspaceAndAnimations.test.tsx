import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
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

describe('Consola de pestañas, enfoque profesional y animaciones interactivas', () => {
  afterEach(() => {
    vi.useRealTimers();
    window.history.replaceState(null, '', '/');
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

    // Verifica que inicia vacío visualmente y avanza tecla por tecla como teclado real
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

  it('segmenta el portafolio en 5 pestañas modulares, soporta teclas [1-5] y navegación por #hash', () => {
    const { container } = renderPortfolio();

    const expPanel = container.querySelector('#workspace-panel-experience');
    const projPanel = container.querySelector('#workspace-panel-projects');
    const stackPanel = container.querySelector('#workspace-panel-stack');
    const profilePanel = container.querySelector('#workspace-panel-profile');

    // Inicialmente el módulo 01 (Experiencia) está visible y los demás tienen hidden
    expect(expPanel).not.toHaveAttribute('hidden');
    expect(projPanel).toHaveAttribute('hidden');

    // Al pulsar la tecla '2', activa el módulo 02 (Proyectos)
    fireEvent.keyDown(window, { key: '2' });
    expect(projPanel).not.toHaveAttribute('hidden');
    expect(expPanel).toHaveAttribute('hidden');

    // Al hacer clic en un enlace interno a #soft-skills, cambia a Perfil -> Competencias
    const softSkillsLink = container.querySelector('a[href="#soft-skills"]');
    if (softSkillsLink) {
      fireEvent.click(softSkillsLink);
      expect(profilePanel).not.toHaveAttribute('hidden');
    }

    // Al hacer clic en la pestaña 03 (Especialidad & Stack), muestra el stack
    const stackTab = container.querySelector('#workspace-tab-stack');
    expect(stackTab).toBeInTheDocument();
    fireEvent.click(stackTab!);
    expect(stackPanel).not.toHaveAttribute('hidden');
  });

  it('prioriza EventManager finalizado como CASE.01 con rol explícito y filtra el stack en la especialidad #1', () => {
    const { container } = renderPortfolio();

    // Activar pestaña de Proyectos
    const projectsTab = container.querySelector('#workspace-tab-projects');
    fireEvent.click(projectsTab!);

    const projectTitles = Array.from(container.querySelectorAll('.case-study__title')).map((el) =>
      el.textContent?.trim()
    );
    expect(projectTitles[0]).toBe('EventManager');
    expect(projectTitles[1]).toContain('Ñimpe Misak');

    // Verifica que el callout de rol sea visible directamente en las tarjetas
    const roleCallouts = container.querySelectorAll('.case-study__role-callout');
    expect(roleCallouts.length).toBe(2);

    // Activar pestaña de Stack y verificar filtro enfocado por defecto (4 categorías core) vs Todas (8)
    const stackTab = container.querySelector('#workspace-tab-stack');
    fireEvent.click(stackTab!);

    expect(container.querySelectorAll('.tech-stack__panel').length).toBe(4);

    const filterButtons = container.querySelectorAll('.tech-stack__filter-btn');
    const allFilterBtn = filterButtons[filterButtons.length - 1];
    fireEvent.click(allFilterBtn);

    expect(container.querySelectorAll('.tech-stack__panel').length).toBe(8);
  });

  it('renderiza el foco ambiental que sigue al mouse (.cursor-spotlight)', () => {
    const { container } = renderPortfolio();
    const spotlight = container.querySelector('.cursor-spotlight');
    expect(spotlight).toBeInTheDocument();
  });
});
