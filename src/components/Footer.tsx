import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-badge">DE</span>
              <span className="footer__name">{profile.name}</span>
            </a>
            <p className="footer__role">{profile.role}</p>
          </div>

          <div className="footer__socials">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={`GitHub ${t.a11y.opensInNewTab}`}
            >
              <GithubIcon width={18} height={18} />
              <span>GitHub</span>
            </a>

            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={`LinkedIn ${t.a11y.opensInNewTab}`}
              >
                <LinkedinIcon width={18} height={18} />
                <span>LinkedIn</span>
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="footer__back-to-top"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp size={16} aria-hidden="true" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} {profile.name}. {t.footer.rights}
          </p>
          <p className="footer__credit">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
