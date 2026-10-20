import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

describe('Sistema de Idiomas Español/Inglés', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = 'es';
  });

  it('inicia en español por defecto', () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <LanguageSwitcher />
        </LanguageProvider>
      </ThemeProvider>
    );

    expect(document.documentElement.lang).toBe('es');
    const esRadio = screen.getByRole('radio', { name: /español/i });
    expect(esRadio).toHaveAttribute('aria-checked', 'true');
  });

  it('cambia a inglés y actualiza el atributo lang y localStorage', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <LanguageProvider>
          <LanguageSwitcher />
        </LanguageProvider>
      </ThemeProvider>
    );

    const enRadio = screen.getByRole('radio', { name: /english/i });
    await user.click(enRadio);

    expect(document.documentElement.lang).toBe('en');
    expect(enRadio).toHaveAttribute('aria-checked', 'true');
    expect(localStorage.getItem('portfolio-lang')).toBe('en');

    // Cambiar de vuelta a español
    const esRadio = screen.getByRole('radio', { name: /español/i });
    await user.click(esRadio);

    expect(document.documentElement.lang).toBe('es');
    expect(esRadio).toHaveAttribute('aria-checked', 'true');
    expect(localStorage.getItem('portfolio-lang')).toBe('es');
  });
});
