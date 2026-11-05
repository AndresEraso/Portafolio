import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Layers, Mail, MapPin, Server, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './Hero.css';

interface HeroProps {
  onOpenContact?: (triggerRef?: HTMLElement | null) => void;
}

interface TypingState {
  roleKey: string;
  nameLen: number;
  roleLen: number;
}

function isReducedMotionPreferred(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function getBogotaClock(locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-US', {
      timeZone: 'America/Bogota',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());
  } catch {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
}

export function Hero({ onOpenContact }: HeroProps) {
  const { t, language } = useLanguage();
  const { profile, experience, education } = PORTFOLIO_DATA;

  const fullName = profile.name;
  const fullRole = `${t.hero.roleLabel} ${experience.company}`;

  const [typingState, setTypingState] = useState<TypingState>(() => {
    const reduced = isReducedMotionPreferred();
    return {
      roleKey: fullRole,
      nameLen: reduced ? fullName.length : 0,
      roleLen: reduced ? fullRole.length : 0,
    };
  });

  const [localClock, setLocalClock] = useState<string>(() => getBogotaClock(language));

  const reducedMotion = isReducedMotionPreferred();
  const isSameRole = typingState.roleKey === fullRole;
  const activeNameLen = reducedMotion
    ? fullName.length
    : isSameRole
      ? typingState.nameLen
      : fullName.length;
  const activeRoleLen = reducedMotion
    ? fullRole.length
    : isSameRole
      ? typingState.roleLen
      : 0;

  const isTypingName = activeNameLen < fullName.length;
  const isTypingComplete = activeNameLen >= fullName.length && activeRoleLen >= fullRole.length;

  useEffect(() => {
    if (isReducedMotionPreferred()) return;
    if (activeNameLen >= fullName.length && activeRoleLen >= fullRole.length) return;

    const delay =
      activeNameLen < fullName.length
        ? activeNameLen === 0
          ? 180
          : 42
        : activeRoleLen === 0
          ? 200
          : 30;

    const timer = window.setTimeout(() => {
      setTypingState((prev) => {
        const baseNameLen = prev.roleKey === fullRole ? prev.nameLen : fullName.length;
        const baseRoleLen = prev.roleKey === fullRole ? prev.roleLen : 0;

        if (baseNameLen < fullName.length) {
          return {
            roleKey: fullRole,
            nameLen: baseNameLen + 1,
            roleLen: 0,
          };
        }

        if (baseRoleLen < fullRole.length) {
          return {
            roleKey: fullRole,
            nameLen: fullName.length,
            roleLen: baseRoleLen + 1,
          };
        }

        return {
          roleKey: fullRole,
          nameLen: fullName.length,
          roleLen: fullRole.length,
        };
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeNameLen, activeRoleLen, fullName.length, fullRole]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLocalClock(getBogotaClock(language));
    }, 30000);
    return () => window.clearInterval(interval);
  }, [language]);

  const displayedName = fullName.slice(0, activeNameLen);
  const displayedRole = fullRole.slice(0, activeRoleLen);

  return (
    <section id="hero" className="hero">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__grid-pattern" />
      </div>

      <div className="container hero__container">
        {/* Columna de Identidad Directa */}
        <div className="hero__content reveal reveal--left">
          <div className="hero__top-bar">
            <div className="hero__status-badge">
              <span className="hero__status-pulse" aria-hidden="true" />
              <span className="mono">{t.hero.codeRole}</span>
            </div>
            <div className="hero__clock-badge mono" title={t.workspace.quickBrief.localTime}>
              <Clock size={12} className="hero__meta-icon" aria-hidden="true" />
              <span>UTC-5 · {localClock}</span>
            </div>
          </div>

          <h1 className="hero__headline" data-typing-complete={isTypingComplete ? 'true' : 'false'}>
            <span className="visually-hidden">
              {fullName} — {fullRole}
            </span>
            <span className="hero__name" aria-hidden="true">
              {displayedName}
              {isTypingName && (
                <span className="hero__typing-cursor hero__typing-cursor--active">|</span>
              )}
            </span>
            <span className="hero__role-badge mono" aria-hidden="true">
              {displayedRole}
              {!isTypingName && (
                <span
                  className={`hero__typing-cursor ${
                    isTypingComplete ? 'hero__typing-cursor--idle' : 'hero__typing-cursor--active'
                  }`}
                >
                  |
                </span>
              )}
            </span>
          </h1>

          <div className="hero__quick-focus">
            <Layers size={14} className="hero__meta-icon" aria-hidden="true" />
            <span className="hero__quick-focus-label mono">
              {t.workspace.quickBrief.focusLabel}:
            </span>
            <strong className="hero__quick-focus-value mono">
              {t.workspace.quickBrief.focusValue}
            </strong>
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

          <div className="hero__actions">
            <button
              type="button"
              id="hero-contact-trigger"
              className="hero__btn hero__btn--primary"
              onClick={(e) => onOpenContact?.(e.currentTarget)}
            >
              <Mail size={16} aria-hidden="true" />
              <span className="mono">{t.hero.ctaContact}</span>
            </button>

            <a href="#projects" className="hero__btn hero__btn--secondary paint-tag">
              <span className="mono">{t.hero.ctaProjects}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__socials">
            <span className="hero__socials-label mono">{t.hero.socialLabel}:</span>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link paint-tag mono"
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
                className="hero__social-link paint-tag mono"
                aria-label={`LinkedIn ${t.a11y.opensInNewTab}`}
              >
                <LinkedinIcon width={16} height={16} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        {/* Columna Visual: Resumen Técnico Compacto */}
        <div className="hero__visual reveal reveal--right">
          <div className="hero__terminal focus-card">
            <div className="hero__terminal-bar">
              <div className="hero__terminal-status mono">
                <Terminal size={13} aria-hidden="true" />
                <span>{t.hero.codeFile}</span>
              </div>
              <div className="hero__terminal-meta mono">
                <span className="hero__terminal-indicator" aria-hidden="true" />
                <span>{experience.company}</span>
              </div>
            </div>

            <pre className="hero__terminal-body mono">
              <code>
                <span className="token-keyword">const</span> <span className="token-type">profile</span> = {'{\n'}
                {'  '}name: <span className="token-string">'{profile.name}'</span>,{'\n'}
                {'  '}role: <span className="token-string">'{t.hero.codeRole}'</span>,{'\n'}
                {'  '}stack: <span className="token-array">['Java', 'Scala', 'Python']</span>,{'\n'}
                {'  '}cloud: <span className="token-array">['AWS S3', 'EMR', 'Lambda', 'Airflow']</span>,{'\n'}
                {'  '}status: <span className="token-string">'{t.hero.codeStatus}'</span>{'\n'}
                {'};'}
              </code>
            </pre>

            <div className="hero__terminal-footer mono">
              <div className="hero__terminal-pulse-box">
                <span className="hero__terminal-pulse" aria-hidden="true" />
                <span>{profile.location}</span>
              </div>
              <span className="hero__terminal-region">UTC-5 · {localClock}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
