import { useContext } from 'react';
import { LanguageContext } from '../i18n/languageContext';

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe utilizarse dentro de <LanguageProvider>.');
  }
  return context;
}
