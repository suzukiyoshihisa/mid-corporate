'use client';

import Link from 'next/link';
import Image from 'next/image';
import Date from '../Date';
import styles from './index.module.css';
import AnimatedContent from '../AnimatedContent';
import AnimatedHeading from '../AnimatedHeading';
import { News } from '../../_libs/microcms';
import { IMAGE_SIZES } from '../../_constants/config';

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
            <div className={styles.blockMeta}>
              {article.category?.name && (
                <span className={styles.blockCategory} style={getCategoryStyle(article.category.name)}>{article.category.name}</span>
              )}
              <span className={styles.blockDate}><Date date={article.publishedAt ?? article.createdAt} /></span>
            </div>
            <p className={styles.blockTitle}>{article.title}</p>
            <span className={styles.blockArrow}>→</span>
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
                    <p className={styles.category} style={getCategoryStyle(article.category.name)}>{article.category.name}</p>
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
