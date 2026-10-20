import { ArrowRight, MapPin, Server, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './Hero.css';

export function Hero() {
  const { t } = useLanguage();
  const { profile, experience, education } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="hero">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__grid-pattern" />
      </div>

      <div className="container hero__container">
        {/* Columna Editorial y de Identidad */}
        <div className="hero__content reveal">
          <div className="hero__top-bar">
            <span className="hero__sys-tag mono">[SYS.01 // PROFILE]</span>
            <div className="hero__status-badge">
              <span className="hero__status-pulse" aria-hidden="true" />
              <span className="mono">ACTIVE // BACKEND & CLOUD</span>
            </div>
          </div>

          <div className="hero__cli-prompt mono" aria-hidden="true">
            <span className="hero__cli-user">duber@workstation</span>
            <span className="hero__cli-separator">:</span>
            <span className="hero__cli-path">~</span>
            <span className="hero__cli-symbol">$</span>
            <span className="hero__cli-command">cat profile.spec</span>
          </div>

          <h1 className="hero__headline">
            <span className="hero__name">{profile.name}</span>
            <span className="hero__role-badge mono">
              {t.hero.roleLabel} {experience.company}
            </span>
          </h1>

          <div className="hero__spec-pill mono">
            <span>BACKEND</span>
            <span className="hero__spec-divider">/</span>
            <span>AWS CLOUD</span>
            <span className="hero__spec-divider">/</span>
            <span>DISTRIBUTED SYSTEMS</span>
          </div>

          <p className="hero__intro">{t.hero.intro}</p>

          <div className="hero__meta mono">
            <span className="hero__meta-item">
              <MapPin size={14} className="hero__meta-icon" aria-hidden="true" />
              <span>{profile.location}</span>
            </span>
            <span className="hero__meta-item">
              <Server size={14} className="hero__meta-icon" aria-hidden="true" />
              <span>{education.institution}</span>
            </span>
          </div>

          {/* Llamadas a la acción */}
          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              <span className="mono">{t.hero.ctaProjects}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <a href="#contact" className="hero__btn hero__btn--secondary">
              <span className="mono">{t.hero.ctaContact}</span>
            </a>
          </div>

          {/* Enlaces Sociales Técnicos */}
          <div className="hero__socials">
            <span className="hero__socials-label mono">{t.hero.socialLabel}:</span>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link mono"
              aria-label={`GitHub ${t.a11y.opensInNewTab}`}
            >
              <GithubIcon width={16} height={16} />
              <span>github/AndresEraso</span>
            </a>

            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link mono"
                aria-label={`LinkedIn ${t.a11y.opensInNewTab}`}
              >
                <LinkedinIcon width={16} height={16} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        {/* Columna Visual: Consola de Ingeniería y Telemetría */}
        <div className="hero__visual reveal" style={{ animationDelay: '100ms' }}>
          <div className="hero__terminal">
            {/* Barra de cabecera de la terminal */}
            <div className="hero__terminal-bar">
              <div className="hero__terminal-status mono">
                <Terminal size={13} aria-hidden="true" />
                <span>telemetry://{t.hero.codeFile}</span>
              </div>
              <div className="hero__terminal-meta mono">
                <span className="hero__terminal-indicator" aria-hidden="true" />
                <span>SYS_READY</span>
              </div>
            </div>

            {/* Cuerpo de código y estado real */}
            <pre className="hero__terminal-body mono">
              <code>
                <span className="token-comment">// Duber Andrés Eraso Uni — Systems Engineering</span>
                {'\n'}
                <span className="token-keyword">type</span> <span className="token-type">TelemetryReport</span> = {'{\n'}
                {'  '}engineer: <span className="token-string">'{profile.name}'</span>;{'\n'}
                {'  '}role: <span className="token-string">'{t.hero.codeRole}'</span>;{'\n'}
                {'  '}organization: <span className="token-string">'{experience.company}'</span>;{'\n'}
                {'  '}education: <span className="token-string">'{education.institution}'</span>;{'\n'}
                {'  '}runtimes: <span className="token-array">['Java', 'Scala', 'Python']</span>;{'\n'}
                {'  '}infrastructure: <span className="token-array">['AWS S3', 'AWS EMR', 'Lambda', 'Airflow']</span>;{'\n'}
                {'  '}status: <span className="token-string">'{t.hero.codeStatus}'</span>;{'\n'}
                {'}'};
                {'\n\n'}
                <span className="token-prompt">$ </span>
                <span className="token-cmd">verify-service-health</span>
                {'\n'}
                <span className="token-output">[OK] Distributed pipelines & data monitoring responsive.</span>
                <span className="hero__cursor" aria-hidden="true">_</span>
              </code>
            </pre>

            {/* Pie de la consola */}
            <div className="hero__terminal-footer mono">
              <div className="hero__terminal-pulse-box">
                <span className="hero__terminal-pulse" aria-hidden="true" />
                <span>PIPELINES & CLOUD: ACTIVE</span>
              </div>
              <span className="hero__terminal-region">LOC: COLOMBIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
