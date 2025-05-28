'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";

// 遅延読み込みで初期負荷を軽減
const AnimatedContent = dynamic(() => import("../AnimatedContent"), { ssr: false });

export default function Service() {
  return (
    <section className={styles.service} id="service">
      <div className={styles.contents}>
        <div className={styles.div1}>
          <div className={`${styles.serviceTextContainer} ${styles.parallax}`}>
            <AnimatedContent delay={0}>
              <h2 className={styles.playfairTitle}>Our Service</h2>
              <p className={styles.subTitle}>midの主要サービスをご紹介</p>
            </AnimatedContent>
          </div>
        </div>

        <div className={styles.div2}>
          <AnimatedContent delay={50}>
            <div className={styles.item}>
              <h3 className={styles.title}>アパレル事業 1</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/service-wansie.webp"
                  alt="wansie"
                  className={styles.image}
                  width={330}
                  height={215}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>
                midの運営する<br />ワークウェアブランド
              </p>
              <p className={styles.itemText}>
                伝統的なユニフォームの機能性と日本のクラフトマンシップを融合。
                オン・オフを問わず、現代を生きる人のための機能美とモード感を備えたデイリーウェアを提案します。
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://www.wansie.tokyo/" variant="arrow">ブランドの詳細を見る</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className={styles.div3}>
          <AnimatedContent delay={100}>
            <div className={styles.item}>
              <h3 className={styles.title}>アパレル事業 2</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/service-uniform.webp"
                  alt="wansie"
                  className={styles.image}
                  width={330}
                  height={215}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>
                店舗やオフィスの<br />オリジナルユニフォーム
              </p>
              <p className={styles.itemText}>
                デザインから生産まで一貫対応。
                スタイル提案型ユニフォームで企業や店舗の魅力を引き出し、小ロットやOEMにも柔軟に対応します。
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://wansie.tokyo/uniform/" variant="arrow">ユニフォーム事例を見る</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className={`${styles.div4} ${styles.special}`}>
          <AnimatedContent delay={150}>
            <div className={`${styles.item} ${styles.specialItem}`}>
              <h3 className={styles.title}>WEB制作事業</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/service-web.webp"
                  alt="wansie"
                  className={styles.image}
                  width={330}
                  height={215}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>企画・制作・運用を<br />オールインワン</p>
              <p className={styles.itemText}>
                ホームページ、EC、システム、グラフィックまで対応。
                ブランディングや運営の実体験をもとに、伝わるWEB制作をサポートします。
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://mid-group.design/" variant="arrow_white">WEB制作サービスを見る</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <div className={`${styles.div5} ${styles.special}`}>
          <AnimatedContent delay={200}>
            <div className={`${styles.item} ${styles.specialItem}`}>
              <h3 className={styles.title}>人材派遣事業</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/service-staff.webp"
                  alt="wansie staffing"
                  className={styles.image}
                  width={330}
                  height={215}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>最適な出会いを創出する<br />人材派遣事業</p>
              <p className={styles.itemText}>
                WEBと現場力を活かした即戦力マッチング。
                アパレル・販売・イベント分野などに、柔軟かつ実務的な人材を提案します。
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://mid-staffing.studio.site/" variant="arrow_white">人材派遣の詳細を見る</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
