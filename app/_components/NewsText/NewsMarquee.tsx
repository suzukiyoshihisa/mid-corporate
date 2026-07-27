'use client';

import styles from './index.module.css';

type Item = { id: string; title: string; date: string; category: string | null };

export default function NewsMarquee({ items }: { items: Item[] }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.marqueeOuter}>
      <div className={styles.marqueeInner}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.marqueeText}>
            {item.category && (
              <span className={styles.marqueeTag}>{item.category}</span>
            )}
            <span className={styles.marqueeDate}>{item.date}</span>
            {item.title}
            <span className={styles.marqueeSep}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
