import Link from 'next/link';
import { getNewsList } from '../../_libs/microcms';
import Date from '../Date';
import styles from './index.module.css';

export default async function LatestNewsText() {
  const { contents } = await getNewsList({ limit: 1 });
  const latest = contents[0];

  if (!latest) return null;

  return (   
    <div className={styles.wrapper}>
      <Link href={`/news/${latest.id}`} className={styles.link}>
          <span className={styles.label}>NEW POST</span>
          <span className={styles.date}>
          <Date date={latest.publishedAt ?? latest.createdAt} />
        </span>
        <span className={styles.title}>{latest.title}</span>
      </Link>
    </div>
  );
}
