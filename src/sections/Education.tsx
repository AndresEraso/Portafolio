import {
  Award,
  Calendar,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA, type CertificationData } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { formatMonthYear } from '../lib/date';
import './Education.css';

export function Education() {
  const { t, language } = useLanguage();
  const { education, certifications } = PORTFOLIO_DATA;

  const academicStart = formatMonthYear(education.startDate, language);
  const academicEnd = formatMonthYear(education.expectedCompletion, language);

  return (
    <section id="education" className="section section--alt education">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.06 // ${t.education.title}`}
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="education__grid">
          {/* Bloque 1: Registro Académico Oficial */}
          <div className="education__block reveal">
            <div className="education__block-header mono">
              <GraduationCap size={16} aria-hidden="true" />
              <span>// {t.education.academicTitle.toUpperCase()}</span>
            </div>

            <div className="education__record">
              <div className="education__record-ribbon mono">
                <span className="education__status-pill">
                  <span className="education__status-dot" aria-hidden="true" />
                  <span>{t.education.inProgress.toUpperCase()}</span>
                </span>
                <span className="education__record-id">REG.01 // UNICAUCA</span>
              </div>

              <div className="education__record-body">
                <h4 className="education__program-title">{education.program}</h4>
                <p className="education__institution mono">{education.institution}</p>

                <div className="education__timeline mono">
                  <div className="education__date-node">
                    <span className="education__date-label">{t.education.start}:</span>
                    <span className="education__date-val">{academicStart}</span>
                  </div>
                  <div className="education__date-divider" aria-hidden="true">────────</div>
                  <div className="education__date-node">
                    <span className="education__date-label">{t.education.expectedCompletion}:</span>
                    <span className="education__date-val">{academicEnd}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 2: Libro de Credenciales y Certificaciones */}
          <div className="education__block reveal" style={{ animationDelay: '100ms' }}>
            <div className="education__block-header mono">
              <Award size={16} aria-hidden="true" />
              <span>// {t.education.certificationsTitle.toUpperCase()}</span>
            </div>

            <div className="education__ledger">
              {certifications.map((cert: CertificationData, idx: number) => {
                const dateText = cert.date ? formatMonthYear(cert.date, language) : null;
                const isCredly = !!cert.credentialUrl && cert.credentialUrl.includes('credly.com');
                const certNum = String(idx + 1).padStart(2, '0');

                return (
                  <div key={cert.id} className="cert-row">
                    <div className="cert-row__meta mono">
                      <span className="cert-row__index">CRED.{certNum}</span>
                      <span className="cert-row__category">
                        {cert.category === 'security' ? (
                          <ShieldCheck size={12} aria-hidden="true" />
                        ) : (
                          <Sparkles size={12} aria-hidden="true" />
                        )}
                        <span>
                          {cert.category === 'security'
                            ? t.education.groups.security
                            : t.education.groups.ai}
                        </span>
                      </span>
                    </div>

                    <div className="cert-row__main">
                      <h4 className="cert-row__name">{cert.name}</h4>
                      <p className="cert-row__issuer mono">
                        {cert.issuer}
                        {cert.platform && ` · Platform: ${cert.platform}`}
                      </p>
                    </div>

                    <div className="cert-row__right mono">
                      {dateText && (
                        <span className="cert-row__date">
                          <Calendar size={12} aria-hidden="true" />
                          <span>{dateText}</span>
                        </span>
                      )}

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-row__link"
                          aria-label={`${t.education.viewCredential} ${t.a11y.opensInNewTab}`}
                        >
                          <span>{isCredly ? t.education.verifiedOnCredly : t.education.viewCredential}</span>
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
