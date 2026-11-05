import { useCallback, useEffect, useRef, useState } from 'react';
import { ContactModal } from './components/ContactModal';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {
  WorkspaceTabs,
  type ProfileSubTabId,
  type WorkspaceTabId,
} from './components/WorkspaceTabs';
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

interface SectionTarget {
  tab: WorkspaceTabId;
  subTab?: ProfileSubTabId;
}

const SECTION_TO_WORKSPACE: Record<string, SectionTarget> = {
  experience: { tab: 'experience' },
  projects: { tab: 'projects' },
  'tech-stack': { tab: 'stack' },
  focus: { tab: 'stack' },
  about: { tab: 'profile', subTab: 'overview' },
  education: { tab: 'profile', subTab: 'overview' },
  'soft-skills': { tab: 'profile', subTab: 'competencies' },
  languages: { tab: 'profile', subTab: 'competencies' },
  contact: { tab: 'contact' },
};

function getInitialWorkspaceFromHash(): { tab: WorkspaceTabId; subTab: ProfileSubTabId } {
  if (typeof window === 'undefined') {
    return { tab: 'experience', subTab: 'overview' };
  }
  const rawHash = window.location.hash.replace(/^#/, '');
  const mapped = SECTION_TO_WORKSPACE[rawHash];
  if (mapped) {
    return {
      tab: mapped.tab,
      subTab: mapped.subTab ?? 'overview',
    };
  }
  return { tab: 'experience', subTab: 'overview' };
}

export function App() {
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState<WorkspaceTabId>(
    () => getInitialWorkspaceFromHash().tab
  );
  const [profileSubTab, setProfileSubTab] = useState<ProfileSubTabId>(
    () => getInitialWorkspaceFromHash().subTab
  );

  const revealKey = `${activeTab}-${profileSubTab}`;
  const activeId = useScrollSpy(SECTION_IDS, 140, revealKey);

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

  const scrollToElementSmoothly = useCallback((elementId: string) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const el = document.getElementById(elementId);
        if (el && typeof el.scrollIntoView === 'function') {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  const handleSelectTab = useCallback(
    (nextTab: WorkspaceTabId, options?: { scrollIntoWorkspace?: boolean }) => {
      setActiveTab(nextTab);
      if (options?.scrollIntoWorkspace) {
        const consoleEl = document.getElementById('workspace-console');
        if (consoleEl) {
          const rect = consoleEl.getBoundingClientRect();
          if (rect.top < 0 || rect.top > window.innerHeight * 0.65) {
            scrollToElementSmoothly('workspace-console');
          }
        }
      }
    },
    [scrollToElementSmoothly]
  );

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (sectionId === 'hero' || sectionId === 'main-content') {
        if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToElementSmoothly(sectionId);
        }
        return;
      }

      const target = SECTION_TO_WORKSPACE[sectionId];
      if (target) {
        setActiveTab(target.tab);
        if (target.subTab) {
          setProfileSubTab(target.subTab);
        }
        if (typeof window !== 'undefined' && window.history?.replaceState) {
          window.history.replaceState(null, '', `#${sectionId}`);
        }
        scrollToElementSmoothly(sectionId);
      }
    },
    [scrollToElementSmoothly]
  );

  // Intercepta enlaces internos #seccion (Header, MobileMenu, Footer) para activar su pestaña automáticamente
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#main-content') return;

      const id = href.slice(1);
      if (id === 'hero' || SECTION_TO_WORKSPACE[id]) {
        event.preventDefault();
        navigateToSection(id);
      }
    };

    const handleHashChange = () => {
      const id = window.location.hash.replace(/^#/, '');
      if (id && SECTION_TO_WORKSPACE[id]) {
        navigateToSection(id);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [navigateToSection]);

  // Inicializa y actualiza las animaciones de aparición al hacer scroll o cambiar de módulo
  useScrollReveal(revealKey);

  return (
    <div className="portfolio-app">
      {/* Luz ambiental interactiva inspirada en v4 */}
      <CursorSpotlight />

      {/* Enlace de accesibilidad para saltar al contenido principal */}
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToContent}
      </a>

      {/* Encabezado con navegación, selector de idioma y tema */}
      <Header activeId={activeId} />

      {/* Contenido principal: Hero + Consola modular por pestañas */}
      <main id="main-content" tabIndex={-1}>
        <Hero onOpenContact={handleOpenContactModal} onNavigateSection={navigateToSection} />

        <WorkspaceTabs
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          profileSubTab={profileSubTab}
          onSelectProfileSubTab={setProfileSubTab}
          panels={{
            experience: <Experience />,
            projects: <Projects />,
            stack: (
              <>
                <TechStack />
                <ProfessionalFocus />
              </>
            ),
            profile: (
              <>
                <div hidden={profileSubTab === 'competencies'}>
                  <About />
                  <Education />
                </div>
                <div hidden={profileSubTab === 'overview'}>
                  <SoftSkills />
                  <Languages />
                </div>
              </>
            ),
            contact: <Contact onOpenContact={handleOpenContactModal} />,
          }}
        />
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
