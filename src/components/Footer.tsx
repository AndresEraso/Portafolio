import { ArrowUp, ArrowUpRight, Mail, Terminal } from 'lucide-react';
import { PRIMARY_NAV_ITEMS } from '../data/navigation';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import './Footer.css';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        {/* Sección Superior: Identidad, Navegación y Canales Sociales */}
        <div className="footer__grid">
          {/* Columna 1: Identidad y Lema Técnico */}
          <div className="footer__brand-col">
            <a href="#hero" className="footer__logo" aria-label={t.a11y.homeLink}>
              <span className="footer__logo-badge mono">DE</span>
              <span className="footer__name">{profile.name}</span>
            </a>
            <p className="footer__role mono">{profile.role}</p>
            <p className="footer__tagline">{t.footer.tagline}</p>
          </div>

          {/* Columna 2: Navegación Secundaria */}
          <div className="footer__nav-col">
            <div className="footer__col-header mono">
              <span>// {t.footer.navHeading.toUpperCase()}</span>
            </div>
            <nav className="footer__nav" aria-label={t.a11y.footerNav}>
              <ul className="footer__nav-list" role="list">
                {PRIMARY_NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a href={item.href} className="footer__nav-link mono">
                      {t.nav[item.labelKey]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 3: Apartado de Redes Sociales y Canales */}
          <div className="footer__social-col">
            <div className="footer__col-header mono">
              <Terminal size={13} aria-hidden="true" />
              <span>// {t.footer.socialHeading.toUpperCase()}</span>
            </div>
            <p className="footer__social-desc">{t.footer.socialSub}</p>

            <div className="footer__social-list">
              {/* GitHub (Verificado) */}
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item footer__social-item--verified mono"
                aria-label={`GitHub (${t.footer.channels.githubDesc}) ${t.a11y.opensInNewTab}`}
              >
                <div className="footer__social-left">
                  <GithubIcon width={16} height={16} />
                  <span className="footer__social-name">GitHub</span>
                </div>
                <div className="footer__social-right">
                  <span className="footer__social-badge">VERIFIED</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </div>
              </a>

              {/* LinkedIn (si está configurado) */}
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-item mono"
                  aria-label={`LinkedIn (${t.footer.channels.linkedinDesc}) ${t.a11y.opensInNewTab}`}
                >
                  <div className="footer__social-left">
                    <LinkedinIcon width={16} height={16} />
                    <span className="footer__social-name">LinkedIn</span>
                  </div>
                  <div className="footer__social-right">
                    <span className="footer__social-badge">NETWORK</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </div>
                </a>
              )}

              {/* Correo Electrónico (si está configurado) */}
              {profile.social.email && (
                <a
                  href={`mailto:${profile.social.email}`}
                  className="footer__social-item mono"
                  aria-label={`Email (${t.footer.channels.emailDesc})`}
                >
                  <div className="footer__social-left">
                    <Mail size={16} aria-hidden="true" />
                    <span className="footer__social-name">Email</span>
                  </div>
                  <div className="footer__social-right">
                    <span className="footer__social-badge">DIRECT</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </div>
                </a>
              )}

              {/* WhatsApp (si está configurado) */}
              {profile.social.whatsapp && (
                <a
                  href={profile.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-item mono"
                  aria-label={`WhatsApp (${t.footer.channels.whatsappDesc}) ${t.a11y.opensInNewTab}`}
                >
                  <div className="footer__social-left">
                    <WhatsappIcon width={16} height={16} />
                    <span className="footer__social-name">WhatsApp</span>
                  </div>
                  <div className="footer__social-right">
                    <span className="footer__social-badge">CHAT</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </div>
                </a>
              )}

              {/* Instagram (si está configurado) */}
              {profile.social.instagram && (
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-item mono"
                  aria-label={`Instagram (${t.footer.channels.instagramDesc}) ${t.a11y.opensInNewTab}`}
                >
                  <div className="footer__social-left">
                    <InstagramIcon width={16} height={16} />
                    <span className="footer__social-name">Instagram</span>
                  </div>
                  <div className="footer__social-right">
                    <span className="footer__social-badge">FEED</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Separador Técnico */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Barra Inferior: Telemetría, Copyright y Botón de Inicio */}
        <div className="footer__bottom">
          <div className="footer__telemetry mono">
            <span className="footer__status-pulse" aria-hidden="true" />
            <span>{t.footer.statusOnline} // {t.footer.region}</span>
          </div>

          <p className="footer__copy mono">
            © {currentYear} {profile.name}. {t.footer.rights}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer__back-to-top mono"
            aria-label={t.footer.backToTop}
            title={t.footer.backToTop}
          >
            <ArrowUp size={14} aria-hidden="true" />
            <span>{t.footer.backToTop}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
