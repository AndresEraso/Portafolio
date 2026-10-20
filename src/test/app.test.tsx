import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

describe('Montaje general de la aplicación', () => {
  it('renderiza el header, el footer y las 10 secciones sin errores', () => {
    const { container } = render(
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    );

    // Header y Footer
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // Las 10 secciones deben tener sus IDs correspondientes en el DOM
    const expectedSectionIds = [
      'hero',
      'about',
      'tech-stack',
      'experience',
      'projects',
      'education',
      'soft-skills',
      'languages',
      'focus',
      'contact',
    ];

    expectedSectionIds.forEach((id) => {
      const section = container.querySelector(`#${id}`);
      expect(section).toBeInTheDocument();
    });

    // Verifica que el nombre del autor aparece en el DOM
    expect(screen.getAllByText(/Duber Andrés Eraso Uni/i).length).toBeGreaterThan(0);
  });
});
