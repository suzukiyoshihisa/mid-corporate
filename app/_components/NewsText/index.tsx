import Link from 'next/link';
import { getNewsList } from '../../_libs/microcms';
import { formatDate } from '../../_libs/utils';
import styles from './index.module.css';
import NewsMarquee from './NewsMarquee';

export default async function LatestNewsText() {
  const { contents } = await getNewsList({ limit: 3 });

  if (!contents.length) return null;

  const items = contents.map((post) => ({
    id: post.id,
    title: post.title,
    date: formatDate(post.publishedAt ?? post.createdAt),
    category: post.category?.name ?? null,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>NEWS</div>
      <NewsMarquee items={items} />
    </div>
  );
}
