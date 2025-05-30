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
        <div className={styles.label}>NEW POST</div>
        <div className={styles.postData}>
          <div className={styles.date}><Date date={latest.publishedAt ?? latest.createdAt} /></div>
          <div className={styles.title}>{latest.title}</div>
        </div>
      </Link>
    </div>
  );
}
