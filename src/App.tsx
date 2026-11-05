import { useCallback, useEffect, useRef, useState } from 'react';
import { ContactModal } from './components/ContactModal';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NextTabButton } from './components/NextTabButton';
import { NAV_ITEMS, PAGE_TABS, SECTION_TO_TAB, type PageTabId } from './data/navigation';
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

function getInitialTabFromHash(): PageTabId {
  if (typeof window === 'undefined') return 'tab1';
  const rawHash = window.location.hash.replace(/^#/, '');
  return SECTION_TO_TAB[rawHash] ?? 'tab1';
}

export function App() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<PageTabId>(getInitialTabFromHash);
  const activeId = useScrollSpy(SECTION_IDS, 140, activeTab);

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

  const handleSelectTab = useCallback((nextTab: PageTabId) => {
    setActiveTab(nextTab);
    const tabConfig = PAGE_TABS.find((item) => item.id === nextTab);
    const firstSection = tabConfig?.sectionIds[0];
    if (firstSection && typeof window !== 'undefined' && window.history?.replaceState) {
      window.history.replaceState(
        null,
        '',
        nextTab === 'tab1' ? window.location.pathname : `#${firstSection}`
      );
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToSection = useCallback((sectionId: string) => {
    const targetTab = SECTION_TO_TAB[sectionId];
    if (!targetTab) return;

    setActiveTab(targetTab);
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      window.history.replaceState(
        null,
        '',
        sectionId === 'hero' ? window.location.pathname : `#${sectionId}`
      );
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const el = document.getElementById(sectionId);
        if (el && typeof el.scrollIntoView === 'function') {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  // Intercepta cualquier enlace interno #seccion (Hero CTA, Footer, etc.) para abrir su pestaña correspondiente
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#main-content') return;

      const sectionId = href.slice(1);
      if (SECTION_TO_TAB[sectionId]) {
        event.preventDefault();
        navigateToSection(sectionId);
      }
    };

    const handleHashChange = () => {
      const sectionId = window.location.hash.replace(/^#/, '');
      if (sectionId && SECTION_TO_TAB[sectionId]) {
        navigateToSection(sectionId);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [navigateToSection]);

  // Revela elementos dinámicamente en la pestaña activa sin volver a ocultarlos tras interactuar
  useScrollReveal(activeTab);

  return (
    <div className="portfolio-app">
      {/* Luz ambiental interactiva */}
      <CursorSpotlight />

      {/* Enlace de accesibilidad para saltar al contenido principal */}
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToContent}
      </a>

      {/* Única barra de navegación con las 4 pestañas principales */}
      <Header
        activeId={activeId}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onNavigateSection={navigateToSection}
      />

      {/* Contenido dividido en 4 pestañas horizontales con botón Uiverse de siguiente lectura */}
      <main id="main-content" tabIndex={-1}>
        {/* Pestaña 1: Inicio y Sobre mí */}
        <div
          id="screen-tab1"
          role="tabpanel"
          aria-labelledby="header-tab-tab1"
          className="tab-screen"
          hidden={activeTab !== 'tab1'}
        >
          <Hero onOpenContact={handleOpenContactModal} />
          <About />
          <NextTabButton
            kicker={t.pageTabs.continueReading}
            title={t.pageTabs.tabs.tab1.nextTitle}
            onClick={() => handleSelectTab('tab2')}
          />
        </div>

        {/* Pestaña 2: Habilidades técnicas, Experiencia y Proyectos destacados */}
        <div
          id="screen-tab2"
          role="tabpanel"
          aria-labelledby="header-tab-tab2"
          className="tab-screen"
          hidden={activeTab !== 'tab2'}
        >
          <TechStack />
          <Experience />
          <Projects />
          <NextTabButton
            kicker={t.pageTabs.continueReading}
            title={t.pageTabs.tabs.tab2.nextTitle}
            onClick={() => handleSelectTab('tab3')}
          />
        </div>

        {/* Pestaña 3: Educación y certificaciones, Habilidades blandas, Idiomas y Enfoque profesional */}
        <div
          id="screen-tab3"
          role="tabpanel"
          aria-labelledby="header-tab-tab3"
          className="tab-screen"
          hidden={activeTab !== 'tab3'}
        >
          <Education />
          <SoftSkills />
          <Languages />
          <ProfessionalFocus />
          <NextTabButton
            kicker={t.pageTabs.continueReading}
            title={t.pageTabs.tabs.tab3.nextTitle}
            onClick={() => handleSelectTab('tab4')}
          />
        </div>

        {/* Pestaña 4: Contacto profesional */}
        <div
          id="screen-tab4"
          role="tabpanel"
          aria-labelledby="header-tab-tab4"
          className="tab-screen"
          hidden={activeTab !== 'tab4'}
        >
          <Contact onOpenContact={handleOpenContactModal} />
          <NextTabButton
            kicker={t.pageTabs.backToStart}
            title={t.pageTabs.tabs.tab4.nextTitle}
            onClick={() => handleSelectTab('tab1')}
          />
        </div>
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
