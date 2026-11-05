import { useEffect } from 'react';
import { X } from 'lucide-react';
import { NAV_ITEMS, PAGE_TABS, type PageTabId } from '../data/navigation';
import { useLanguage } from '../hooks/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
  activeTab: PageTabId;
  onSelectTab: (tab: PageTabId) => void;
  onNavigateSection: (sectionId: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  activeId,
  activeTab,
  onSelectTab,
  onNavigateSection,
}: MobileMenuProps) {
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
          <div className="mobile-menu__groups">
            {PAGE_TABS.map((tab) => {
              const isTabActive = activeTab === tab.id;
              const tabCopy = t.pageTabs.tabs[tab.id];
              const subItems = NAV_ITEMS.filter((item) => tab.sectionIds.includes(item.id));

              return (
                <div
                  key={tab.id}
                  className={`mobile-menu__tab-group ${isTabActive ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className={`mobile-menu__tab-btn ${isTabActive ? 'is-active' : ''}`}
                    onClick={() => {
                      onSelectTab(tab.id);
                      onClose();
                    }}
                  >
                    <span className="mobile-menu__tab-num mono">{tab.number}</span>
                    <span className="mobile-menu__tab-title">{tabCopy.label}</span>
                  </button>

                  {subItems.length > 1 && (
                    <ul className="mobile-menu__sublist" role="list">
                      {subItems.map((item) => {
                        const isSectionActive = isTabActive && activeId === item.id;
                        return (
                          <li key={item.id}>
                            <a
                              href={item.href}
                              className={`mobile-menu__sublink ${
                                isSectionActive ? 'is-active' : ''
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigateSection(item.id);
                                onClose();
                              }}
                            >
                              <span>{t.nav[item.labelKey]}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
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
