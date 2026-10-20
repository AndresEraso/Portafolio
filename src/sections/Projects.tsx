import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  Gamepad2,
  Layers,
  Sparkles,
  Users,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA, type ProjectData } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './Projects.css';

// Diagrama SVG conceptual para EventManager (Arquitectura Web Cliente - API - Base de Datos)
function EventManagerDiagram() {
  return (
    <div className="project-diagram" aria-label="Diagrama de flujo conceptual de EventManager">
      <div className="project-diagram__header mono">
        <span>// CONCEPTUAL_FLOW: CLIENT_API_DATABASE</span>
      </div>
      <svg
        viewBox="0 0 680 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="project-diagram__svg"
        aria-hidden="true"
      >
        {/* Node 1: Frontend Client */}
        <rect x="10" y="30" width="180" height="60" rx="3" className="diagram-node" />
        <text x="25" y="55" className="diagram-title mono">FRONTEND UI</text>
        <text x="25" y="75" className="diagram-sub mono">React · TS · Vite · Tailwind</text>

        {/* Arrow 1 */}
        <path d="M190 60 H240" className="diagram-arrow" />
        <polygon points="240,56 248,60 240,64" className="diagram-arrow-head" />
        <text x="198" y="50" className="diagram-label mono">REST API</text>

        {/* Node 2: Backend Laravel */}
        <rect x="250" y="30" width="180" height="60" rx="3" className="diagram-node diagram-node--core" />
        <text x="265" y="55" className="diagram-title mono">BACKEND API</text>
        <text x="265" y="75" className="diagram-sub mono">Laravel · PHP Services</text>

        {/* Arrow 2 */}
        <path d="M430 60 H480" className="diagram-arrow" />
        <polygon points="480,56 488,60 480,64" className="diagram-arrow-head" />
        <text x="442" y="50" className="diagram-label mono">SQL</text>

        {/* Node 3: Database */}
        <rect x="490" y="30" width="180" height="60" rx="3" className="diagram-node" />
        <text x="505" y="55" className="diagram-title mono">DATABASE</text>
        <text x="505" y="75" className="diagram-sub mono">MySQL Relational Storage</text>
      </svg>
    </div>
  );
}

