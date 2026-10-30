import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import { experienceFilters, experiences } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';

function TimelineItem({ item, expanded, onToggle }) {
  const { icon: Icon } = item;
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="relative pl-12 sm:pl-16"
    >
      {/* Node on the timeline rail */}
      <span className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-helix-500/40 bg-ink-50 text-helix-600 dark:bg-ink-950 dark:text-helix-300 sm:left-2">
        <Icon size={16} />
        {item.current && (
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-ink-50 dark:ring-ink-950" />
        )}
      </span>

      <article className="card card-hover overflow-hidden">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="flex w-full flex-col gap-3 p-5 text-left sm:flex-row sm:items-start sm:justify-between sm:p-6"
        >
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">{item.role}</h3>
            <p className="mt-1 text-sm font-medium text-helix-700 dark:text-helix-400">{item.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{item.summary}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
            <span className="chip font-mono">
              <Calendar size={12} />
              {item.period}
            </span>
            <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-ink-500 sm:ml-0">
              {expanded ? 'Less' : 'Details'}
              <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-ink-200 px-5 pb-6 pt-5 dark:border-white/[0.07] sm:px-6">
                <ul className="space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-helix-500" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-md bg-helix-500/10 px-2 py-1 font-mono text-[11px] text-helix-700 dark:text-helix-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </motion.li>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState('all');
  // First entry starts expanded so visitors immediately see the detail view
  const [expandedId, setExpandedId] = useState(experiences[0]?.id);

  const visible = filter === 'all' ? experiences : experiences.filter((e) => e.type === filter);

  return (
    <section id="experience" className="section">
      <div className="container-px">
        <SectionHeading
          index="03"
          label="Experience"
          title="Research & professional timeline"
          description="Clinical diagnostics, rodent pharmacology and computational screening. Filter by discipline and expand an entry for protocol-level detail."
        />

        {/* Filter tabs */}
        <div role="tablist" aria-label="Filter experience" className="mb-10 flex flex-wrap gap-2">
          {experienceFilters.map((f) => {
            const count = f.id === 'all' ? experiences.length : experiences.filter((e) => e.type === f.id).length;
            const selected = filter === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setFilter(f.id)}
                className={`relative isolate rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? 'border-helix-500 text-ink-950 dark:text-ink-950'
                    : 'border-ink-200 text-ink-600 hover:border-helix-500/60 hover:bg-helix-500/10 hover:text-helix-700 dark:border-white/10 dark:text-ink-400 dark:hover:text-helix-300'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="exp-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-helix-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {f.label}
                <span className="ml-1.5 font-mono text-xs opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-helix-500/60 via-ink-300 to-transparent dark:via-white/10 sm:left-[25px]"
          />
          <motion.ul layout className="space-y-6">
            <AnimatePresence initial={false}>
              {visible.map((item) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  expanded={expandedId === item.id}
                  onToggle={() => setExpandedId((id) => (id === item.id ? null : item.id))}
                />
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
