import { useState, type CSSProperties } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  Gamepad2,
  Layers,
  UserCheck,
  Users,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA, type ProjectData } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './Projects.css';

type ProjectCategoryFilter = 'all' | 'completed' | 'research';

export function Projects() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategoryFilter>('all');
  const [hasFiltered, setHasFiltered] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedId((curr) => (curr === id ? null : id));
  };

  const handleSelectFilter = (nextFilter: ProjectCategoryFilter) => {
    setHasFiltered(true);
    setCategoryFilter(nextFilter);
  };

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (categoryFilter === 'completed') return project.status === 'completed';
    if (categoryFilter === 'research') return project.status === 'inDevelopment';
    return true;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow={t.nav.projects}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        >
          <div
            className="projects__filters"
            role="group"
            aria-label={t.workspace.projectFilters.label}
          >
            {(['all', 'completed', 'research'] as ProjectCategoryFilter[]).map((key) => {
              const active = categoryFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  className={`projects__filter-pill mono ${active ? 'is-active' : ''}`}
                  onClick={() => handleSelectFilter(key)}
                >
                  <span>{t.workspace.projectFilters[key]}</span>
                </button>
              );
            })}
          </div>
        </SectionHeading>

        <div className="projects__cases focus-group">
          {filteredProjects.map((project: ProjectData, idx: number) => {
            const projectText = t.projects.items[project.id];
            const isExpanded = expandedId === project.id;
            const isCompleted = project.status === 'completed';

            return (
              <div
                key={project.id}
                style={{ '--stagger-index': idx } as CSSProperties}
                className={hasFiltered ? 'projects__case-item' : 'projects__case-item reveal'}
              >
                <article
                  className={`case-study case-study--${project.id} focus-card ${
                    isExpanded ? 'is-expanded' : ''
                  }`}
                >
                {/* Cabecera limpia de la tarjeta */}
                <div className="case-study__ribbon mono">
                  <span className="case-study__kind">
                    {project.kind === 'academic' && t.projects.kinds.academic}
                    {project.kind === 'collaborative' && t.projects.kinds.collaborative}
                    {project.kind === 'personal' && t.projects.kinds.personal}
                  </span>

                  <div
                    className={`case-study__status ${
                      isCompleted ? 'case-study__status--completed' : 'case-study__status--dev'
                    }`}
                  >
                    <span className="case-study__status-dot" aria-hidden="true" />
                    <span>
                      {isCompleted
                        ? t.projects.status.completed
                        : t.projects.status.inDevelopment}
                    </span>
                  </div>
                </div>

                <div className="case-study__body">
                  <div className="case-study__title-row">
                    <div className="case-study__icon-box">
                      {project.id === 'nimpeMisak' ? (
                        <Gamepad2 size={22} aria-hidden="true" />
                      ) : (
                        <Layers size={22} aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <h3 className="case-study__title hover-paint">{project.name}</h3>
                      <p className="case-study__type mono">{projectText.type}</p>
                    </div>
                  </div>

                  <p className="case-study__summary">{projectText.summary}</p>

                  {/* Contexto conciso de rol */}
                  {projectText.role && (
                    <div className="case-study__role-callout">
                      <div className="case-study__role-callout-head mono">
                        <span className="case-study__role-badge">
                          <UserCheck size={13} aria-hidden="true" />
                          <span>{t.workspace.projectFilters.roleBadge}</span>
                        </span>
                        <span className="case-study__quality-tag">
                          <CheckCircle2 size={12} aria-hidden="true" />
                          <span>
                            {isCompleted
                              ? t.workspace.projectFilters.verifiedRepo
                              : t.workspace.projectFilters.activeThesis}
                          </span>
                        </span>
                      </div>
                      <p className="case-study__role-callout-text">{projectText.role}</p>
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div className="case-study__techs">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="case-study__tech-tag paint-tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Detalles puntuales desplegables bajo demanda */}
                  {isExpanded && (
                    <div className="case-study__details" id={`project-details-${project.id}`}>
                      <div className="case-study__detail-block">
                        <h4 className="case-study__detail-title mono">
                          {t.projects.labels.problem}
                        </h4>
                        <p className="case-study__detail-text">{projectText.problem}</p>
                      </div>

                      <div className="case-study__detail-block">
                        <h4 className="case-study__detail-title mono">
                          {t.projects.labels.solution}
                        </h4>
                        <p className="case-study__detail-text">{projectText.solution}</p>
                      </div>

                      {projectText.contribution && projectText.contribution.length > 0 && (
                        <div className="case-study__detail-block case-study__detail-block--contribution">
                          <h4 className="case-study__detail-title mono">
                            {t.projects.labels.contribution}
                          </h4>
                          <ul className="case-study__contribution-list" role="list">
                            {projectText.contribution.map((c, cIdx) => (
                              <li key={cIdx} className="case-study__contribution-item">
                                <span className="case-study__bullet mono" aria-hidden="true">›</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {projectText.team && (
                        <div className="case-study__detail-block case-study__detail-block--team">
                          <div className="case-study__team-info mono">
                            <Users size={14} aria-hidden="true" />
                            <span>{projectText.team}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Acciones */}
                <div className="case-study__footer mono">
                  <div className="case-study__links">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-study__action-btn case-study__action-btn--primary"
                        aria-label={`${t.projects.labels.viewCode} de ${project.name} ${t.a11y.opensInNewTab}`}
                      >
                        <GithubIcon width={15} height={15} />
                        <span>{t.projects.labels.viewCode}</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    className="case-study__toggle-btn"
                    onClick={() => toggleExpand(project.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`project-details-${project.id}`}
                  >
                    <span>
                      {isExpanded
                        ? t.projects.labels.hideDetails
                        : t.projects.labels.viewDetails}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={15} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={15} aria-hidden="true" />
                    )}
                  </button>
                </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Enlace compacto a GitHub */}
        <div className="projects__github-cta focus-card reveal reveal--pop">
          <div className="projects__github-icon-box">
            <FolderGit2 size={22} aria-hidden="true" />
          </div>
          <div className="projects__github-info">
            <h4 className="projects__github-title">{t.projects.more.title}</h4>
            <p className="projects__github-desc">{t.projects.more.description}</p>
          </div>
          <a
            href={PORTFOLIO_DATA.profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__github-btn mono"
            aria-label={`${t.projects.more.action} ${t.a11y.opensInNewTab}`}
          >
            <GithubIcon width={16} height={16} />
            <span>{t.projects.more.action}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
