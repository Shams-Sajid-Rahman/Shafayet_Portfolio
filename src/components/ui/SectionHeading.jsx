import Reveal from './Reveal';

/**
 * Consistent section header: mono index label, title and optional description.
 */
export default function SectionHeading({ index, label, title, description, align = 'left' }) {
  const centered = align === 'center';
  return (
    <Reveal className={`mb-12 sm:mb-16 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
      <p className={`mono-label flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="text-ink-400 dark:text-ink-500">{index}</span>
        <span className="h-px w-8 bg-helix-500/60" />
        {label}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
