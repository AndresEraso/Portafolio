import {
  Activity,
  Cloud,
  CodeXml,
  Cpu,
  Target,
  Terminal,
  Workflow,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../hooks/useLanguage';
import './ProfessionalFocus.css';

export function ProfessionalFocus() {
  const { t } = useLanguage();

  const areas = [
    {
      id: 'backend' as const,
      code: 'NODE.01 // BACKEND_CORE',
      icon: CodeXml,
      data: t.focus.areas.backend,
      technologies: ['Java', 'Scala', 'Python', 'APIs'],
    },
    {
      id: 'cloud' as const,
      code: 'NODE.02 // CLOUD_SYSTEMS',
      icon: Cloud,
      data: t.focus.areas.cloud,
      technologies: ['AWS', 'Amazon S3', 'Amazon EMR', 'AWS Lambda', 'Amazon API Gateway'],
    },
    {
      id: 'data' as const,
      code: 'NODE.03 // DISTRIBUTED_DATA',
      icon: Cpu,
      data: t.focus.areas.data,
      technologies: ['Apache Spark', 'Apache Hadoop', 'Apache Airflow', 'Amazon EMR', 'SQL'],
    },
    {
      id: 'automation' as const,
      code: 'NODE.04 // RELIABILITY_OPS',
      icon: Workflow,
      data: t.focus.areas.automation,
      technologies: ['CI/CD', 'Observability', 'Process Automation', 'Reliability'],
    },
  ];

  return (
    <section id="focus" className="section professional-focus">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.09 // ${t.focus.title}`}
          title={t.focus.title}
          subtitle={t.focus.subtitle}
        />

        {/* 4 Nodos de Crecimiento Técnico */}
        <div className="focus__topology">
          <div className="focus__topology-header mono">
            <span>// TOPOLOGY_MAP: 4_STRATEGIC_DOMAINS</span>
            <span>SYSTEM_EVOLUTION: CONTINUOUS</span>
          </div>

          <div className="focus__grid">
            {areas.map(({ id, code, icon: IconComponent, data, technologies }) => (
              <div key={id} className="focus-node reveal">
                <div className="focus-node__ribbon mono">
                  <span className="focus-node__code">{code}</span>
                  <div className="focus-node__badge">
                    <Target size={12} aria-hidden="true" />
                    <span>{t.focus.goalLabel.toUpperCase()}</span>
                  </div>
                </div>

                <div className="focus-node__body">
                  <div className="focus-node__title-row">
                    <div className="focus-node__icon-box">
                      <IconComponent size={18} aria-hidden="true" />
                    </div>
                    <h3 className="focus-node__title">{data.title}</h3>
                  </div>

                  <p className="focus-node__desc">{data.description}</p>

                  {/* Conexión con la experiencia actual */}
                  <div className="focus-node__connection mono">
                    <span className="focus-node__conn-label">
                      <Activity size={12} aria-hidden="true" />
                      <span>{t.focus.connectionLabel}:</span>
                    </span>
                    <span className="focus-node__conn-text">{data.connection}</span>
                  </div>

                  {/* Tecnologías Relacionadas */}
                  <div className="focus-node__techs">
                    <span className="focus-node__techs-label mono">// {t.focus.relatedLabel}:</span>
                    <div className="focus-node__tags">
                      {technologies.map((tech) => (
                        <span key={tech} className="focus-node__tag mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cita de Filosofía de Desarrollo */}
        <div className="focus__manifesto-box reveal">
          <div className="focus__manifesto-header mono">
            <Terminal size={14} aria-hidden="true" />
            <span>PRINCIPLE // {t.focus.philosophyLabel.toUpperCase()}</span>
          </div>
          <div className="focus__manifesto-content">
            <p className="focus__manifesto-text">“{t.focus.philosophy}”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
