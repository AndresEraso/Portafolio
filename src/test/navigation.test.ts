import { describe, expect, it } from 'vitest';
import { NAV_ITEMS, PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from '../data/navigation';

describe('Navegación del sitio', () => {
  it('contiene las 10 secciones principales requeridas', () => {
    expect(NAV_ITEMS).toHaveLength(10);
    const ids = NAV_ITEMS.map((item) => item.id);
    expect(ids).toEqual([
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
    ]);
  });

  it('separa enlaces primarios y secundarios para un header balanceado', () => {
    expect(PRIMARY_NAV_ITEMS.length).toBeGreaterThan(0);
    expect(SECONDARY_NAV_ITEMS.length).toBeGreaterThan(0);
    expect(PRIMARY_NAV_ITEMS.length + SECONDARY_NAV_ITEMS.length).toBe(NAV_ITEMS.length);
  });
});