// Diagrama SVG conceptual para Ñimpe Misak (Pipeline de Juego en Unity / C#)
function NimpeMisakDiagram() {
  return (
    <div className="project-diagram" aria-label="Diagrama de arquitectura del juego Ñimpe Misak">
      <div className="project-diagram__header mono">
        <span>// CONCEPTUAL_PIPELINE: GAME_LOOP_AND_MECHANICS</span>
      </div>
      <svg
        viewBox="0 0 680 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="project-diagram__svg"
        aria-hidden="true"
      >
        {/* Step 1: Input */}
        <rect x="10" y="30" width="180" height="60" rx="3" className="diagram-node" />
        <text x="25" y="55" className="diagram-title mono">USER CONTROLS</text>
        <text x="25" y="75" className="diagram-sub mono">Input Manager & Motion</text>

        {/* Arrow 1 */}
        <path d="M190 60 H240" className="diagram-arrow" />
        <polygon points="240,56 248,60 240,64" className="diagram-arrow-head" />
        <text x="198" y="50" className="diagram-label mono">EVENTS</text>

        {/* Step 2: C# Interaction Scripts */}
        <rect x="250" y="30" width="180" height="60" rx="3" className="diagram-node diagram-node--core" />
        <text x="265" y="55" className="diagram-title mono">C# SCRIPTS</text>
        <text x="265" y="75" className="diagram-sub mono">Player & Interaction Logic</text>

        {/* Arrow 2 */}
        <path d="M430 60 H480" className="diagram-arrow" />
        <polygon points="480,56 488,60 480,64" className="diagram-arrow-head" />
        <text x="442" y="50" className="diagram-label mono">STATE</text>

        {/* Step 3: Engine */}
        <rect x="490" y="30" width="180" height="60" rx="3" className="diagram-node" />
        <text x="505" y="55" className="diagram-title mono">UNITY PIPELINE</text>
        <text x="505" y="75" className="diagram-sub mono">Scene Render & Mechanics</text>
      </svg>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>('eventManager');

  const toggleExpand = (id: string) => {
    setExpandedId((curr) => (curr === id ? null : id));
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.05 // ${t.projects.title}`}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="projects__cases">
          {PORTFOLIO_DATA.projects.map((project: ProjectData, index: number) => {
            const projectText = t.projects.items[project.id];
            const isExpanded = expandedId === project.id;
            const isCompleted = project.status === 'completed';
            const caseNumber = String(index + 1).padStart(2, '0');

            return (
              <article
                key={project.id}
                className={`case-study case-study--${project.id} reveal ${isExpanded ? 'is-expanded' : ''}`}
              >
                {/* Cabecera del Caso de Estudio */}
                <div className="case-study__ribbon mono">
                  <div className="case-study__id-group">
                    <span className="case-study__num">CASE.{caseNumber}</span>
                    <span className="case-study__sep">//</span>
                    <span className="case-study__kind">
                      {project.kind === 'academic' && t.projects.kinds.academic.toUpperCase()}
                      {project.kind === 'collaborative' && t.projects.kinds.collaborative.toUpperCase()}
                      {project.kind === 'personal' && t.projects.kinds.personal.toUpperCase()}
                    </span>
                  </div>

                  <div
                    className={`case-study__status ${
                      isCompleted ? 'case-study__status--completed' : 'case-study__status--dev'
                    }`}
                  >
                    <span className="case-study__status-dot" aria-hidden="true" />
                    <span>
                      {isCompleted
                        ? t.projects.status.completed.toUpperCase()
                        : t.projects.status.inDevelopment.toUpperCase()}
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
                      <h3 className="case-study__title">{project.name}</h3>
                      <p className="case-study__type mono">{projectText.type}</p>
                    </div>
                  </div>

                  <p className="case-study__summary">{projectText.summary}</p>

                  {/* Etiquetas de Tecnologías */}
                  <div className="case-study__techs">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="case-study__tech-tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Aspectos Destacados */}
                  <div className="case-study__highlights">
                    {projectText.highlights.map((h, i) => (
                      <span key={i} className="case-study__highlight-chip">
                        <Sparkles size={12} aria-hidden="true" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* Diagrama Arquitectónico Específico */}
                  {project.id === 'eventManager' ? (
                    <EventManagerDiagram />
                  ) : (
                    <NimpeMisakDiagram />
                  )}

                  {/* Vista Detallada Desplegable */}
                  {isExpanded && (
                    <div className="case-study__details" id={`project-details-${project.id}`}>
                      <div className="case-study__detail-block">
                        <h4 className="case-study__detail-title mono">
                          // {t.projects.labels.problem.toUpperCase()}
                        </h4>
                        <p className="case-study__detail-text">{projectText.problem}</p>
                      </div>

                      <div className="case-study__detail-block">
                        <h4 className="case-study__detail-title mono">
                          // {t.projects.labels.solution.toUpperCase()}
                        </h4>
                        <p className="case-study__detail-text">{projectText.solution}</p>
                      </div>

                      {projectText.context && (
                        <div className="case-study__detail-block">
                          <h4 className="case-study__detail-title mono">
                            // {t.projects.labels.context.toUpperCase()}
                          </h4>
                          <p className="case-study__detail-text">{projectText.context}</p>
                        </div>
                      )}

                      <div className="case-study__detail-block case-study__detail-block--contribution">
                        <h4 className="case-study__detail-title mono">
                          // {t.projects.labels.contribution.toUpperCase()}
                        </h4>
                        {projectText.role && (
                          <p className="case-study__role-text mono">
                            <strong>{t.projects.labels.role}:</strong> {projectText.role}
                          </p>
                        )}
                        {projectText.contribution && projectText.contribution.length > 0 && (
                          <ul className="case-study__contribution-list" role="list">
                            {projectText.contribution.map((c, idx) => (
                              <li key={idx} className="case-study__contribution-item">
                                <span className="case-study__bullet mono" aria-hidden="true">›</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

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

                {/* Acciones de la Tarjeta */}
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
            );
          })}
        </div>

        {/* Tarjeta de invitación a GitHub */}
        <div className="projects__github-cta reveal">
          <div className="projects__github-icon-box">
            <FolderGit2 size={22} aria-hidden="true" />
          </div>
          <div className="projects__github-info">
            <span className="projects__github-tag mono">// GIT_REPOSITORY_INDEX</span>
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
