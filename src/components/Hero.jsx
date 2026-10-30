import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { profile, stats } from '../data/portfolio';
import CountUp from './ui/CountUp';

const RUNGS = 14;
const pipeline = ['Target', 'Docking', 'ADMET', 'In Vivo', 'Histology'];

/**
 * Animated double-helix built from oscillating base pairs.
 * Each rung is phase-shifted, giving the illusion of rotation.
 */
function Helix() {
  return (
    <div className="relative flex flex-col items-center gap-[14px] py-2" aria-hidden="true">
      {Array.from({ length: RUNGS }).map((_, i) => {
        const transition = { duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: -i * 0.22 };
        return (
          <div key={i} className="relative flex h-3 w-40 items-center justify-center sm:w-48">
            <motion.span
              className="absolute h-px w-full origin-center bg-gradient-to-r from-helix-400/70 via-cyan-300/40 to-violet-400/70"
              animate={{ scaleX: [1, 0, 1, 0, 1] }}
              transition={transition}
            />
            <motion.span
              className="absolute h-3 w-3 rounded-full bg-helix-400 shadow-[0_0_12px_rgba(30,224,189,0.7)]"
              animate={{ x: [-80, 0, 80, 0, -80], scale: [1, 1.35, 1, 0.65, 1], opacity: [1, 1, 1, 0.45, 1] }}
              transition={transition}
            />
            <motion.span
              className="absolute h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]"
              animate={{ x: [80, 0, -80, 0, 80], scale: [1, 0.65, 1, 1.35, 1], opacity: [1, 0.45, 1, 1, 1] }}
              transition={transition}
            />
          </div>
        );
      })}
    </div>
  );
}

/**
 * Wraps the helix so it can be dragged around inside its card (mouse or touch)
 * and tilts in 3D toward the cursor. Double-click springs it back to centre.
 */
function DraggableHelix({ constraintsRef }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 30);
    rotateX.set(-py * 30);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const resetPosition = () => {
    const spring = { type: 'spring', stiffness: 300, damping: 25 };
    animate(x, 0, spring);
    animate(y, 0, spring);
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.15}
      dragMomentum={false}
      whileHover={{ scale: 1.03 }}
      whileDrag={{ scale: 1.08, cursor: 'grabbing' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onDoubleClick={resetPosition}
      style={{ x, y, rotateX, rotateY, transformPerspective: 800, touchAction: 'none' }}
      className="cursor-grab select-none rounded-2xl"
      title="Drag to move · double-click to reset"
    >
      <Helix />
    </motion.div>
  );
}

/** Cycles through role tags with a vertical slide transition. */
function RotatingRole({ roles }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="text-gradient whitespace-nowrap"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  // Bounds for the draggable helix
  const cardRef = useRef(null);
  const socials = [
    { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
    { href: profile.phoneHref, icon: Phone, label: 'Phone' },
  ];

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-16 pt-28 sm:pt-32">
      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        {/* ---- Copy ---- */}
        <div>
          <motion.p {...fadeUp(0)} className="mono-label">
            {profile.title}
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-4 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.22)}
            className="mt-5 font-display text-xl font-semibold text-ink-700 dark:text-ink-200 sm:text-2xl lg:text-3xl"
          >
            <RotatingRole roles={profile.roles} />
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-5 flex flex-wrap gap-2">
            {profile.roles.map((r) => (
              <span key={r} className="chip">
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp(0.34)}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="btn-primary">
              Explore Portfolio <ArrowDown size={16} />
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.46)} className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="icon-btn h-11 w-11"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400">
              <MapPin size={15} className="text-helix-600 dark:text-helix-400" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* ---- Visual ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div ref={cardRef} className="card relative overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="mono-label">specimen://bmb-research</span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </span>
            </div>

            <div className="mt-6 flex justify-center">
              <DraggableHelix constraintsRef={cardRef} />
            </div>
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
              Drag to move · double-click to reset
            </p>

            {/* Molecule → medicine pipeline */}
            <div className="mt-6 border-t border-ink-200 pt-5 dark:border-white/10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">Research pipeline</p>
              <ol className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[11px] sm:text-xs">
                {pipeline.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <motion.span
                      className="rounded-md border border-helix-500/30 bg-helix-500/10 px-2 py-1 text-helix-700 dark:text-helix-300"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.12 }}
                    >
                      {step}
                    </motion.span>
                    {i < pipeline.length - 1 && <span className="text-ink-400">→</span>}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-helix-500/20 via-transparent to-violet-500/20 blur-2xl" />
        </motion.div>
      </div>

      {/* Quick stats strip */}
      <div className="absolute inset-x-0 bottom-0 hidden translate-y-1/2 lg:block">
        <div className="container-px">
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="card grid grid-cols-4 divide-x divide-ink-200 dark:divide-white/10"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="px-6 py-5">
                <dt className="text-xs text-ink-500 dark:text-ink-400">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold text-ink-900 dark:text-white">
                  <CountUp value={s.value} delay={0.8 + i * 0.1} />
                  <span className="text-lg text-helix-600 dark:text-helix-400">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
