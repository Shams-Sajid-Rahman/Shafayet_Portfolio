import { Check, Copy, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Contact() {
  const { copied, copy } = useCopyToClipboard();

  const contactRows = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
    { icon: MapPin, label: 'Location', value: profile.location },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeading
          index="06"
          label="Contact"
          title={
            <>
              Let’s build the <span className="text-gradient">next experiment</span> together.
            </>
          }
          description="Open to R&D positions, research assistantships and Master’s opportunities in biochemistry, pharmacology and computational drug discovery."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Copy-to-clipboard email */}
          <Reveal className="card relative flex flex-col justify-between overflow-hidden p-6 sm:p-8">
            <div>
              <p className="mono-label">Primary contact</p>
              <p className="mt-3 break-all font-display text-2xl font-semibold text-ink-900 dark:text-white sm:text-3xl">
                {profile.email}
              </p>
              <p className="mt-3 text-sm text-ink-600 dark:text-ink-400">
                The best way to reach me about roles, collaborations or study opportunities.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <button type="button" onClick={() => copy(profile.email)} className="btn-primary" aria-live="polite">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                <Mail size={16} /> Open mail
              </a>
            </div>
            <Mail
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 text-helix-500/[0.06]"
            />
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.1}>
            <ul className="card divide-y divide-ink-200 dark:divide-white/[0.07]">
              {contactRows.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-helix-500/10 text-helix-600 dark:text-helix-300">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-ink-500">{label}</span>
                      <span className="block truncate text-sm font-medium text-ink-800 dark:text-ink-100">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center gap-4 p-5 transition-colors hover:bg-helix-500/5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
