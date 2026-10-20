import type { Language } from '../i18n/translations';

const LOCALES: Record<Language, string> = {
  es: 'es-CO',
  en: 'en-US',
};

/**
 * Convierte una fecha `AAAA-MM` en texto localizado, por ejemplo:
 *   formatMonthYear('2026-01', 'es') → "Enero de 2026"
 *   formatMonthYear('2026-01', 'en') → "January 2026"
 */
export function formatMonthYear(value: string, language: Language): string {
  const [year, month] = value.split('-').map(Number);
  if (!year || !month) return value;

  const date = new Date(Date.UTC(year, month - 1, 1));
  const text = new Intl.DateTimeFormat(LOCALES[language], {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);

  return text.charAt(0).toLocaleUpperCase(LOCALES[language]) + text.slice(1);
}
