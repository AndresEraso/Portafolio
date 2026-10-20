import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import './ThemeSwitcher.css';

interface ThemeSwitcherProps {
  id?: string;
}

export function ThemeSwitcher({ id = 'theme-switcher' }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';
  const label = isDark ? t.a11y.switchToLight : t.a11y.switchToDark;

  return (
    <button
      id={id}
      type="button"
      className="theme-switcher"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className="theme-switcher__track">
        <Sun
          className={`theme-switcher__icon theme-switcher__icon--sun ${!isDark ? 'is-active' : ''}`}
          size={16}
          aria-hidden="true"
        />
        <Moon
          className={`theme-switcher__icon theme-switcher__icon--moon ${isDark ? 'is-active' : ''}`}
          size={16}
          aria-hidden="true"
        />
      </span>
      <span className="visually-hidden">{label}</span>
    </button>
  );
}
