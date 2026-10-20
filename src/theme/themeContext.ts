import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export const DEFAULT_THEME: Theme = 'dark';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function isTheme(value: unknown): value is Theme {
  return value === 'dark' || value === 'light';
}
