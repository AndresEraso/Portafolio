import {
  Brain,
  Compass,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Puzzle,
  Repeat,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../hooks/useLanguage';
import './SoftSkills.css';

export function SoftSkills() {
  const { t } = useLanguage();

  const featured = [
    {
      key: 'learning' as const,
      icon: TrendingUp,
      code: 'CMP.01',
      data: t.softSkills.featured.learning,
    },
    {
      key: 'proactivity' as const,
      icon: Rocket,
      code: 'CMP.02',
      data: t.softSkills.featured.proactivity,
    },
    {
      key: 'teamwork' as const,
      icon: HeartHandshake,
      code: 'CMP.03',
      data: t.softSkills.featured.teamwork,
    },
    {
      key: 'problemSolving' as const,
      icon: Puzzle,
      code: 'CMP.04',
      data: t.softSkills.featured.problemSolving,
    },
    {
      key: 'communication' as const,
      icon: MessageCircle,
      code: 'CMP.05',
      data: t.softSkills.featured.communication,
    },
    {
      key: 'analytical' as const,
      icon: Brain,
      code: 'CMP.06',
      data: t.softSkills.featured.analytical,
    },
  ];

  const secondary = [
    {
      icon: Compass,
      code: 'ATTR.01',
      data: t.softSkills.secondary.adaptability,
    },
    {
      icon: ShieldCheck,
      code: 'ATTR.02',
      data: t.softSkills.secondary.responsibility,
    },
    {
      icon: Lightbulb,
      code: 'ATTR.03',
      data: t.softSkills.secondary.curiosity,
    },
    {
      icon: HandHeart,
      code: 'ATTR.04',
      data: t.softSkills.secondary.patience,
    },
  ];

  return (
    <section id="soft-skills" className="section soft-skills">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.07 // ${t.softSkills.title}`}
          title={t.softSkills.title}
          subtitle={t.softSkills.subtitle}
        />

        {/* 6 Habilidades Principales en Matriz de Competencias */}
        <div className="soft-skills__grid">
          {featured.map(({ key, icon: IconComponent, code, data }) => (
            <div key={key} className="competency-card reveal">
              <div className="competency-card__header mono">
                <span className="competency-card__code">{code}</span>
                <div className="competency-card__icon-box">
                  <IconComponent size={16} aria-hidden="true" />
                </div>
              </div>

              <h3 className="competency-card__title">{data.title}</h3>
              <p className="competency-card__desc">{data.description}</p>

              <div className="competency-card__practice">
                <span className="competency-card__practice-label mono">
                  <Repeat size={12} aria-hidden="true" />
                  <span>// {t.softSkills.inPractice.toUpperCase()}:</span>
                </span>
                <p className="competency-card__practice-text">{data.practice}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Atributos Secundarios en Fila de Registro */}
        <div className="soft-skills__secondary reveal">
          <div className="soft-skills__secondary-header mono">
            <span className="soft-skills__secondary-tag">// SECONDARY_ATTRIBUTES</span>
            <h4 className="soft-skills__secondary-title">{t.softSkills.secondaryTitle}</h4>
          </div>

          <div className="soft-skills__secondary-grid">
            {secondary.map(({ icon: IconComponent, code, data }, idx) => (
              <div key={idx} className="attribute-node">
                <div className="attribute-node__top mono">
                  <span className="attribute-node__code">{code}</span>
                  <IconComponent size={14} className="attribute-node__icon" aria-hidden="true" />
                </div>
                <span className="attribute-node__title">{data.title}</span>
                <p className="attribute-node__desc">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
