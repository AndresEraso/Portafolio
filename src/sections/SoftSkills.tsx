import type { CSSProperties } from 'react';
import {
  Brain,
  Compass,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Puzzle,
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
    { key: 'learning' as const, icon: TrendingUp, data: t.softSkills.featured.learning },
    { key: 'proactivity' as const, icon: Rocket, data: t.softSkills.featured.proactivity },
    { key: 'teamwork' as const, icon: HeartHandshake, data: t.softSkills.featured.teamwork },
    { key: 'problemSolving' as const, icon: Puzzle, data: t.softSkills.featured.problemSolving },
    { key: 'communication' as const, icon: MessageCircle, data: t.softSkills.featured.communication },
    { key: 'analytical' as const, icon: Brain, data: t.softSkills.featured.analytical },
  ];

  const secondary = [
    { icon: Compass, data: t.softSkills.secondary.adaptability },
    { icon: ShieldCheck, data: t.softSkills.secondary.responsibility },
    { icon: Lightbulb, data: t.softSkills.secondary.curiosity },
    { icon: HandHeart, data: t.softSkills.secondary.patience },
  ];

  return (
    <section id="soft-skills" className="section soft-skills">
      <div className="container">
        <SectionHeading
          eyebrow={t.nav.softSkills}
          title={t.softSkills.title}
          subtitle={t.softSkills.subtitle}
        />

        {/* 6 Competencias clave directas y concisas */}
        <div className="soft-skills__grid focus-group">
          {featured.map(({ key, icon: IconComponent, data }, idx) => (
            <div
              key={key}
              className="competency-card focus-card reveal"
              style={{ '--stagger-index': idx } as CSSProperties}
            >
              <div className="competency-card__header">
                <div className="competency-card__icon-box">
                  <IconComponent size={16} aria-hidden="true" />
                </div>
                <h3 className="competency-card__title hover-paint">{data.title}</h3>
              </div>

              <p className="competency-card__desc">{data.description}</p>
            </div>
          ))}
        </div>

        {/* Atributos complementarios en una sola barra compacta */}
        <div className="soft-skills__secondary reveal reveal--pop">
          <div className="soft-skills__secondary-header mono">
            <span className="soft-skills__secondary-tag">{t.softSkills.secondaryTitle}</span>
          </div>

          <div className="soft-skills__secondary-grid focus-group">
            {secondary.map(({ icon: IconComponent, data }, idx) => (
              <div key={idx} className="attribute-node focus-card">
                <div className="attribute-node__top">
                  <span className="attribute-node__title">{data.title}</span>
                  <IconComponent size={14} className="attribute-node__icon" aria-hidden="true" />
                </div>
                <p className="attribute-node__desc">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
