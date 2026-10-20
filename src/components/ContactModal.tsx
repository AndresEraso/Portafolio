import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type RefObject,
} from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Send,
  Terminal,
  X,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: RefObject<HTMLElement | null>;
}

export function ContactModal({ isOpen, onClose, triggerRef }: ContactModalProps) {
  const { t } = useLanguage();
  const { profile } = PORTFOLIO_DATA;

  const [activeTab, setActiveTab] = useState<'form' | 'channels'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Bloquear desplazamiento del fondo y restaurar foco accesible
  useEffect(() => {
    if (!isOpen) return;

    const currentTrigger = triggerRef?.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Foco inicial en el botón de cerrar o primer control
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Trampa de foco (Focus Trap)
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);

      // Devolver foco al elemento que abrió el modal
      if (currentTrigger) {
        currentTrigger.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    if (!profile.social.email) return;
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t.contactModal.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contactModal.validation.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.contactModal.validation.emailInvalid;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = t.contactModal.validation.subjectRequired;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t.contactModal.validation.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOpenMailto = () => {
    const recipient = profile.social.email || 'dubereraso@unicauca.edu.co';
    const subjectText = formData.subject.trim() || 'Contacto profesional / Oportunidad de software';
    const bodyText = `Hola Duber,\n\nSoy ${formData.name || '[Nombre]'}${
      formData.email ? ` (${formData.email})` : ''
    }.\n\n${formData.message || ''}\n\nSaludos cordiales,\n${formData.name || ''}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (contactEndpoint) {
      try {
        const response = await fetch(contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          // Si el endpoint remoto falla, ofrecer el enlace mailto directo
          handleOpenMailto();
        }
      } catch {
        handleOpenMailto();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Si no existe endpoint configurado, abrimos de forma segura y transparente el mailto
      handleOpenMailto();
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="contact-modal__backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Cabecera Técnica del Modal */}
        <div className="contact-modal__header">
          <div className="contact-modal__header-left">
            <span className="contact-modal__badge mono">{t.contactModal.badge}</span>
            <h2 id="contact-modal-title" className="contact-modal__title">
              {t.contactModal.title}
            </h2>
            <p className="contact-modal__subtitle">{t.contactModal.subtitle}</p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="contact-modal__close-btn"
            onClick={onClose}
            aria-label={t.a11y.closeModal}
            title={t.a11y.closeModal}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Pestañas de Selección */}
        <div className="contact-modal__tabs mono" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'form'}
            className={`contact-modal__tab ${activeTab === 'form' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('form')}
          >
            <Mail size={14} aria-hidden="true" />
            <span>{t.contactModal.formTab}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'channels'}
            className={`contact-modal__tab ${activeTab === 'channels' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('channels')}
          >
            <Terminal size={14} aria-hidden="true" />
            <span>{t.contactModal.channelsTab}</span>
          </button>
        </div>

        {/* Contenido del Modal */}
        <div className="contact-modal__body">
          {activeTab === 'form' ? (
            <div className="contact-modal__form-wrapper">
              {isSubmitted ? (
                <div className="contact-modal__success" role="status">
                  <div className="contact-modal__success-icon">
                    <Check size={28} aria-hidden="true" />
                  </div>
                  <h3 className="contact-modal__success-title">
                    {t.contactModal.successTitle}
                  </h3>
                  <p className="contact-modal__success-desc">
                    {t.contactModal.successDesc}
                  </p>
                  <div className="contact-modal__success-actions">
                    <button
                      type="button"
                      className="contact-modal__btn contact-modal__btn--secondary mono"
                      onClick={() => setIsSubmitted(false)}
                    >
                      {t.contactModal.sendAnother}
                    </button>
                    <button
                      type="button"
                      className="contact-modal__btn contact-modal__btn--primary mono"
                      onClick={onClose}
                    >
                      {t.contactModal.close}
                    </button>
                  </div>
                </div>
              ) : (
                <form className="contact-modal__form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-modal__field-grid">
                    {/* Campo Nombre */}
                    <div className="contact-modal__field">
                      <label htmlFor="contact-name" className="contact-modal__label mono">
                        {t.contactModal.nameLabel} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className={`contact-modal__input ${errors.name ? 'has-error' : ''}`}
                        placeholder={t.contactModal.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                      />
                      {errors.name && (
                        <span className="contact-modal__error mono" role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Campo Correo */}
                    <div className="contact-modal__field">
                      <label htmlFor="contact-email" className="contact-modal__label mono">
                        {t.contactModal.emailLabel} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        className={`contact-modal__input ${errors.email ? 'has-error' : ''}`}
                        placeholder={t.contactModal.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                      />
                      {errors.email && (
                        <span className="contact-modal__error mono" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Campo Asunto */}
                  <div className="contact-modal__field">
                    <label htmlFor="contact-subject" className="contact-modal__label mono">
                      {t.contactModal.subjectLabel} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      className={`contact-modal__input ${errors.subject ? 'has-error' : ''}`}
                      placeholder={t.contactModal.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                    />
                    {errors.subject && (
                      <span className="contact-modal__error mono" role="alert">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Campo Mensaje */}
                  <div className="contact-modal__field">
                    <label htmlFor="contact-message" className="contact-modal__label mono">
                      {t.contactModal.messageLabel} <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      className={`contact-modal__textarea ${errors.message ? 'has-error' : ''}`}
                      placeholder={t.contactModal.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                    />
                    {errors.message && (
                      <span className="contact-modal__error mono" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Acciones de Envío */}
                  <div className="contact-modal__actions">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-modal__btn contact-modal__btn--primary mono"
                    >
                      <Send size={15} aria-hidden="true" />
                      <span>{isSubmitting ? t.contactModal.sendingBtn : t.contactModal.submitBtn}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="contact-modal__btn contact-modal__btn--secondary mono"
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      <span>{t.contactModal.mailtoBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Pestaña: Canales Directos Verificados */
            <div className="contact-modal__channels">
              <p className="contact-modal__channels-notice mono">
                {t.contactModal.verifiedNote}
              </p>

              <div className="contact-modal__channel-cards">
                {/* Canal: GitHub Verificado */}
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-modal__channel-card mono"
                  aria-label={`GitHub (https://github.com/AndresEraso) ${t.a11y.opensInNewTab}`}
                >
                  <div className="contact-modal__channel-icon">
                    <GithubIcon width={20} height={20} />
                  </div>
                  <div className="contact-modal__channel-info">
                    <div className="contact-modal__channel-title-row">
                      <span className="contact-modal__channel-name">GitHub</span>
                      <span className="contact-modal__channel-badge">VERIFIED // PRIMARY</span>
                    </div>
                    <span className="contact-modal__channel-val">github.com/AndresEraso</span>
                  </div>
                  <ArrowUpRight size={16} className="contact-modal__channel-arrow" aria-hidden="true" />
                </a>

                {/* Canal: Correo Electrónico Institucional/Profesional */}
                {profile.social.email && (
                  <div className="contact-modal__channel-card contact-modal__channel-card--email mono">
                    <div className="contact-modal__channel-icon">
                      <Mail size={20} aria-hidden="true" />
                    </div>
                    <div className="contact-modal__channel-info">
                      <div className="contact-modal__channel-title-row">
                        <span className="contact-modal__channel-name">
                          {t.contactModal.directEmailLabel}
                        </span>
                        <span className="contact-modal__channel-badge">DIRECT</span>
                      </div>
                      <a
                        href={`mailto:${profile.social.email}`}
                        className="contact-modal__channel-val"
                      >
                        {profile.social.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      className="contact-modal__copy-btn"
                      onClick={handleCopyEmail}
                      aria-label={`${t.contactModal.copyEmail}: ${profile.social.email}`}
                      title={t.contactModal.copyEmail}
                    >
                      {copiedEmail ? (
                        <Check size={15} aria-hidden="true" />
                      ) : (
                        <Copy size={15} aria-hidden="true" />
                      )}
                      <span>{copiedEmail ? t.contactModal.copied : t.contactModal.copyEmail}</span>
                    </button>
                  </div>
                )}

                {/* Canal: LinkedIn (si está configurado) */}
                {profile.social.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-modal__channel-card mono"
                    aria-label={`LinkedIn ${t.a11y.opensInNewTab}`}
                  >
                    <div className="contact-modal__channel-icon">
                      <LinkedinIcon width={20} height={20} />
                    </div>
                    <div className="contact-modal__channel-info">
                      <div className="contact-modal__channel-title-row">
                        <span className="contact-modal__channel-name">LinkedIn</span>
                        <span className="contact-modal__channel-badge">NETWORK</span>
                      </div>
                      <span className="contact-modal__channel-val">Perfil profesional</span>
                    </div>
                    <ArrowUpRight size={16} className="contact-modal__channel-arrow" aria-hidden="true" />
                  </a>
                )}

                {/* Canal: WhatsApp (si está configurado) */}
                {profile.social.whatsapp && (
                  <a
                    href={profile.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-modal__channel-card mono"
                    aria-label={`WhatsApp ${t.a11y.opensInNewTab}`}
                  >
                    <div className="contact-modal__channel-icon">
                      <WhatsappIcon width={20} height={20} />
                    </div>
                    <div className="contact-modal__channel-info">
                      <div className="contact-modal__channel-title-row">
                        <span className="contact-modal__channel-name">WhatsApp</span>
                        <span className="contact-modal__channel-badge">CHAT</span>
                      </div>
                      <span className="contact-modal__channel-val">Mensajería directa</span>
                    </div>
                    <ArrowUpRight size={16} className="contact-modal__channel-arrow" aria-hidden="true" />
                  </a>
                )}

                {/* Canal: Instagram (si está configurado) */}
                {profile.social.instagram && (
                  <a
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-modal__channel-card mono"
                    aria-label={`Instagram ${t.a11y.opensInNewTab}`}
                  >
                    <div className="contact-modal__channel-icon">
                      <InstagramIcon width={20} height={20} />
                    </div>
                    <div className="contact-modal__channel-info">
                      <div className="contact-modal__channel-title-row">
                        <span className="contact-modal__channel-name">Instagram</span>
                        <span className="contact-modal__channel-badge">FEED</span>
                      </div>
                      <span className="contact-modal__channel-val">Actualizaciones</span>
                    </div>
                    <ArrowUpRight size={16} className="contact-modal__channel-arrow" aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Ubicación y Disponibilidad */}
              <div className="contact-modal__location mono">
                <MapPin size={14} aria-hidden="true" />
                <span>{t.contactModal.locationVal}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
