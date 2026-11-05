import type { Dictionary } from '../i18n/translations';

export interface NavItem {
  id: string;
  href: string;
  labelKey: keyof Dictionary['nav'];
  isPrimary: boolean;
}

export type PageTabId = 'tab1' | 'tab2' | 'tab3' | 'tab4';

export interface PageTabConfig {
  id: PageTabId;
  number: string;
  sectionIds: readonly string[];
  nextTabId: PageTabId;
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

export const PAGE_TABS: readonly PageTabConfig[] = [
  {
    id: 'tab1',
    number: '01',
    sectionIds: ['hero', 'about'],
    nextTabId: 'tab2',
  },
  {
    id: 'tab2',
    number: '02',
    sectionIds: ['tech-stack', 'experience', 'projects'],
    nextTabId: 'tab3',
  },
  {
    id: 'tab3',
    number: '03',
    sectionIds: ['education', 'soft-skills', 'languages', 'focus'],
    nextTabId: 'tab4',
  },
  {
    id: 'tab4',
    number: '04',
    sectionIds: ['contact'],
    nextTabId: 'tab1',
  },
] as const;

export const SECTION_TO_TAB: Record<string, PageTabId> = {
  hero: 'tab1',
  about: 'tab1',
  'tech-stack': 'tab2',
  experience: 'tab2',
  projects: 'tab2',
  education: 'tab3',
  'soft-skills': 'tab3',
  languages: 'tab3',
  focus: 'tab3',
  contact: 'tab4',
};
