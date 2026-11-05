import { useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Cpu,
  FolderGit2,
  GraduationCap,
  Mail,
  TerminalSquare,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import './WorkspaceTabs.css';

export type WorkspaceTabId = 'experience' | 'projects' | 'stack' | 'profile' | 'contact';
export type ProfileSubTabId = 'overview' | 'competencies' | 'all';

const WORKSPACE_TAB_ORDER: WorkspaceTabId[] = [
  'experience',
  'projects',
  'stack',
  'profile',
  'contact',
];

interface WorkspaceTabsProps {
  activeTab: WorkspaceTabId;
  onSelectTab: (tab: WorkspaceTabId, options?: { scrollIntoWorkspace?: boolean }) => void;
  profileSubTab: ProfileSubTabId;
  onSelectProfileSubTab: (subTab: ProfileSubTabId) => void;
  panels: Record<WorkspaceTabId, ReactNode>;
}

const TAB_ICONS: Record<WorkspaceTabId, typeof Briefcase> = {
  experience: Briefcase,
  projects: FolderGit2,
  stack: Cpu,
  profile: GraduationCap,
  contact: Mail,
};

export function WorkspaceTabs({
  activeTab,
  onSelectTab,
  profileSubTab,
  onSelectProfileSubTab,
  panels,
}: WorkspaceTabsProps) {
  const { t } = useLanguage();
  const tabRefs = useRef<Record<WorkspaceTabId, HTMLButtonElement | null>>({
    experience: null,
    projects: null,
    stack: null,
    profile: null,
    contact: null,
  });

  const activeIndex = WORKSPACE_TAB_ORDER.indexOf(activeTab);
  const prevTab = activeIndex > 0 ? WORKSPACE_TAB_ORDER[activeIndex - 1] : null;
  const nextTab =
    activeIndex < WORKSPACE_TAB_ORDER.length - 1 ? WORKSPACE_TAB_ORDER[activeIndex + 1] : null;

  // Atajos globales de teclado [1–5] para cambiar de módulo rápidamente
  useEffect(() => {
    const handleGlobalKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (document.querySelector('[role="dialog"]')) return;

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      const keyNum = Number(event.key);
      if (keyNum >= 1 && keyNum <= WORKSPACE_TAB_ORDER.length) {
        const nextId = WORKSPACE_TAB_ORDER[keyNum - 1];
        if (nextId && nextId !== activeTab) {
          onSelectTab(nextId, { scrollIntoWorkspace: true });
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeTab, onSelectTab]);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let targetIndex: number | null = null;

    if (event.key === 'ArrowRight') {
      targetIndex = (index + 1) % WORKSPACE_TAB_ORDER.length;
    } else if (event.key === 'ArrowLeft') {
      targetIndex = (index - 1 + WORKSPACE_TAB_ORDER.length) % WORKSPACE_TAB_ORDER.length;
    } else if (event.key === 'Home') {
      targetIndex = 0;
    } else if (event.key === 'End') {
      targetIndex = WORKSPACE_TAB_ORDER.length - 1;
    }

    if (targetIndex !== null) {
      event.preventDefault();
      const targetTab = WORKSPACE_TAB_ORDER[targetIndex];
      onSelectTab(targetTab, { scrollIntoWorkspace: false });
      tabRefs.current[targetTab]?.focus();
    }
  };

  return (
    <div id="workspace-console" className="workspace">
      {/* Barra modular pegajosa de pestañas */}
      <div className="workspace__bar-wrapper">
        <div className="container">
          <div className="workspace__meta-strip mono">
            <span className="workspace__console-label">
              <TerminalSquare size={13} aria-hidden="true" />
              <span>{t.workspace.consoleLabel}</span>
            </span>
            <span className="workspace__shortcut-hint">{t.workspace.shortcutHint}</span>
          </div>

          <div
            className="workspace__tablist"
            role="tablist"
            aria-label={t.workspace.tablistLabel}
            style={{ '--active-tab-index': activeIndex } as React.CSSProperties}
          >
            {WORKSPACE_TAB_ORDER.map((tabId, index) => {
              const isSelected = activeTab === tabId;
              const tabCopy = t.workspace.tabs[tabId];
              const Icon = TAB_ICONS[tabId];

              return (
                <button
                  key={tabId}
                  ref={(el) => {
                    tabRefs.current[tabId] = el;
                  }}
                  id={`workspace-tab-${tabId}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`workspace-panel-${tabId}`}
                  tabIndex={isSelected ? 0 : -1}
                  className={`workspace__tab ${isSelected ? 'is-active' : ''}`}
                  onClick={() => onSelectTab(tabId, { scrollIntoWorkspace: true })}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                >
                  <span className="workspace__tab-top">
                    <span className="workspace__tab-code mono">{tabCopy.code}</span>
                    <Icon size={15} className="workspace__tab-icon" aria-hidden="true" />
                    <span className="workspace__tab-label">{tabCopy.label}</span>
                    <span className="workspace__tab-short">{tabCopy.short}</span>
                  </span>
                  <span className="workspace__tab-desc">{tabCopy.desc}</span>
                </button>
              );
            })}
            <span className="workspace__active-indicator" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Sub-filtro interno cuando la pestaña de Perfil está activa */}
      {activeTab === 'profile' && (
        <div className="workspace__subbar">
          <div className="container workspace__subbar-inner">
            <span className="workspace__subbar-label mono">
              // {t.workspace.profileSubTabs.label}:
            </span>
            <div className="workspace__subbar-group" role="group" aria-label={t.workspace.profileSubTabs.label}>
              {(['overview', 'competencies', 'all'] as ProfileSubTabId[]).map((subId) => {
                const active = profileSubTab === subId;
                return (
                  <button
                    key={subId}
                    type="button"
                    aria-pressed={active}
                    className={`workspace__subpill mono ${active ? 'is-active' : ''}`}
                    onClick={() => onSelectProfileSubTab(subId)}
                  >
                    {t.workspace.profileSubTabs[subId]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Paneles modulares (se mantienen en el DOM con hidden para preservar anclas, SEO y accesibilidad) */}
      <div className="workspace__panels">
        {WORKSPACE_TAB_ORDER.map((tabId) => {
          const isActive = activeTab === tabId;
          return (
            <div
              key={tabId}
              id={`workspace-panel-${tabId}`}
              role="tabpanel"
              aria-labelledby={`workspace-tab-${tabId}`}
              hidden={!isActive}
              className={`workspace__panel ${isActive ? 'is-active' : ''}`}
            >
              {panels[tabId]}
            </div>
          );
        })}
      </div>

      {/* Paginador inferior de módulos para recorrido guiado sin scroll infinito */}
      <div className="container">
        <nav className="workspace__pager" aria-label={t.workspace.tablistLabel}>
          {prevTab ? (
            <button
              type="button"
              className="workspace__pager-btn workspace__pager-btn--prev focus-card"
              onClick={() => onSelectTab(prevTab, { scrollIntoWorkspace: true })}
            >
              <span className="workspace__pager-kicker mono">
                <ArrowLeft size={13} aria-hidden="true" />
                <span>{t.workspace.prevModule}</span>
              </span>
              <strong className="workspace__pager-title">
                {t.workspace.tabs[prevTab].code}. {t.workspace.tabs[prevTab].label}
              </strong>
              <span className="workspace__pager-desc">{t.workspace.tabs[prevTab].desc}</span>
            </button>
          ) : (
            <div className="workspace__pager-spacer" aria-hidden="true" />
          )}

          {nextTab ? (
            <button
              type="button"
              className="workspace__pager-btn workspace__pager-btn--next focus-card"
              onClick={() => onSelectTab(nextTab, { scrollIntoWorkspace: true })}
            >
              <span className="workspace__pager-kicker mono">
                <span>{t.workspace.nextModule}</span>
                <ArrowRight size={13} aria-hidden="true" />
              </span>
              <strong className="workspace__pager-title">
                {t.workspace.tabs[nextTab].code}. {t.workspace.tabs[nextTab].label}
              </strong>
              <span className="workspace__pager-desc">{t.workspace.tabs[nextTab].desc}</span>
            </button>
          ) : (
            <div className="workspace__pager-spacer" aria-hidden="true" />
          )}
        </nav>
      </div>
    </div>
  );
}
