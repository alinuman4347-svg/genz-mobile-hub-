import { useEffect, useRef, useState } from 'react';

export default function useCounter(target, { prefix = '', suffix = '', duration = 1500 } = {}) {
  const ref = useRef(null);
  const [text, setText] = useState(`${prefix}0${suffix}`);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setText(`${prefix}${Math.round(target * eased)}${suffix}`);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, prefix, suffix, duration]);

  return { ref, text };
}
