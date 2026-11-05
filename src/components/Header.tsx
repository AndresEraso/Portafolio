import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { PAGE_TABS, type PageTabId } from '../data/navigation';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { ThemeSwitcher } from './ThemeSwitcher';
import './Header.css';

interface HeaderProps {
  activeId: string;
  activeTab: PageTabId;
  onSelectTab: (tab: PageTabId) => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Header({
  activeId,
  activeTab,
  onSelectTab,
  onNavigateSection,
}: HeaderProps) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header__container container">
          {/* Identidad / Monograma */}
          <a
            href="#hero"
            className="header__logo"
            aria-label={t.a11y.homeLink}
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('tab1');
            }}
          >
            <span className="header__logo-badge">DE</span>
            <span className="header__logo-name">{PORTFOLIO_DATA.profile.shortName}</span>
          </a>

          {/* Navegación unificada de 4 pestañas en el Header */}
          <nav className="header__nav" aria-label={t.a11y.primaryNav}>
            <div
              className="header__tablist"
              role="tablist"
              aria-label={t.pageTabs.tablistLabel}
            >
              {PAGE_TABS.map((tab) => {
                const isSelected = activeTab === tab.id;
                const copy = t.pageTabs.tabs[tab.id];

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`header-tab-${tab.id}`}
                    title={copy.hint}
                    aria-selected={isSelected}
                    aria-controls={`screen-${tab.id}`}
                    className={`header__tab-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => onSelectTab(tab.id)}
                  >
                    <span className="header__tab-num mono">{tab.number}</span>
                    <span className="header__tab-label">{copy.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Controles de Idioma, Tema y Menú Móvil */}
          <div className="header__actions">
            <div className="header__controls-desktop">
              <LanguageSwitcher id="header-lang-switcher" />
              <ThemeSwitcher id="header-theme-switcher" />
            </div>

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
        <div className="header__progress-bar" aria-hidden="true" />
      </header>

      {/* Menú móvil accesible con acceso a las 4 pestañas y sus secciones */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeId={activeId}
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        onNavigateSection={onNavigateSection}
      />
    </>
  );
}
