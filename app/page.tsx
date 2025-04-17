import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import About from "@/app/_components/About";
import Service from "@/app/_components/Service";
import NewsList from '@/app/_components/NewsList'
import Address from '@/app/_components/Address'
import Clients from '@/app/_components/Clients'

export const revalidate = 60;

export default async function Home() {

  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      <section className={styles.top}>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
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
