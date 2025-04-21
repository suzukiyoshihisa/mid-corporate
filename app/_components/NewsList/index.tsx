
import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.css';
import Category from '../Category';
import Date from '../Date';
import { News } from '@/app/_libs/microcms';
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <div className={styles.news}>
      <div className={styles.titleContainer}>
        <h2 className={styles.playfairTitle}>News</h2>
        <div className={styles.buttonBox}>
          <ButtonLink href="/news">SEE ALL</ButtonLink>
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