import { useMemo } from 'react';
import { portfolio } from './data/portfolio';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { SiteHeader } from './components/SiteHeader';
import { JavaLoader } from './components/JavaLoader';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = useMemo(
    () => ['top', ...portfolio.navigation.map((item) => item.href.slice(1))],
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <JavaLoader />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <SiteHeader theme={theme} onThemeToggle={toggleTheme} activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
