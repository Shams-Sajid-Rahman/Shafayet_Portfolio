import { motion } from 'framer-motion';
import { about, profile, stats } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import CountUp from './ui/CountUp';

/** Framed portrait with a soft glow. */
function Portrait() {
  return (
    <Reveal className="relative mx-auto w-full max-w-sm lg:sticky lg:top-24 lg:max-w-none">
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-helix-400/30 via-cyan-400/10 to-violet-500/25 blur-xl" />
      <div className="card overflow-hidden p-2">
        <div className="relative overflow-hidden rounded-xl bg-ink-100 dark:bg-ink-800">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="1118"
            height="960"
            loading="lazy"
            decoding="async"
            className="h-auto w-full transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="section lg:pt-40">
      <div className="container-px">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              From the bench to the <span className="text-gradient">binding pocket</span>.
            </>
          }
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Portrait />

          <div>
            {/* Bio */}
            <Reveal className="space-y-5 text-base leading-relaxed text-ink-600 dark:text-ink-400 sm:text-lg">
              {about.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}

              {/* Stats (the hero shows these on desktop) */}
              <dl className="grid grid-cols-2 gap-3 pt-2 lg:hidden">
                {stats.map((s, i) => (
                  <div key={s.label} className="card p-4">
                    <dt className="text-xs text-ink-500 dark:text-ink-400">{s.label}</dt>
                    <dd className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-white">
                      <CountUp value={s.value} delay={i * 0.1} />
                      <span className="text-base text-helix-600 dark:text-helix-400">{s.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Highlight grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.highlights.map(({ icon: Icon, label, title, detail, metric }, i) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card card-hover group p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-helix-500/10 text-helix-600 transition-colors group-hover:bg-helix-500 group-hover:text-ink-950 dark:text-helix-300">
                      <Icon size={20} />
                    </span>
                    <span className="mono-label">{label}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{detail}</p>
                  {metric && (
                    <p className="mt-4 inline-flex rounded-lg bg-ink-100 px-2.5 py-1 font-mono text-xs font-medium text-ink-800 dark:bg-white/5 dark:text-helix-200">
                      {metric}
                    </p>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
