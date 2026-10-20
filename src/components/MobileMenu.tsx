import { useEffect } from 'react';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

export function MobileMenu({ isOpen, onClose, activeId }: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('is-menu-open');

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.classList.remove('is-menu-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.classList.remove('is-menu-open');
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-nav-dialog"
      className="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t.a11y.mobileNav}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mobile-menu">
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">{t.nav.menu}</span>
          <button
            type="button"
            className="mobile-menu__close-btn"
            onClick={onClose}
            aria-label={t.a11y.closeMenu}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label={t.a11y.mobileNav}>
          <ul className="mobile-menu__list" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              const label = t.nav[item.labelKey];

              return (
                <li key={item.id} className="mobile-menu__item">
                  <a
                    href={item.href}
                    className={`mobile-menu__link ${isActive ? 'is-active' : ''}`}
                    onClick={onClose}
                  >
                    <span>{label}</span>
                    {isActive && <span className="mobile-menu__indicator" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <span className="mobile-menu__footer-label">{t.nav.preferences}</span>
          <div className="mobile-menu__controls">
            <LanguageSwitcher id="mobile-lang-switcher" />
            <ThemeSwitcher id="mobile-theme-switcher" />
          </div>
        </div>
      </div>
    </div>
  );
}
