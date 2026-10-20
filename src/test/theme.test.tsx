import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

describe('Sistema de Temas Claro/Oscuro', () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  it('inicia en modo oscuro por defecto', () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <ThemeSwitcher />
        </LanguageProvider>
      </ThemeProvider>
    );

    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('alterna entre modo oscuro y claro al hacer clic', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <LanguageProvider>
          <ThemeSwitcher />
        </LanguageProvider>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(document.documentElement.dataset.theme).toBe('dark');

    // Clic para cambiar a claro
    await user.click(button);
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');

    // Clic para volver a oscuro
    await user.click(button);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});
