import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import LatestNewsText from './_components/NewsText'
import About from './_components/About'
import Service from './_components/Service'
import NewsList from './_components/NewsList'
import Address from './_components/Address'
import Clients from './_components/Clients'

export const revalidate = 60;

export default async function Home() {

  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      <section className={styles.top}>
        <Image
          className={styles.bgimg}
          src="/img-mv.webp"
          alt="株式会社mid メインビジュアル"
          width={1600}
          height={400}
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoKAAoABABoJZwC7ADdF78MAAD+7N0hQB53wxKa2Gp6NJgR6TfAGrCwAXjeQAAA"
        />
        <Image
          className={styles.bgimgSp}
          src="/img-mv-sp.webp"
          alt="企業ビルの外観SP"
          width={800}
          height={1066}
          quality={65}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoKAAoABABoJZwC7ADdF78MAAD+7N0hQB53wxKa2Gp6NJgR6TfAGrCwAXjeQAAA"
        />
      </section>
      <section className={styles.newsText}>
        <LatestNewsText />
      </section>
      <section className={styles.about}>
        <About />
      </section>
      <section className={styles.service}>
        <Service />
      </section>
      <section className={styles.news}>
        <NewsList news={data.contents} />
      </section>
      <section className={styles.information}>
        <Address />
      </section>
      <section className={styles.clients}>
        <Clients />
      </section>
    </>
  );
}
