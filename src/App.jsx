import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import BackgroundDecor from './components/ui/BackgroundDecor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Thin reading-progress bar at the very top of the viewport
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-helix-400 via-cyan-400 to-violet-400"
      />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-helix-500 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>

      <BackgroundDecor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
