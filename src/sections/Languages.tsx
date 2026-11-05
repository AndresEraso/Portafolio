import { Globe, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../hooks/useLanguage';
import './Languages.css';

export function Languages() {
  const { t } = useLanguage();

  return (
    <section id="languages" className="section section--alt languages">
      <div className="container">
        <SectionHeading
          eyebrow={t.nav.languages}
          title={t.languages.title}
          subtitle={t.languages.subtitle}
        />

        <div className="languages__grid focus-group">
          {/* Español */}
          <div className="lang-panel focus-card reveal reveal--left">
            <div className="lang-panel__header">
              <div className="lang-panel__icon-box">
                <Globe size={18} aria-hidden="true" />
              </div>
              <h3 className="lang-panel__name hover-paint">{t.languages.spanish.name}</h3>
              <span className="lang-panel__code mono">ES</span>
            </div>

            <div className="lang-panel__level mono">
              <span className="lang-panel__dot" aria-hidden="true" />
              <span>{t.languages.spanish.level}</span>
            </div>

            <p className="lang-panel__desc">{t.languages.spanish.description}</p>
          </div>

          {/* Inglés */}
          <div className="lang-panel focus-card reveal reveal--right">
            <div className="lang-panel__header">
              <div className="lang-panel__icon-box">
                <MessageSquare size={18} aria-hidden="true" />
              </div>
              <h3 className="lang-panel__name hover-paint">{t.languages.english.name}</h3>
              <span className="lang-panel__code mono">EN</span>
            </div>

            <div className="lang-panel__level mono">
              <span className="lang-panel__dot lang-panel__dot--alt" aria-hidden="true" />
              <span>{t.languages.english.level}</span>
            </div>

            <p className="lang-panel__desc">{t.languages.english.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
