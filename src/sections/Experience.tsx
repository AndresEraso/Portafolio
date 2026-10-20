import { useState } from 'react';
import {
  Activity,
  Briefcase,
  Calendar,
  CheckCircle2,
  Cloud,
  FileCode2,
  GitPullRequest,
  Globe,
  HeartHandshake,
  Layers,
  MapPin,
  Search,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { formatMonthYear } from '../lib/date';
import './Experience.css';

type GroupKey = 'monitoring' | 'incidents' | 'dataAnalysis' | 'software' | 'cloud' | 'collaboration';

export function Experience() {
  const { t, language } = useLanguage();
  const { experience } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<GroupKey>('monitoring');

  const startDateText = formatMonthYear(experience.startDate, language);
  const periodText = `${startDateText} — ${t.experience.present}`;

  const groups: { key: GroupKey; icon: typeof Activity }[] = [
    { key: 'monitoring', icon: Activity },
    { key: 'incidents', icon: Search },
    { key: 'dataAnalysis', icon: Layers },
    { key: 'software', icon: FileCode2 },
    { key: 'cloud', icon: Cloud },
    { key: 'collaboration', icon: GitPullRequest },
  ];

  const currentGroupData = t.experience.groups[activeTab];

  return (
    <section id="experience" className="section section--alt experience">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.04 // ${t.experience.title}`}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="experience__ledger">
          {/* 1. Experiencia laboral: ST&T LTDA (Más reciente: 2026-01 - Actualidad) */}
          <article className="experience__log experience__log--employment reveal">
            {/* Cinta de Telemetría Superior */}
            <div className="experience__ribbon mono">
              <span className="experience__log-id">LOG.01 // EMPLOYMENT</span>
              <div className="experience__status-pill">
                <span className="experience__status-dot" aria-hidden="true" />
                <span>{t.experience.current}</span>
              </div>
            </div>

            {/* Encabezado del Registro */}
            <div className="experience__header">
              <div className="experience__role-info">
                <h3 className="experience__company">{experience.company}</h3>
                <p className="experience__role mono">{t.experience.role}</p>
              </div>

              <div className="experience__meta mono">
                <span className="experience__meta-item">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{periodText}</span>
                </span>
                <span className="experience__meta-item">
                  <Globe size={14} aria-hidden="true" />
                  <span>{t.experience.modality}</span>
                </span>
                <span className="experience__meta-item">
                  <MapPin size={14} aria-hidden="true" />
                  <span>Colombia</span>
                </span>
              </div>
            </div>

            {/* Síntesis Profesional */}
            <div className="experience__summary">
              {t.experience.summary.map((paragraph, index) => (
                <p key={index} className="experience__summary-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bloque de Responsabilidades Técnicas con Pestañas */}
            <div className="experience__responsibilities-section">
              <div className="experience__section-header mono">
                <Workflow size={15} aria-hidden="true" />
                <span>// {t.experience.responsibilitiesTitle.toUpperCase()}</span>
              </div>

              {/* Pestañas de Navegación por Área */}
              <div
                className="experience__tabs"
                role="tablist"
                aria-label={t.experience.tablistLabel}
              >
                {groups.map(({ key, icon: IconComponent }) => {
                  const groupInfo = t.experience.groups[key];
                  const isSelected = activeTab === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      id={`tab-${key}`}
                      aria-selected={isSelected}
                      aria-controls={`panel-${key}`}
                      className={`experience__tab mono ${isSelected ? 'is-active' : ''}`}
                      onClick={() => setActiveTab(key)}
                    >
                      <IconComponent size={14} aria-hidden="true" />
                      <span>{groupInfo.short}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenido de la Pestaña Activa */}
              <div
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="experience__panel"
              >
                <div className="experience__panel-header mono">
                  <span className="experience__panel-indicator">› EXECUTION_SCOPE:</span>
                  <h5 className="experience__panel-title">{currentGroupData.title}</h5>
                </div>
                <ul className="experience__panel-list" role="list">
                  {currentGroupData.items.map((item, idx) => (
                    <li key={idx} className="experience__panel-item">
                      <CheckCircle2 size={15} className="experience__item-icon" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tecnologías del Puesto */}
            <div className="experience__tech-section">
              <div className="experience__section-header mono">
                <Briefcase size={15} aria-hidden="true" />
                <span>// {t.experience.techTitle.toUpperCase()}</span>
              </div>

              <div className="experience__tech-grid">
                <div className="experience__tech-category">
                  <span className="experience__tech-cat-label mono">
                    {t.experience.techGroups.languages}:
                  </span>
                  <div className="experience__tech-tags">
                    {experience.technologies.languages.map((tech) => (
                      <span key={tech} className="experience__tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience__tech-category">
                  <span className="experience__tech-cat-label mono">
                    {t.experience.techGroups.cloud}:
                  </span>
                  <div className="experience__tech-tags">
                    {experience.technologies.cloud.map((tech) => (
                      <span key={tech} className="experience__tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience__tech-category">
                  <span className="experience__tech-cat-label mono">
                    {t.experience.techGroups.orchestration}:
                  </span>
                  <div className="experience__tech-tags">
                    {experience.technologies.orchestration.map((tech) => (
                      <span key={tech} className="experience__tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience__tech-category">
                  <span className="experience__tech-cat-label mono">
                    {t.experience.techGroups.systems}:
                  </span>
                  <div className="experience__tech-tags">
                    {experience.technologies.systems.map((tech) => (
                      <span key={tech} className="experience__tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience__tech-category">
                  <span className="experience__tech-cat-label mono">
                    {t.experience.techGroups.apis}:
                  </span>
                  <div className="experience__tech-tags">
                    {experience.technologies.apis.map((tech) => (
                      <span key={tech} className="experience__tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience__tech-category">
                  <span className="experience__tech-cat-label mono">
                    {t.experience.techGroups.collaboration}:
                  </span>
                  <div className="experience__tech-tags">
                    {experience.technologies.collaboration.map((tech) => (
                      <span key={tech} className="experience__tag mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nota de Confidencialidad */}
            <div className="experience__confidentiality mono">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>[COMPLIANCE] {t.experience.confidentiality}</span>
            </div>
          </article>

          {/* 2. Experiencia de voluntariado: Proyecto Comunitario ICETEX (2023 - Actualidad) */}
          <article className="experience__log experience__log--volunteer reveal">
            <div className="experience__ribbon mono">
              <span className="experience__log-id">LOG.02 // VOLUNTEERING</span>
              <div className="experience__status-pill experience__status-pill--volunteer">
                <HeartHandshake size={13} aria-hidden="true" />
                <span>{t.experience.icetex.badge}</span>
              </div>
            </div>

            <div className="experience__header">
              <div className="experience__role-info">
                <h3 className="experience__company">{t.experience.icetex.organization}</h3>
                <p className="experience__role mono">{t.experience.icetex.role}</p>
              </div>

              <div className="experience__meta mono">
                <span className="experience__meta-item">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{t.experience.icetex.period}</span>
                </span>
                <span className="experience__meta-item">
                  <MapPin size={14} aria-hidden="true" />
                  <span>Colombia</span>
                </span>
              </div>
            </div>

            <div className="experience__summary">
              <p className="experience__summary-text">
                {t.experience.icetex.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
