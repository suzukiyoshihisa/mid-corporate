'use client';

import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  separator?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  className = '',
  separator = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.textContent = String(from);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const range = to - from;

        const tick = (now: number) => {
          const elapsed = (now - startTime) / (duration * 1000);
          const progress = Math.min(elapsed, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(from + range * eased);
          el.textContent = separator
            ? value.toLocaleString('en-US').replace(/,/g, separator)
            : String(value);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration, separator]);

  return <span className={className} ref={ref} />;
}
