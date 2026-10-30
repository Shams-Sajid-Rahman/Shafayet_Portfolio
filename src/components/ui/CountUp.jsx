import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 * `value` is a string so the number of decimals is preserved ("3.76" → 2 dp).
 */
export default function CountUp({ value, duration = 1.8, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  const target = parseFloat(value);
  const decimals = (String(value).split('.')[1] || '').length;
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setDisplay(target.toFixed(decimals));
      return undefined;
    }
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target, decimals, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={String(value)}>
      {display}
    </span>
  );
}
