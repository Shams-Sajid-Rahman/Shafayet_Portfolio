import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';

/**
 * Interactive skills matrix.
 * Desktop: category selector (left) + detail panel (right).
 * All viewports: card grid below, where hovering/tapping a card selects it.
 */
export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId);
  const totalSkills = skillCategories.reduce((n, c) => n + c.skills.length, 0);

  return (
    <section id="skills" className="section">
      <div className="container-px">
        <SectionHeading
          index="02"
          label="Technical Skills"
          title="A wet-lab and dry-lab toolkit"
          description={`${totalSkills} techniques across ${skillCategories.length} disciplines. Select a category to inspect the protocol stack.`}
        />

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Category selector */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {skillCategories.map(({ id, icon: Icon, title, skills }) => {
              const selected = id === activeId;
              return (
                <button
                  key={id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="skill-panel"
                  onClick={() => setActiveId(id)}
                  className={`relative isolate flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full ${
                    selected
                      ? 'border-helix-500/50 text-ink-900 dark:text-white'
                      : 'border-ink-200 bg-white/50 text-ink-600 hover:border-helix-500/60 hover:bg-helix-500/10 hover:text-helix-700 dark:border-white/[0.07] dark:bg-white/[0.02] dark:text-ink-400 dark:hover:text-helix-300'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 -z-10 rounded-xl bg-helix-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon size={18} className={selected ? 'text-helix-600 dark:text-helix-300' : ''} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{title}</span>
                  <span className="ml-auto hidden font-mono text-xs text-ink-400 lg:inline">
                    {String(skills.length).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div id="skill-panel" role="tabpanel" className="card relative min-h-[320px] overflow-hidden p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-helix-400 to-cyan-500 text-ink-950 shadow-lg shadow-helix-500/25">
                    <active.icon size={26} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-white">{active.title}</h3>
                    <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">{active.blurb}</p>
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {active.skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="group flex items-center gap-3 rounded-xl border border-ink-200 bg-white/60 px-4 py-3 transition-colors hover:border-helix-500/50 dark:border-white/[0.07] dark:bg-ink-950/40"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-helix-500/15 text-helix-600 dark:text-helix-300">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium text-ink-800 dark:text-ink-100">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
            <active.icon
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 text-helix-500/[0.06]"
            />
          </div>
        </div>

        {/* Overview matrix */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ id, icon: Icon, title, skills }, i) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => setActiveId(id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`card card-hover p-5 text-left ${id === activeId ? 'border-helix-500/50' : ''}`}
            >
              <Icon size={20} className="text-helix-600 dark:text-helix-400" />
              <p className="mt-3 text-sm font-semibold text-ink-900 dark:text-white">{title}</p>
              <div className="mt-3 flex gap-1" aria-hidden="true">
                {skills.map((s) => (
                  <span key={s} className="h-1.5 flex-1 rounded-full bg-helix-500/70" />
                ))}
              </div>
              <p className="mt-2 font-mono text-[11px] text-ink-500">{skills.length} techniques</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
