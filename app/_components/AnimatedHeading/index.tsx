'use client';

import { useEffect, useRef, ElementType } from 'react';
import gsap from 'gsap';
import styles from './index.module.css';

type Props = {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function AnimatedHeading({ as: Tag = 'h2', className, children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const heading = wrap?.firstElementChild;
    if (!wrap || !heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.from(heading, {
          yPercent: 110,
          duration: 0.85,
          ease: 'power3.out',
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <Tag className={className}>{children}</Tag>
    </div>
  );
}
