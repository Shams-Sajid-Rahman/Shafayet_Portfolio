import { ArrowUp, Dna, Linkedin, Mail, Phone } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
    { href: profile.phoneHref, icon: Phone, label: 'Phone' },
  ];

  return (
    <footer className="border-t border-ink-200 py-10 dark:border-white/[0.06]">
      <div className="container-px flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-ink-900 dark:text-white">
            <Dna size={18} className="text-helix-500" /> {profile.shortName}
          </a>
          <p className="mt-2 text-sm text-ink-500">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-ink-600 transition-colors hover:text-helix-600 dark:text-ink-400 dark:hover:text-helix-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="icon-btn h-9 w-9 rounded-lg"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="icon-btn ml-2 h-9 w-9 rounded-lg"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
