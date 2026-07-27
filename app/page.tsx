import styles from "./page.module.css";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import LatestNewsText from './_components/NewsText';
import About from './_components/About';
import Service from './_components/Service';
import NewsList from './_components/NewsList';
import Address from './_components/Address';
import ButtonLink from './_components/ButtonLink';
import HeroHeading from './_components/HeroHeading';

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      <section className={styles.top}>
        <div className={styles.heroLeft}>
          <HeroHeading />
          <p className={styles.heroSub}>
            表層を超えて、本質へ。<br/>
            ファッション、ユニフォーム、Web、人材、そして飲食。<br/>
            midは、企業やブランドの表現と成長を支える<br/>
            クリエイティブカンパニーです。
          </p>
          <div className={styles.heroCta}>
            <ButtonLink href="#service" variant="filled_black">
              OUR SERVICE →
            </ButtonLink>
            <ButtonLink href="#footer" variant="outline_black">
              CONTACT →
            </ButtonLink>
          </div>
        </div>

        <div className={styles.heroRight}>
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-v3.mp4" type="video/mp4" />
          </video>
        </div>
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
    </>
  );
}
