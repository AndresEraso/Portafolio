import { Cloud, CodeXml, FileText, GraduationCap, MapPin, Search, Server, Terminal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './About.css';

export function About() {
  const { t } = useLanguage();
  const { profile, experience } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section section--alt about">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.02 // ${t.about.title}`}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="about__grid">
          {/* Columna Principal: Biografía Editorial */}
          <div className="about__main reveal">
            <div className="about__text-block">
              {t.about.paragraphs.map((p, index) => (
                <p key={index} className="about__paragraph">
                  {p}
                </p>
              ))}
              <p className="about__closing mono">{t.about.closing}</p>
            </div>

            {/* Directiva de Filosofía de Trabajo */}
            <div className="about__manifesto">
              <div className="about__manifesto-header mono">
                <Terminal size={14} aria-hidden="true" />
                <span>DIRECTIVE // {t.about.quoteLabel.toUpperCase()}</span>
              </div>
              <blockquote className="about__quote">
                <p className="about__quote-text">“{t.about.quote}”</p>
              </blockquote>
            </div>
          </div>

          {/* Columna Lateral: Ficha Técnica de Especificaciones */}
          <aside className="about__sidebar reveal" style={{ animationDelay: '100ms' }}>
            <div className="about__spec-card">
              <div className="about__spec-header mono">
                <FileText size={14} aria-hidden="true" />
                <span>SPEC_SHEET // {t.about.factsTitle.toUpperCase()}</span>
              </div>

              <div className="about__spec-table">
                <div className="about__spec-row">
                  <span className="about__spec-key mono">
                    <MapPin size={13} aria-hidden="true" />
                    <span>{t.about.facts.location}</span>
                  </span>
                  <span className="about__spec-val">{profile.location}</span>
                </div>

                <div className="about__spec-row">
                  <span className="about__spec-key mono">
                    <GraduationCap size={13} aria-hidden="true" />
                    <span>{t.about.facts.education}</span>
                  </span>
                  <span className="about__spec-val">
                    {t.about.facts.educationValue} · {PORTFOLIO_DATA.education.institution}
                  </span>
                </div>

                <div className="about__spec-row">
                  <span className="about__spec-key mono">
                    <Server size={13} aria-hidden="true" />
                    <span>{t.about.facts.role}</span>
                  </span>
                  <span className="about__spec-val">
                    {t.about.facts.roleValue} · <strong>{experience.company}</strong>
                  </span>
                </div>

                <div className="about__spec-row">
                  <span className="about__spec-key mono">
                    <CodeXml size={13} aria-hidden="true" />
                    <span>{t.about.facts.profile}</span>
                  </span>
                  <span className="about__spec-val">{t.about.facts.profileValue}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Módulos de Enfoque y Capacidades Técnicas */}
        <div className="about__pillars-wrapper reveal">
          <div className="about__pillars-header mono">
            <span className="about__pillars-tag">// CAPABILITY_MODULES</span>
            <h3 className="about__pillars-title">{t.about.pillarsTitle}</h3>
          </div>

          <div className="about__pillars-matrix">
            {/* Módulo 01: Backend Development */}
            <div className="about__pillar-col">
              <div className="about__pillar-meta mono">
                <span className="about__pillar-num">MOD.01</span>
                <CodeXml size={16} aria-hidden="true" />
              </div>
              <h4 className="about__pillar-name">{t.about.pillars.backend.title}</h4>
              <ul className="about__pillar-list" role="list">
                {t.about.pillars.backend.items.map((item, idx) => (
                  <li key={idx} className="about__pillar-item">
                    <span className="about__pillar-bullet mono" aria-hidden="true">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Módulo 02: Cloud & Data */}
            <div className="about__pillar-col">
              <div className="about__pillar-meta mono">
                <span className="about__pillar-num">MOD.02</span>
                <Cloud size={16} aria-hidden="true" />
              </div>
              <h4 className="about__pillar-name">{t.about.pillars.cloud.title}</h4>
              <ul className="about__pillar-list" role="list">
                {t.about.pillars.cloud.items.map((item, idx) => (
                  <li key={idx} className="about__pillar-item">
                    <span className="about__pillar-bullet mono" aria-hidden="true">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Módulo 03: Problem Solving */}
            <div className="about__pillar-col">
              <div className="about__pillar-meta mono">
                <span className="about__pillar-num">MOD.03</span>
                <Search size={16} aria-hidden="true" />
              </div>
              <h4 className="about__pillar-name">{t.about.pillars.problemSolving.title}</h4>
              <ul className="about__pillar-list" role="list">
                {t.about.pillars.problemSolving.items.map((item, idx) => (
                  <li key={idx} className="about__pillar-item">
                    <span className="about__pillar-bullet mono" aria-hidden="true">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
