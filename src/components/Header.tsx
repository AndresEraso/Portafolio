import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from '../data/navigation';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { ThemeSwitcher } from './ThemeSwitcher';
import './Header.css';

interface HeaderProps {
  activeId: string;
}

export function Header({ activeId }: HeaderProps) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLLIElement>(null);

  // Efecto para sombra y fondo del header al desplazarse
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú secundario al hacer clic fuera o pulsar Escape
  useEffect(() => {
    if (!isMoreOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMoreOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMoreOpen]);

  const isSecondaryActive = SECONDARY_NAV_ITEMS.some((item) => item.id === activeId);

  return (
    <>
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header__container container">
          {/* Identidad / Monograma */}
          <a href="#hero" className="header__logo" aria-label={t.a11y.homeLink}>
            <span className="header__logo-badge">DE</span>
            <span className="header__logo-name">{PORTFOLIO_DATA.profile.shortName}</span>
          </a>

          {/* Navegación de escritorio */}
          <nav className="header__nav" aria-label={t.a11y.primaryNav}>
            <ul className="header__nav-list" role="list">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="header__nav-item">
                    <a
                      href={item.href}
                      className={`header__nav-link ${isActive ? 'is-active' : ''}`}
                    >
                      {t.nav[item.labelKey]}
                    </a>
                  </li>
                );
              })}

              {/* Menú desplegable para secciones secundarias */}
              <li className="header__nav-item header__dropdown-wrapper" ref={moreDropdownRef}>
                <button
                  type="button"
                  className={`header__nav-link header__dropdown-trigger ${
                    isSecondaryActive ? 'is-active' : ''
                  }`}
                  aria-expanded={isMoreOpen}
                  aria-haspopup="true"
                  aria-label={t.a11y.moreSections}
                  onClick={() => setIsMoreOpen((prev) => !prev)}
                >
                  <span>{t.nav.more}</span>
                  <ChevronDown
                    size={14}
                    className={`header__dropdown-icon ${isMoreOpen ? 'is-open' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {isMoreOpen && (
                  <div className="header__dropdown-menu" role="menu">
                    {SECONDARY_NAV_ITEMS.map((item) => {
                      const isActive = activeId === item.id;
                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          role="menuitem"
                          className={`header__dropdown-item ${isActive ? 'is-active' : ''}`}
                          onClick={() => setIsMoreOpen(false)}
                        >
                          {t.nav[item.labelKey]}
                        </a>
                      );
                    })}
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Controles de Idioma y Tema (Escritorio y Móvil) */}
          <div className="header__actions">
            <div className="header__controls-desktop">
              <LanguageSwitcher id="header-lang-switcher" />
              <ThemeSwitcher id="header-theme-switcher" />
            </div>

            {/* Botón de Menú Móvil */}
            <button
              type="button"
              className="header__menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-dialog"
              aria-label={t.a11y.openMenu}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil accesible */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeId={activeId}
      />
    </>
  );
}
