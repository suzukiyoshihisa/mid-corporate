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

        {/* アパレル事業1 */}
        <div className={styles.div2}>
          <AnimatedContent delay={50}>
            <div className={styles.item}>
              <h3 className={styles.title}>アパレル事業 1</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/wansie.png"
                  alt="wansie"
                  className={styles.image}
                  width={256}
                  height={144}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>
                midの運営する<br />ワークウェアブランド
              </p>
              <p className={styles.itemText}>
                WANSIEは伝統的なワークウェアやユニフォームの機能性と技術的な仕立ての技法をベースとした...
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://www.wansie.tokyo/" variant="arrow">more</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* アパレル事業2 */}
        <div className={styles.div3}>
          <AnimatedContent delay={100}>
            <div className={styles.item}>
              <h3 className={styles.title}>アパレル事業 2</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/uniform.jpg"
                  alt="wansie"
                  className={styles.image}
                  width={256}
                  height={144}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>
                店舗やオフィスの<br />オリジナルユニフォーム
              </p>
              <p className={styles.itemText}>
                WANSIEがデザインから生産まで手掛けるオリジナルユニフォームは様々なシーンでの...
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://wansie.tokyo/uniform/" variant="arrow">more</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* WEB制作 */}
        <div className={`${styles.div4} ${styles.special}`}>
          <AnimatedContent delay={150}>
            <div className={`${styles.item} ${styles.specialItem}`}>
              <h3 className={styles.title}>WEB制作事業</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/wansie.png"
                  alt="wansie"
                  className={styles.image}
                  width={256}
                  height={144}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>企画・制作・運用を<br />オールインワン</p>
              <p className={styles.itemText}>
                ホームページ、EC、システム開発、グラフィックデザインなどの企画制作・運用サービスにおいて...
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://mid-group.design/" variant="arrow_white">more</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* 人材派遣 */}
        <div className={`${styles.div5} ${styles.special}`}>
          <AnimatedContent delay={200}>
            <div className={`${styles.item} ${styles.specialItem}`}>
              <h3 className={styles.title}>人材派遣事業</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/staff.png"
                  alt="wansie"
                  className={styles.image}
                  width={256}
                  height={144}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>最適な出会いを創出する<br />人材派遣事業</p>
              <p className={styles.itemText}>
                WEBマーケティングを活かし、各業界と人材をつなぐマッチングに強みを持つ人材会社です...
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://mid-group.design/" variant="arrow_white">more</ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
