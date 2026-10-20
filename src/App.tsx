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
  const activeId = useScrollSpy(SECTION_IDS, 120);

  // Inicializa las animaciones de aparición al hacer scroll
  useScrollReveal();

  return (
    <div className="portfolio-app">
      {/* Enlace de accesibilidad para saltar al contenido principal */}
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToContent}
      </a>

      {/* Encabezado con navegación, selector de idioma y tema */}
      <Header activeId={activeId} />

      {/* Contenido principal con las 10 secciones */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <SoftSkills />
        <Languages />
        <ProfessionalFocus />
        <Contact />
      </main>

      {/* Pie de página con enlaces y año dinámico */}
      <Footer />
    </div>
  );
}

export default App;
