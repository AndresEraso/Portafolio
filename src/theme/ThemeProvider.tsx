import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { readStorage, STORAGE_KEYS, writeStorage } from '../lib/storage';
import { DEFAULT_THEME, isTheme, ThemeContext, type Theme } from './themeContext';

function getInitialTheme(): Theme {
  // 1) Atributo ya aplicado por el script anti-parpadeo de index.html.
  const fromDocument = document.documentElement.dataset.theme;
  if (isTheme(fromDocument)) return fromDocument;
  // 2) Preferencia guardada.
  const stored = readStorage(STORAGE_KEYS.theme);
  if (isTheme(stored)) return stored;
  // 3) Valor predeterminado: oscuro.
  return DEFAULT_THEME;
}

/**
 * Proveedor único del tema claro/oscuro. Ningún componente mantiene su propio
 * estado de tema: todos lo leen desde aquí mediante `useTheme()`.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    writeStorage(STORAGE_KEYS.theme, theme);

    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) {
      meta.content = getComputedStyle(root).getPropertyValue('--color-background').trim() || meta.content;
    }

    // Transición suave solo cuando el usuario cambia el tema (no en la carga inicial).
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    root.classList.add('theme-transition');
    const timeout = window.setTimeout(() => root.classList.remove('theme-transition'), 350);
    return () => window.clearTimeout(timeout);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleTheme = useCallback(
    () => setThemeState((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  );

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
