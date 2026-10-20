import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { readStorage, STORAGE_KEYS, writeStorage } from '../lib/storage';
import { LanguageContext } from './languageContext';
import { DEFAULT_LANGUAGE, isLanguage, translations, type Language } from './translations';

function getInitialLanguage(): Language {
  const fromDoc = document.documentElement.lang;
  if (isLanguage(fromDoc)) return fromDoc;

  const stored = readStorage(STORAGE_KEYS.language);
  if (isLanguage(stored)) return stored;

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    writeStorage(STORAGE_KEYS.language, language);

    const currentDict = translations[language];
    document.title = currentDict.meta.title;

    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = currentDict.meta.description;
    }
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((curr) => (curr === 'es' ? 'en' : 'es'));
  }, []);

  const t = useMemo(() => translations[language], [language]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
