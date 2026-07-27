'use client';

import Link from 'next/link';
import Image from 'next/image';
import Date from '../Date';
import styles from './index.module.css';
import AnimatedContent from '../AnimatedContent';
import AnimatedHeading from '../AnimatedHeading';
import { News } from '../../_libs/microcms';
import { IMAGE_SIZES } from '../../_constants/config';

type Props = {
  news: News[];
  layout?: 'grid' | 'block';
};

export default function NewsList({ news, layout = 'grid' }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  if (layout === 'block') {
    return (
      <div className={styles.block}>
        {news.map((article) => (
          <Link key={article.id} href={`/news/${article.id}`} className={styles.blockItem}>
            {article.thumbnail ? (
              <Image
                className={styles.blockThumb}
                src={article.thumbnail.url}
                alt={article.title}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
                loading="lazy"
              />
            ) : (
              <Image
                className={styles.blockThumb}
                src="/no-image.png"
                alt="No Image"
                width={IMAGE_SIZES.NO_IMAGE.width}
                height={IMAGE_SIZES.NO_IMAGE.height}
                loading="lazy"
              />
            )}
            <div className={styles.blockBody}>
              <p className={styles.date}><Date date={article.publishedAt ?? article.createdAt} /></p>
              <p className={styles.category}>{article.category?.name}</p>
              <p className={styles.articleTitle}>{article.title}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <AnimatedContent delay={0}>
          <AnimatedHeading className={styles.sectionTitle}>News</AnimatedHeading>
          <p className={styles.sectionSub}>midの最新情報</p>
          <Link href="/news" className={styles.allLink}>ALL NEWS →</Link>
        </AnimatedContent>
      </div>

      <ul className={styles.grid}>
        {news.map((article, i) => (
          <li key={article.id} className={styles.cardWrapper}>
            <AnimatedContent delay={i * 60}>
              <Link href={`/news/${article.id}`} className={styles.card}>
                <div className={styles.thumbnail}>
                  {article.thumbnail ? (
                    <Image
                      fill
                      className={styles.thumbImg}
                      src={article.thumbnail.url}
                      alt={article.title}
                      sizes="(max-width: 640px) 100vw, 25vw"
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      fill
                      className={styles.thumbImg}
                      src="/no-image.png"
                      alt="No Image"
                      sizes="(max-width: 640px) 100vw, 25vw"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.date}><Date date={article.publishedAt ?? article.createdAt} /></p>
                  {article.category && (
                    <p className={styles.category}>{article.category.name}</p>
                  )}
                  <p className={styles.articleTitle}>{article.title}</p>
                  <span className={styles.arrow}>→</span>
                </div>
              </Link>
            </AnimatedContent>
          </li>
        ))}
      </ul>
    </div>
  );
}
