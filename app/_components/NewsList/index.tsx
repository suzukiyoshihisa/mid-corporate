import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from '@/app/_components/ButtonLink';

import styles from './index.module.css';
import Date from '../Date';
import { News } from '@/app/_libs/microcms';

type Props = {
  news: News[];
  layout?: 'grid' | 'block'; // ★追加
};

export default function NewsList({ news, layout = 'grid' }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <div className={`${styles.news} ${layout === 'block' ? styles.block : styles.grid}`}>
      <div className={styles.titleContainer}>
        <h2 className={styles.playfairTitle}>News</h2>
        <p className={styles.subTitle}>midの最新情報をご紹介</p>
        <div className={styles.titleFooter}>
          <ButtonLink href="/news" variant="normal">ALL NEWS ON OUR BLOG</ButtonLink>
        </div>
      </div>
      <ul className={styles.list}>
        {news.map((article) => (
          <li key={article.id} className={styles.item}>
            {article.thumbnail ? (
              <Image
                className={styles.image}
                src={article.thumbnail.url}
                alt=""
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <Link href={`/news/${article.id}`} className={styles.link}>
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Date date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
