import { useEffect, useRef } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(hover:hover) and (min-width:961px)').matches) return;

    let raf = null;
    let x = 0;
    let y = 0;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        el.style.transform = `translate(${x}px,${y}px)`;
        el.style.opacity = '1';
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" />;
}
