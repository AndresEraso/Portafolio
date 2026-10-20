import { useLanguage } from '../hooks/useLanguage';
import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
  id?: string;
}

export function LanguageSwitcher({ id = 'lang-switcher' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      id={id}
      className="lang-switcher"
      role="radiogroup"
      aria-label={t.a11y.languageSwitcher}
    >
      <button
        type="button"
        role="radio"
        aria-checked={language === 'es'}
        className={`lang-switcher__btn ${language === 'es' ? 'is-active' : ''}`}
        onClick={() => setLanguage('es')}
      >
        <span className="lang-switcher__text">ES</span>
        <span className="visually-hidden">Español</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={language === 'en'}
        className={`lang-switcher__btn ${language === 'en' ? 'is-active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        <span className="lang-switcher__text">EN</span>
        <span className="visually-hidden">English</span>
      </button>
    </div>
  );
}
