import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Briefcase, Layers, Sparkles, X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import {
  PORTFOLIO_DATA,
  type HoneycombCategoryKey,
  type HoneycombTechItem,
} from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import './TechStack.css';

type FilterGroup = 'all' | HoneycombCategoryKey;

interface HoverPopoverState {
  tech: HoneycombTechItem;
  x: number;
  y: number;
  placement: 'top' | 'bottom';
}

function getBaseRowSize(width: number): number {
  if (width >= 980) return 7;
  if (width >= 640) return 5;
  return 3;
}

function buildHoneycombRows(items: readonly HoneycombTechItem[], baseSize: number): HoneycombTechItem[][] {
  const rows: HoneycombTechItem[][] = [];
  let index = 0;
  let rowIdx = 0;

  while (index < items.length) {
    const targetLen = rowIdx % 2 === 0 ? baseSize : Math.max(2, baseSize - 1);
    rows.push(items.slice(index, index + targetLen));
    index += targetLen;
    rowIdx += 1;
  }

  return rows;
}

export function TechStack() {
  const { t } = useLanguage();
  const items = PORTFOLIO_DATA.techHoneycomb;

  const [activeCategory, setActiveCategory] = useState<FilterGroup>('all');
  const [hoverPopover, setHoverPopover] = useState<HoverPopoverState | null>(null);
  const [modalTech, setModalTech] = useState<HoneycombTechItem | null>(null);
  const [baseRowSize, setBaseRowSize] = useState<number>(() =>
    typeof window !== 'undefined' ? getBaseRowSize(window.innerWidth) : 7
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setBaseRowSize(getBaseRowSize(window.innerWidth));
      setHoverPopover(null);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!modalTech) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalTech(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalTech]);

  const rows = useMemo(() => buildHoneycombRows(items, baseRowSize), [items, baseRowSize]);

  const showPopoverForElement = (tech: HoneycombTechItem, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const viewportW = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const cardHalfWidth = 165;
    const clampedX = Math.min(
      Math.max(rect.left + rect.width / 2, cardHalfWidth + 12),
      viewportW - cardHalfWidth - 12
    );
    const placement: 'top' | 'bottom' = rect.top < 250 ? 'bottom' : 'top';
    const anchorY = placement === 'top' ? rect.top - 14 : rect.bottom + 14;

    setHoverPopover({
      tech,
      x: clampedX,
      y: anchorY,
      placement,
    });
  };

  const categoryKeys: FilterGroup[] = [
    'all',
    'backend',
    'cloud',
    'data',
    'databases',
    'tools',
    'frontend',
  ];

  const activeHoverCopy = hoverPopover ? t.honeycomb.items[hoverPopover.tech.id] : null;
  const activeModalCopy = modalTech ? t.honeycomb.items[modalTech.id] : null;

  return (
    <section id="tech-stack" className="section tech-stack">
      <div className="container">
        <SectionHeading
          eyebrow={t.nav.skills}
          title={t.techStack.title}
          subtitle={t.techStack.subtitle}
          align="center"
        >
          <div className="tech-stack__legend mono" aria-label={t.techStack.legendLabel}>
            <span className="tech-stack__legend-pill tech-stack__legend-pill--work">
              <Briefcase size={12} aria-hidden="true" />
              <span>{t.techStack.contexts.work}</span>
            </span>
            <span className="tech-stack__legend-pill tech-stack__legend-pill--projects">
              <Layers size={12} aria-hidden="true" />
              <span>{t.techStack.contexts.projects}</span>
            </span>
          </div>
        </SectionHeading>

        {/* Selector rápido para resaltar un dominio dentro del mismo panal */}
        <div
          className="honeycomb-filters reveal"
          role="group"
          aria-label={t.honeycomb.filterLabel}
        >
          {categoryKeys.map((key) => {
            const isActive = activeCategory === key;
            const label =
              key === 'all' ? t.honeycomb.all : t.honeycomb.categories[key];
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                className={`honeycomb-filters__btn mono ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Panal hexagonal unificado con iconos originales a todo color */}
        <div
          className="honeycomb"
          onMouseLeave={() => setHoverPopover(null)}
        >
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="honeycomb__row">
              {row.map((tech) => {
                const globalIdx = items.findIndex((i) => i.id === tech.id);
                const isDimmed =
                  activeCategory !== 'all' && tech.category !== activeCategory;
                const isHovered = hoverPopover?.tech.id === tech.id;

                const cellStyle = {
                  '--hex-accent': tech.accentColor,
                  '--hex-tile': tech.tileBg ?? '',
                  '--stagger-index': globalIdx % 10,
                } as CSSProperties;

                return (
                  <button
                    key={tech.id}
                    type="button"
                    style={cellStyle}
                    data-tech-id={tech.id}
                    aria-label={`${tech.name} — ${t.honeycomb.items[tech.id].role}`}
                    className={[
                      'hex-cell',
                      'reveal',
                      'reveal--pop',
                      tech.tileBg ? 'hex-cell--solid-tile' : '',
                      tech.fullBleed ? 'hex-cell--full-bleed' : '',
                      tech.context === 'work' ? 'hex-cell--work' : 'hex-cell--projects',
                      isDimmed ? 'is-dimmed' : '',
                      isHovered ? 'is-hovered' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onMouseEnter={(e) => showPopoverForElement(tech, e.currentTarget)}
                    onFocus={(e) => showPopoverForElement(tech, e.currentTarget)}
                    onBlur={() => setHoverPopover(null)}
                    onClick={() => {
                      setHoverPopover(null);
                      setModalTech(tech);
                    }}
                  >
                    <span className="hex-cell__rim" aria-hidden="true">
                      <span className="hex-cell__surface">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="hex-cell__icon"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Pop-up flotante instantáneo al pasar el cursor por encima de un hexágono */}
        {hoverPopover && activeHoverCopy && !modalTech && (
          <div
            className={`hex-popup hex-popup--${hoverPopover.placement}`}
            role="tooltip"
            style={
              {
                left: `${hoverPopover.x}px`,
                top: `${hoverPopover.y}px`,
                '--popup-accent': hoverPopover.tech.accentColor,
              } as CSSProperties
            }
          >
            <div className="hex-popup__header">
              <div
                className="hex-popup__icon-wrap"
                style={
                  hoverPopover.tech.tileBg
                    ? { backgroundColor: hoverPopover.tech.tileBg }
                    : undefined
                }
              >
                <img src={hoverPopover.tech.icon} alt="" aria-hidden="true" />
              </div>
              <div className="hex-popup__titles">
                <div className="hex-popup__name-row">
                  <strong className="hex-popup__name">{hoverPopover.tech.name}</strong>
                  <span
                    className={`hex-popup__ctx mono ${
                      hoverPopover.tech.context === 'work'
                        ? 'hex-popup__ctx--work'
                        : 'hex-popup__ctx--projects'
                    }`}
                  >
                    {hoverPopover.tech.context === 'work'
                      ? t.techStack.contexts.work
                      : t.techStack.contexts.projects}
                  </span>
                </div>
                <span className="hex-popup__role mono">{activeHoverCopy.role}</span>
              </div>
            </div>

            <p className="hex-popup__desc">{activeHoverCopy.desc}</p>

            <div className="hex-popup__tags">
              {activeHoverCopy.tags.map((tag) => (
                <span key={tag} className="hex-popup__tag mono">
                  {tag}
                </span>
              ))}
            </div>

            <span className="hex-popup__hint mono">
              <Sparkles size={11} aria-hidden="true" />
              <span>{t.honeycomb.clickToPin}</span>
            </span>
          </div>
        )}

        {/* Modal detallado al hacer clic / tocar cualquier hexágono del panal */}
        {modalTech && activeModalCopy && (
          <div
            className="hex-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hex-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalTech(null);
            }}
          >
            <div
              className="hex-modal"
              style={{ '--popup-accent': modalTech.accentColor } as CSSProperties}
            >
              <button
                type="button"
                className="hex-modal__close"
                aria-label={t.honeycomb.closeModal}
                onClick={() => setModalTech(null)}
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="hex-modal__top">
                <div
                  className="hex-modal__hex-preview"
                  style={
                    modalTech.tileBg ? { backgroundColor: modalTech.tileBg } : undefined
                  }
                >
                  <img src={modalTech.icon} alt={modalTech.name} />
                </div>

                <div className="hex-modal__meta">
                  <span className="hex-modal__category mono">
                    {t.honeycomb.categories[modalTech.category]}
                  </span>
                  <h3 id="hex-modal-title" className="hex-modal__title">
                    {modalTech.name}
                  </h3>
                  <p className="hex-modal__role mono">{activeModalCopy.role}</p>
                </div>
              </div>

              <div className="hex-modal__context-bar mono">
                {modalTech.context === 'work' ? (
                  <Briefcase size={13} aria-hidden="true" />
                ) : (
                  <Layers size={13} aria-hidden="true" />
                )}
                <span>
                  {modalTech.context === 'work'
                    ? t.techStack.contexts.work
                    : t.techStack.contexts.projects}
                </span>
              </div>

              <p className="hex-modal__desc">{activeModalCopy.desc}</p>

              <div className="hex-modal__tags">
                {activeModalCopy.tags.map((tag) => (
                  <span key={tag} className="hex-popup__tag mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
