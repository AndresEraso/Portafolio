import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Footer } from '../components/Footer';
import { LanguageProvider } from '../i18n/LanguageProvider';

describe('Componente Footer', () => {
  it('renderiza la identidad técnica, lema y año actual correctamente', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('Duber Andrés Eraso Uni')).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('renderiza el canal verificado de GitHub con sus atributos accesibles', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/AndresEraso');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(screen.getByText('VERIFIED')).toBeInTheDocument();
  });

  it('incluye navegación secundaria hacia las secciones principales', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const footerNav = screen.getByRole('navigation', { name: /pie de página|footer/i });
    expect(footerNav).toBeInTheDocument();

    const navLinks = footerNav.querySelectorAll('a');
    const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('#hero');
    expect(hrefs).toContain('#projects');
    expect(hrefs).toContain('#contact');
  });

  it('el botón de volver al inicio invoca window.scrollTo', () => {
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const backToTopBtn = screen.getByRole('button', { name: /volver al inicio|back to top/i });
    fireEvent.click(backToTopBtn);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
