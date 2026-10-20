import type { Dictionary } from '../i18n/translations';

export interface NavItem {
  id: string;
  href: string;
  labelKey: keyof Dictionary['nav'];
  isPrimary: boolean;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'hero', href: '#hero', labelKey: 'home', isPrimary: true },
  { id: 'about', href: '#about', labelKey: 'about', isPrimary: true },
  { id: 'tech-stack', href: '#tech-stack', labelKey: 'skills', isPrimary: true },
  { id: 'experience', href: '#experience', labelKey: 'experience', isPrimary: true },
  { id: 'projects', href: '#projects', labelKey: 'projects', isPrimary: true },
  { id: 'education', href: '#education', labelKey: 'education', isPrimary: false },
  { id: 'soft-skills', href: '#soft-skills', labelKey: 'softSkills', isPrimary: false },
  { id: 'languages', href: '#languages', labelKey: 'languages', isPrimary: false },
  { id: 'focus', href: '#focus', labelKey: 'focus', isPrimary: false },
  { id: 'contact', href: '#contact', labelKey: 'contact', isPrimary: true },
] as const;

export const PRIMARY_NAV_ITEMS = NAV_ITEMS.filter((item) => item.isPrimary);
export const SECONDARY_NAV_ITEMS = NAV_ITEMS.filter((item) => !item.isPrimary);
