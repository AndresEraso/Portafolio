import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { Experience } from '../sections/Experience';

describe('Sección Experiencia', () => {
  it('renderiza ambas experiencias en orden cronológico (ST&T LTDA primero, ICETEX después)', () => {
    const { container } = render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    );

    // Ambas organizaciones deben estar presentes
    expect(screen.getByText('ST&T LTDA')).toBeInTheDocument();
    expect(screen.getByText('Proyecto Comunitario ICETEX')).toBeInTheDocument();

    // Comprobamos el orden en el DOM
    const companies = container.querySelectorAll('.experience__company');
    expect(companies.length).toBe(2);
    expect(companies[0].textContent).toBe('ST&T LTDA');
    expect(companies[1].textContent).toBe('Proyecto Comunitario ICETEX');

    // Comprobamos la etiqueta de voluntariado y la descripción exacta
    expect(screen.getByText('Voluntariado')).toBeInTheDocument();
    expect(screen.getByText('Docente voluntario')).toBeInTheDocument();
    expect(screen.getByText(/2023 – Actualidad/)).toBeInTheDocument();
    expect(
      screen.getByText(/Brindo clases de informática a estudiantes, fortaleciendo sus conocimientos en programación y tecnología\./)
    ).toBeInTheDocument();
  });

  it('permite interactuar con las pestañas de responsabilidades de ST&T LTDA', () => {
    render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    );

    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(6);

    // Seleccionamos la pestaña "Incidencias"
    const incidentsTab = screen.getByRole('tab', { name: /incidencias/i });
    fireEvent.click(incidentsTab);

    expect(incidentsTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/Diagnóstico y resolución de incidencias/i)).toBeInTheDocument();
  });
});
