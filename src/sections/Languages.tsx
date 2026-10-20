import { Globe, Languages as LanguagesIcon, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../hooks/useLanguage';
import './Languages.css';

export function Languages() {
  const { t, language } = useLanguage();

  return (
    <section id="languages" className="section section--alt languages">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.08 // ${t.languages.title}`}
          title={t.languages.title}
          subtitle={t.languages.subtitle}
        />

        <div className="languages__grid">
          {/* Registro Español */}
          <div className="lang-panel reveal">
            <div className="lang-panel__top mono">
              <span className="lang-panel__protocol">COMM.01 // NATIVE</span>
              <span className="lang-panel__code">[ES]</span>
            </div>

            <div className="lang-panel__header">
              <div className="lang-panel__icon-box">
                <Globe size={18} aria-hidden="true" />
              </div>
              <h3 className="lang-panel__name">{t.languages.spanish.name}</h3>
            </div>

            <div className="lang-panel__level mono">
              <span className="lang-panel__dot" aria-hidden="true" />
              <span>{t.languages.spanish.level.toUpperCase()}</span>
            </div>

            <p className="lang-panel__desc">{t.languages.spanish.description}</p>
          </div>

          {/* Registro Inglés */}
          <div className="lang-panel reveal" style={{ animationDelay: '100ms' }}>
            <div className="lang-panel__top mono">
              <span className="lang-panel__protocol">COMM.02 // WORKING_PROFICIENCY</span>
              <span className="lang-panel__code">[EN]</span>
            </div>

            <div className="lang-panel__header">
              <div className="lang-panel__icon-box">
                <MessageSquare size={18} aria-hidden="true" />
              </div>
              <h3 className="lang-panel__name">{t.languages.english.name}</h3>
            </div>

            <div className="lang-panel__level mono">
              <span className="lang-panel__dot lang-panel__dot--alt" aria-hidden="true" />
              <span>{t.languages.english.level.toUpperCase()}</span>
            </div>

            <span className="lang-panel__note mono">[NOTE] {t.languages.english.levelNote}</span>

            <p className="lang-panel__desc">{t.languages.english.description}</p>

            <div className="lang-panel__context mono">
              <span className="lang-panel__context-label">// SCOPE:</span>
              <span className="lang-panel__context-text">{t.languages.english.context}</span>
            </div>
          </div>
        </div>

        {/* Bloque explicativo: Distinción entre idiomas del autor e idioma de la interfaz */}
        <div className="languages__interface-box reveal">
          <div className="languages__interface-icon">
            <LanguagesIcon size={20} aria-hidden="true" />
          </div>
          <div className="languages__interface-info">
            <span className="languages__interface-tag mono">// RUNTIME_LOCALE_SWITCHER</span>
            <h4 className="languages__interface-title">{t.languages.interface.title}</h4>
            <p className="languages__interface-text">{t.languages.interface.text}</p>
          </div>
          <div className="languages__current-pill mono">
            <span className="languages__current-label">{t.languages.interface.current}:</span>
            <span className="languages__current-value">
              {language === 'es' ? 'Español (ES)' : 'English (EN)'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
