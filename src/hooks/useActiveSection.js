import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view so the navbar
 * can highlight the matching link (scroll-spy).
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A section is "active" when it crosses the upper-middle band of the viewport
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
