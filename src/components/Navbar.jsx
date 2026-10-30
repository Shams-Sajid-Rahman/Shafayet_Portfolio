import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X, Dna } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = navLinks.map((l) => l.id);

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="icon-btn relative h-10 w-10 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  // Add a stronger background once the user scrolls past the hero top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile drawer is open
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close the drawer if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-white/70 shadow-sm backdrop-blur-xl dark:border-white/[0.06] dark:bg-ink-950/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between gap-4" aria-label="Primary">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label={`${profile.shortName} – home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-helix-400 to-cyan-500 text-ink-950 shadow-lg shadow-helix-500/25 transition-transform group-hover:rotate-12">
            <Dna size={18} strokeWidth={2.4} />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-ink-900 dark:text-white sm:text-lg">
            {profile.shortName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative isolate rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-helix-700 dark:text-helix-300'
                      : 'text-ink-600 hover:bg-helix-500/10 hover:text-helix-700 dark:text-ink-400 dark:hover:bg-helix-400/10 dark:hover:text-helix-300'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-helix-500/10 dark:bg-helix-400/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="icon-btn h-10 w-10 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 top-16 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              id="mobile-menu"
              className="fixed bottom-0 right-0 top-16 z-50 flex w-full max-w-xs flex-col border-l border-ink-200 bg-white/95 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/95 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                        active === link.id
                          ? 'bg-helix-500/10 text-helix-700 dark:text-helix-300'
                          : 'text-ink-700 hover:bg-helix-500/10 hover:text-helix-700 dark:text-ink-200 dark:hover:bg-helix-400/10 dark:hover:text-helix-300'
                      }`}
                    >
                      {link.label}
                      <span className="font-mono text-xs text-ink-400">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto border-t border-ink-200 pt-6 text-sm text-ink-500 dark:border-white/10 dark:text-ink-400">
                <a href={`mailto:${profile.email}`} className="block break-all hover:text-helix-600">
                  {profile.email}
                </a>
                <p className="mt-1">{profile.locationShort}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
