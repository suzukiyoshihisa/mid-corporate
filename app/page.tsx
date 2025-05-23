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
