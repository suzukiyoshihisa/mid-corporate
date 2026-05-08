'use client';

import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from '../ButtonLink';
import Date from '../Date';
import styles from './index.module.css';
import AnimatedContent from '../AnimatedContent';
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

  return (
    <div className={`${styles.news} ${layout === 'block' ? styles.block : styles.grid}`}>
      <div className={styles.titleContainer}>
        <AnimatedContent delay={150}>
          <h2 className={styles.playfairTitle}>News</h2>
          <p className={styles.subTitle}>midの最新情報をご紹介</p>
          <div className={styles.titleFooter}>
            <ButtonLink href="/news" variant="normal">
              ALL NEWS ON OUR BLOG
            </ButtonLink>
          </div>
        </AnimatedContent>
      </div>

      <ul className={styles.list}>
        <AnimatedContent delay={50}>
          {news.map((article) => (
            <li key={article.id} className={styles.item}>
              {article.thumbnail ? (
                <Image
                  className={styles.image}
                  src={article.thumbnail.url}
                  alt={article.title}
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                  loading="lazy"
                />
              ) : (
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={IMAGE_SIZES.NO_IMAGE.width}
                  height={IMAGE_SIZES.NO_IMAGE.height}
                  loading="lazy"
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
        </AnimatedContent>
      </ul>
    </div>
  );
}
