import { createContext } from 'react';
import { type Dictionary, type Language } from './translations';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
