import { useState } from 'react';
import {
  Boxes,
  Briefcase,
  Check,
  Cloud,
  CodeXml,
  Coffee,
  Cpu,
  Database,
  Filter,
  FolderGit2,
  Gamepad2,
  GitBranch,
  Layers,
  ListChecks,
  Monitor,
  Network,
  Send,
  Server,
  Terminal,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA, type TechCategory, type TechDomainGroup } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './TechStack.css';

// Helper de mapeo de iconos seguros
function renderTechIcon(iconName?: string) {
  switch (iconName) {
    case 'Coffee':
      return <Coffee size={13} />;
    case 'CodeXml':
      return <CodeXml size={13} />;
    case 'Terminal':
      return <Terminal size={13} />;
    case 'Database':
      return <Database size={13} />;
    case 'Server':
      return <Server size={13} />;
    case 'Zap':
      return <Zap size={13} />;
    case 'Network':
      return <Network size={13} />;
    case 'Cpu':
      return <Cpu size={13} />;
    case 'Boxes':
      return <Boxes size={13} />;
    case 'Workflow':
      return <Workflow size={13} />;
    case 'Send':
      return <Send size={13} />;
    case 'Layers':
      return <Layers size={13} />;
    case 'Monitor':
      return <Monitor size={13} />;
    case 'GitBranch':
      return <GitBranch size={13} />;
    case 'FolderGit2':
      return <FolderGit2 size={13} />;
    case 'ListChecks':
      return <ListChecks size={13} />;
    case 'Users':
      return <Users size={13} />;
    case 'Gamepad2':
      return <Gamepad2 size={13} />;
    default:
      return <CodeXml size={13} />;
  }
}

type TechFilterKey = TechDomainGroup | 'all';

export function TechStack() {
  const { t } = useLanguage();
  const categories = PORTFOLIO_DATA.techCategories;
  const [domainFilter, setDomainFilter] = useState<TechFilterKey>('core');

  const counts: Record<TechFilterKey, number> = {
    core: categories.filter((c) => c.domainGroup === 'core').length,
    ops: categories.filter((c) => c.domainGroup === 'ops').length,
    complementary: categories.filter((c) => c.domainGroup === 'complementary').length,
    all: categories.length,
  };

  const visibleCategories =
    domainFilter === 'all'
      ? categories
      : categories.filter((c) => c.domainGroup === domainFilter);

  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.03 // ${t.techStack.title}`}
          title={t.techStack.title}
          subtitle={t.techStack.subtitle}
        >
          {/* Leyenda de contexto de uso */}
          <div className="tech-stack__legend mono" aria-label={t.techStack.legendLabel}>
            <span className="tech-stack__legend-label">{t.techStack.legendLabel}:</span>
            <span className="tech-stack__legend-item">
              <span className="tech-stack__tag tech-stack__tag--work-sample">
                <Briefcase size={12} aria-hidden="true" />
                <span>{t.techStack.contexts.work}</span>
              </span>
            </span>
            <span className="tech-stack__legend-item">
              <span className="tech-stack__tag tech-stack__tag--projects-sample">
                <Layers size={12} aria-hidden="true" />
                <span>{t.techStack.contexts.projects}</span>
              </span>
            </span>
          </div>
        </SectionHeading>

        {/* Barra de enfoque por especialidad */}
        <div className="tech-stack__controls reveal">
          <div
            className="tech-stack__filters"
            role="group"
            aria-label={t.workspace.techFilters.label}
          >
            {(['core', 'ops', 'complementary', 'all'] as TechFilterKey[]).map((key) => {
              const active = domainFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  className={`tech-stack__filter-btn mono ${active ? 'is-active' : ''}`}
                  onClick={() => setDomainFilter(key)}
                >
                  <span>{t.workspace.techFilters[key]}</span>
                  <span className="tech-stack__filter-count">{counts[key]}</span>
                </button>
              );
            })}
          </div>

          {domainFilter === 'core' && (
            <p className="tech-stack__focus-banner mono">
              <Filter size={13} aria-hidden="true" />
              <span>{t.workspace.techFilters.focusedBanner}</span>
            </p>
          )}
        </div>

        <div className="tech-stack__grid focus-group">
          {visibleCategories.map((cat: TechCategory) => {
            const catTranslation = t.techStack.categories[cat.titleKey];
            const hasCapabilities = catTranslation.capabilities && catTranslation.capabilities.length > 0;
            const globalIdx = categories.findIndex((item) => item.id === cat.id);
            const codeIndex = String(globalIdx + 1).padStart(2, '0');

            return (
              <div
                key={cat.id}
                className={`tech-stack__panel focus-card reveal ${
                  cat.highlight ? 'tech-stack__panel--highlight' : ''
                }`}
              >
                <div className="tech-stack__panel-header">
                  <div className="tech-stack__header-meta mono">
                    <span className="tech-stack__cat-id">CAT.{codeIndex}</span>
                    {cat.highlight && <span className="tech-stack__priority-badge">CORE_DOMAIN</span>}
                  </div>
                  <div className="tech-stack__title-row">
                    <div className="tech-stack__icon-box">
                      {cat.id === 'cloud' && <Cloud size={18} />}
                      {cat.id === 'data' && <Cpu size={18} />}
                      {cat.id === 'apis' && <Workflow size={18} />}
                      {cat.id === 'languages' && <CodeXml size={18} />}
                      {cat.id === 'databases' && <Database size={18} />}
                      {cat.id === 'infrastructure' && <Server size={18} />}
                      {cat.id === 'collaboration' && <GitBranch size={18} />}
                      {cat.id === 'web' && <Layers size={18} />}
                    </div>
                    <div>
                      <h3 className="tech-stack__panel-title hover-paint">{catTranslation.title}</h3>
                      <p className="tech-stack__panel-desc">{catTranslation.description}</p>
                    </div>
                  </div>
                </div>

                {/* Etiquetas de Tecnologías */}
                <div className="tech-stack__tags-list">
                  {cat.items.map((item, index) => {
                    const isWork = item.context === 'work';

                    return (
                      <span
                        key={index}
                        className={`tech-stack__tag paint-tag mono ${
                          isWork ? 'tech-stack__tag--work' : 'tech-stack__tag--projects'
                        }`}
                        title={`${item.name} (${
                          isWork ? t.techStack.contexts.work : t.techStack.contexts.projects
                        })`}
                      >
                        <span className="tech-stack__tag-icon" aria-hidden="true">
                          {renderTechIcon(item.iconName)}
                        </span>
                        <span className="tech-stack__tag-name">{item.name}</span>
                        <span className="tech-stack__tag-context-dot" aria-hidden="true" />
                      </span>
                    );
                  })}
                </div>

                {/* Capacidades Técnicas Asociadas */}
                {hasCapabilities && (
                  <div className="tech-stack__capabilities">
                    <span className="tech-stack__capabilities-label mono">
                      // {t.techStack.capabilitiesLabel.toUpperCase()}
                    </span>
                    <ul className="tech-stack__capabilities-list" role="list">
                      {catTranslation.capabilities.map((cap, capIdx) => (
                        <li key={capIdx} className="tech-stack__capability-item">
                          <Check size={13} className="tech-stack__capability-icon" aria-hidden="true" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
