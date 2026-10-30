import { motion } from 'framer-motion';
import { leadership } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container-px">
        <SectionHeading
          index="05"
          label="Leadership & Extracurriculars"
          title="Beyond the lab"
          description="Communication, mentorship and community service that shape how I collaborate in research teams."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map(({ icon: Icon, role, org, detail, metric }, i) => (
            <motion.article
              key={`${role}-${org}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover group flex flex-col p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-helix-500/20 to-violet-500/20 text-helix-700 transition-transform group-hover:scale-110 dark:text-helix-300">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-white">{role}</h3>
              <p className="text-sm font-medium text-helix-700 dark:text-helix-400">{org}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{detail}</p>
              {metric && (
                <p className="mt-5 border-t border-ink-200 pt-4 font-mono text-xs font-medium text-ink-700 dark:border-white/[0.07] dark:text-ink-300">
                  {metric}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
