import { useRef, useState } from 'react';
import { ContactModal } from './components/ContactModal';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NAV_ITEMS } from './data/navigation';
import { useLanguage } from './hooks/useLanguage';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useScrollSpy } from './hooks/useScrollSpy';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Languages } from './sections/Languages';
import { ProfessionalFocus } from './sections/ProfessionalFocus';
import { Projects } from './sections/Projects';
import { SoftSkills } from './sections/SoftSkills';
import { TechStack } from './sections/TechStack';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function App() {
  const { t } = useLanguage();
  const activeId = useScrollSpy(SECTION_IDS, 140);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const contactTriggerRef = useRef<HTMLElement | null>(null);

  const handleOpenContactModal = (triggerElement?: HTMLElement | null) => {
    if (triggerElement) {
      contactTriggerRef.current = triggerElement;
    }
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Inicializa las animaciones dinámicas al hacer scroll por las secciones
  useScrollReveal();

  return (
    <div className="portfolio-app">
      {/* Luz ambiental interactiva */}
      <CursorSpotlight />

      {/* Enlace de accesibilidad para saltar al contenido principal */}
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToContent}
      </a>

      {/* Única barra de navegación unificada */}
      <Header activeId={activeId} />

      {/* Contenido principal conciso y directo */}
      <main id="main-content" tabIndex={-1}>
        <Hero onOpenContact={handleOpenContactModal} />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <SoftSkills />
        <Languages />
        <ProfessionalFocus />
        <Contact onOpenContact={handleOpenContactModal} />
      </main>

      {/* Modal accesible de contacto profesional */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        triggerRef={contactTriggerRef}
      />

      {/* Pie de página con enlaces y año dinámico */}
      <Footer />
    </div>
  );
}

export default App;
