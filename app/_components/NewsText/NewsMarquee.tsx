'use client';

import styles from './index.module.css';

type Item = { id: string; title: string; date: string; category: string | null };

const CATEGORY_PALETTE = [
  { backgroundColor: 'rgba(139,114,96,0.10)', borderColor: 'rgba(139,114,96,0.55)', color: '#7a6050' },
  { backgroundColor: 'rgba(60,80,115,0.08)',  borderColor: 'rgba(60,80,115,0.45)',  color: '#3c5073' },
  { backgroundColor: 'rgba(72,108,88,0.08)',  borderColor: 'rgba(72,108,88,0.45)',  color: '#486c58' },
  { backgroundColor: 'rgba(108,72,100,0.08)', borderColor: 'rgba(108,72,100,0.45)', color: '#6c4864' },
  { backgroundColor: 'rgba(90,90,60,0.08)',   borderColor: 'rgba(90,90,60,0.45)',   color: '#5a5a3c' },
];

function getCategoryStyle(name: string) {
  const hash = name.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  return CATEGORY_PALETTE[hash % CATEGORY_PALETTE.length];
}

export default function NewsMarquee({ items }: { items: Item[] }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={styles.marqueeOuter}>
      <div className={styles.marqueeInner}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.marqueeText}>
            {item.category && (
              <span className={styles.marqueeTag} style={getCategoryStyle(item.category)}>{item.category}</span>
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
