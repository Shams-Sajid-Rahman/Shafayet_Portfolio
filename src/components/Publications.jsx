import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileClock, PenLine } from 'lucide-react';
import { publications, publicationStatus } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';

// Tailwind needs full class names at build time, so tones are mapped explicitly
const toneClasses = {
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  sky: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300',
};

const statusIcon = { published: BookOpen, review: FileClock, preparation: PenLine };

export default function Publications() {
  const counts = publications.reduce((acc, p) => ({ ...acc, [p.status]: (acc[p.status] || 0) + 1 }), {});

  return (
    <section id="publications" className="section">
      <div className="container-px">
        <SectionHeading
          index="04"
          label="Publications & Research"
          title="Research output"
          description="Peer-reviewed work and manuscripts spanning hepatoprotection, computational pharmacology and tissue regeneration."
        />

        {/* Status summary */}
        <div className="mb-8 flex flex-wrap gap-2">
          {Object.entries(publicationStatus).filter(([key]) => counts[key]).map(([key, { label, tone }]) => (
            <span key={key} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}>
              {label}
              <span className="font-mono">{counts[key] || 0}</span>
            </span>
          ))}
        </div>

        <ol className="space-y-4">
          {publications.map((pub, i) => {
            const status = publicationStatus[pub.status];
            const Icon = statusIcon[pub.status];
            const doiUrl = pub.doi ? `https://doi.org/${pub.doi}` : null;
            return (
              <motion.li
                key={pub.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <article className="card card-hover group grid gap-5 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-7">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                    <span className="font-mono text-sm text-ink-400">[{String(i + 1).padStart(2, '0')}]</span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${toneClasses[status.tone]}`}>
                      <Icon size={18} />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${toneClasses[status.tone]}`}>
                      {status.label}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-900 dark:text-white sm:text-xl">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 dark:text-ink-400">
                      <span className="font-medium italic text-ink-800 dark:text-ink-200">{pub.venue}</span>
                      {pub.year && <span> · {pub.year}</span>}
                    </p>
                    {pub.doi && (
                      <p className="mt-1 break-all font-mono text-xs text-ink-500">DOI: {pub.doi}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pub.keywords.map((k) => (
                        <span key={k} className="chip">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>

                  {doiUrl && (
                    <a
                      href={doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost self-start whitespace-nowrap"
                      aria-label={`Read “${pub.title}” on the publisher’s site`}
                    >
                      Read paper <ExternalLink size={15} />
                    </a>
                  )}
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
