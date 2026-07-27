'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './index.module.css';

const lines = ['Be the', 'Creative', 'Engine.'];

export default function HeroHeading() {
  const lineEls = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineEls.current, {
        yPercent: 110,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.13,
        delay: 0.15,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <h1 className={styles.heading}>
      {lines.map((line, i) => (
        <span key={i} className={styles.lineWrap}>
          <span
            ref={(el) => { lineEls.current[i] = el; }}
            className={styles.line}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
