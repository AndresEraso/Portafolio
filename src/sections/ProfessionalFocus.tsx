import type { CSSProperties } from 'react';
import { Activity, Cloud, CodeXml, Cpu, Workflow } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../hooks/useLanguage';
import './ProfessionalFocus.css';

export function ProfessionalFocus() {
  const { t } = useLanguage();

  const areas = [
    { id: 'backend' as const, icon: CodeXml, data: t.focus.areas.backend },
    { id: 'cloud' as const, icon: Cloud, data: t.focus.areas.cloud },
    { id: 'data' as const, icon: Cpu, data: t.focus.areas.data },
    { id: 'automation' as const, icon: Workflow, data: t.focus.areas.automation },
  ];

  return (
    <section id="focus" className="section professional-focus">
      <div className="container">
        <SectionHeading
          eyebrow={t.nav.focus}
          title={t.focus.title}
          subtitle={t.focus.subtitle}
        />

        <div className="focus__topology">
          <div className="focus__grid focus-group">
            {areas.map(({ id, icon: IconComponent, data }, idx) => (
              <div
                key={id}
                className="focus-node focus-card reveal"
                style={{ '--stagger-index': idx } as CSSProperties}
              >
                <div className="focus-node__body">
                  <div className="focus-node__title-row">
                    <div className="focus-node__icon-box">
                      <IconComponent size={18} aria-hidden="true" />
                    </div>
                    <h3 className="focus-node__title hover-paint">{data.title}</h3>
                  </div>

                  <p className="focus-node__desc">{data.description}</p>

                  <div className="focus-node__connection mono">
                    <span className="focus-node__conn-label">
                      <Activity size={12} aria-hidden="true" />
                      <span>{t.focus.connectionLabel}:</span>
                    </span>
                    <span className="focus-node__conn-text">{data.connection}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
