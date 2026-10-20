import { describe, expect, it } from 'vitest';
import { translations } from '../i18n/translations';

describe('Traducciones Bilingües', () => {
  it('contiene diccionarios completos para español e inglés', () => {
    expect(translations.es).toBeDefined();
    expect(translations.en).toBeDefined();
  });

  it('tiene títulos y metadatos definidos en ambos idiomas', () => {
    expect(translations.es.meta.title).toContain('Duber Andrés Eraso Uni');
    expect(translations.en.meta.title).toContain('Duber Andrés Eraso Uni');
    expect(translations.es.meta.description.length).toBeGreaterThan(20);
    expect(translations.en.meta.description.length).toBeGreaterThan(20);
  });

  it('traduce las diez secciones requeridas', () => {
    const sections = [
      'hero',
      'about',
      'techStack',
      'experience',
      'projects',
      'education',
      'softSkills',
      'languages',
      'focus',
      'contact',
    ] as const;

    sections.forEach((section) => {
      expect(translations.es[section]).toBeDefined();
      expect(translations.en[section]).toBeDefined();
    });
  });

  it('mantiene la paridad en la navegación', () => {
    expect(translations.es.nav.home).toBe('Inicio');
    expect(translations.en.nav.home).toBe('Home');
    expect(translations.es.nav.about).toBe('Sobre mí');
    expect(translations.en.nav.about).toBe('About');
  });

  it('incluye las traducciones de experiencia profesional y voluntariado', () => {
    // Experiencia actual de empleo (ST&T LTDA)
    expect(translations.es.experience.role).toBe('Desarrollador de back-end');
    expect(translations.en.experience.role).toBe('Backend Developer');

    // Voluntariado ICETEX
    expect(translations.es.experience.volunteerBadge).toBe('Voluntariado');
    expect(translations.en.experience.volunteerBadge).toBe('Volunteering');

    expect(translations.es.experience.icetex.organization).toBe('Proyecto Comunitario ICETEX');
    expect(translations.en.experience.icetex.organization).toBe('Proyecto Comunitario ICETEX');

    expect(translations.es.experience.icetex.role).toBe('Docente voluntario');
    expect(translations.en.experience.icetex.role).toBe('Volunteer Instructor');

    expect(translations.es.experience.icetex.period).toContain('2023');
    expect(translations.en.experience.icetex.period).toContain('2023');

    expect(translations.es.experience.icetex.description).toContain('clases de informática');
    expect(translations.en.experience.icetex.description).toContain('computer science classes');
  });
});
