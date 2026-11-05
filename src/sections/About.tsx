import type { CSSProperties } from 'react';
import { Cloud, CodeXml, FileText, GraduationCap, MapPin, Search, Server } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './About.css';

export function About() {
  const { t } = useLanguage();
  const { profile, experience } = PORTFOLIO_DATA;

  const pillars = [
    { key: 'backend', icon: CodeXml, data: t.about.pillars.backend },
    { key: 'cloud', icon: Cloud, data: t.about.pillars.cloud },
    { key: 'problemSolving', icon: Search, data: t.about.pillars.problemSolving },
  ];

  return (
    <section id="about" className="section section--alt about">
      <div className="container">
        <SectionHeading
          eyebrow={t.nav.about}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="about__grid">
          {/* Resumen directo en 2 oraciones */}
          <div className="about__main reveal reveal--left">
            <div className="about__text-block">
              {t.about.paragraphs.map((p, index) => (
                <p key={index} className="about__paragraph">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Ficha compacta de datos clave */}
          <aside className="about__sidebar reveal reveal--right">
            <div className="about__spec-card focus-card">
              <div className="about__spec-header mono">
                <FileText size={14} aria-hidden="true" />
                <span>{t.about.factsTitle}</span>
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

        {/* 3 Pilares resumidos */}
        <div className="about__pillars-wrapper">
          <div className="about__pillars-matrix focus-group">
            {pillars.map(({ key, icon: IconComponent, data }, idx) => (
              <div
                key={key}
                className="about__pillar-col focus-card reveal"
                style={{ '--stagger-index': idx } as CSSProperties}
              >
                <div className="about__pillar-meta mono">
                  <IconComponent size={16} aria-hidden="true" />
                  <h3 className="about__pillar-name hover-paint">{data.title}</h3>
                </div>
                <ul className="about__pillar-list" role="list">
                  {data.items.map((item, i) => (
                    <li key={i} className="about__pillar-item">
                      <span className="about__pillar-bullet mono" aria-hidden="true">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
