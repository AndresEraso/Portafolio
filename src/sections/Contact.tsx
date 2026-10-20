import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SectionHeading } from '../components/SectionHeading';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './Contact.css';

export function Contact() {
  const { t } = useLanguage();
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (!profile.social.email) return;

    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow={`SYS.10 // ${t.contact.eyebrow}`}
          title={t.contact.title}
          subtitle={t.contact.text}
        />

        <div className="contact__ledger reveal">
          <div className="contact__ledger-header mono">
            <div className="contact__ledger-title">
              <Terminal size={14} aria-hidden="true" />
              <span>// {t.contact.channelsLabel.toUpperCase()}</span>
            </div>
            <span className="contact__ledger-status">NETWORK_ENDPOINTS: READY</span>
          </div>

          <div className="contact__channels-list">
            {/* GitHub (Verificado) */}
            <div className="contact-endpoint">
              <div className="contact-endpoint__icon-box">
                <GithubIcon width={18} height={18} />
              </div>
              <div className="contact-endpoint__info">
                <div className="contact-endpoint__tag-row mono">
                  <span className="contact-endpoint__label">{t.contact.github.label}</span>
                  <span className="contact-endpoint__badge">VERIFIED // PRIMARY</span>
                </div>
                <p className="contact-endpoint__desc">{t.contact.github.description}</p>
              </div>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-endpoint__btn contact-endpoint__btn--primary mono"
                aria-label={`${t.contact.github.action} ${t.a11y.opensInNewTab}`}
              >
                <span>{t.contact.github.action}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* LinkedIn (si está configurado) */}
            {profile.social.linkedin && (
              <div className="contact-endpoint">
                <div className="contact-endpoint__icon-box">
                  <LinkedinIcon width={18} height={18} />
                </div>
                <div className="contact-endpoint__info">
                  <span className="contact-endpoint__label mono">{t.contact.linkedin.label}</span>
                  <p className="contact-endpoint__desc">{t.contact.linkedin.description}</p>
                </div>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-endpoint__btn mono"
                  aria-label={`${t.contact.linkedin.action} ${t.a11y.opensInNewTab}`}
                >
                  <span>{t.contact.linkedin.action}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            )}

            {/* Correo Electrónico (si está configurado) */}
            {profile.social.email && (
              <div className="contact-endpoint">
                <div className="contact-endpoint__icon-box">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="contact-endpoint__info">
                  <span className="contact-endpoint__label mono">{t.contact.email.label}</span>
                  <p className="contact-endpoint__desc mono">{profile.social.email}</p>
                </div>
                <div className="contact-endpoint__actions">
                  <a
                    href={`mailto:${profile.social.email}`}
                    className="contact-endpoint__btn contact-endpoint__btn--primary mono"
                    aria-label={t.contact.email.action}
                  >
                    <span>{t.contact.email.action}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className="contact-endpoint__copy-btn mono"
                    onClick={handleCopyEmail}
                    aria-label={t.contact.email.copy}
                  >
                    {copied ? (
                      <Check size={14} aria-hidden="true" />
                    ) : (
                      <Copy size={14} aria-hidden="true" />
                    )}
                    <span>{copied ? t.contact.email.copied : t.contact.email.copy}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Descarga de CV (si está configurado) */}
            {profile.social.resumeUrl && (
              <div className="contact-endpoint">
                <div className="contact-endpoint__icon-box">
                  <Download size={18} aria-hidden="true" />
                </div>
                <div className="contact-endpoint__info">
                  <span className="contact-endpoint__label mono">{t.contact.cv.label}</span>
                  <p className="contact-endpoint__desc">
                    PDF Curriculum Vitae (Duber Andrés Eraso Uni)
                  </p>
                </div>
                <a
                  href={profile.social.resumeUrl}
                  download
                  className="contact-endpoint__btn mono"
                  aria-label={t.contact.cv.action}
                >
                  <Download size={14} aria-hidden="true" />
                  <span>{t.contact.cv.action}</span>
                </a>
              </div>
            )}
          </div>

          {/* Pie de Ubicación y Disponibilidad */}
          <div className="contact__footer mono">
            <div className="contact__location">
              <MapPin size={13} aria-hidden="true" />
              <span>{t.contact.basedIn}: {profile.location}</span>
            </div>
            <div className="contact__readiness">
              <span className="contact__readiness-pulse" aria-hidden="true" />
              <span>STATUS: INQUIRIES_WELCOME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
