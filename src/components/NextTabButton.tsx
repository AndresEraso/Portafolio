import './NextTabButton.css';

interface NextTabButtonProps {
  kicker: string;
  title: string;
  onClick: () => void;
}

/**
 * Botón de avance al final de cada pestaña basado en el diseño Uiverse (vinodjangid07),
 * adaptado con tokens semánticos para modo oscuro y modo claro y ancho fluido responsivo.
 */
export function NextTabButton({ kicker, title, onClick }: NextTabButtonProps) {
  return (
    <div className="next-tab-nav">
      <div className="container next-tab-nav__inner">
        <span className="next-tab-nav__kicker mono">{kicker}</span>
        <button type="button" className="next-tab-btn" onClick={onClick}>
          <span className="next-tab-btn__text">{title}</span>
          <span className="next-tab-btn__arrow-box" aria-hidden="true">
            <svg
              className="next-tab-btn__arrow"
              viewBox="0 0 448 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
