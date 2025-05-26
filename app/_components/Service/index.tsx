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
                WANSIE のコレクションは、
                伝統的なワークウェアやユニフォームの「機能性」と、技術的な仕立ての技法をベースに、
                日本のクラフトマンシップを融合させて再構築しています。

                オンとオフ、仕事と趣味、多様なカルチャーが交差する現代を生きる人のために。
                モード感と機能美を兼ね備えた、デイリーウェアを提案します。
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://www.wansie.tokyo/" variant="arrow">more</ButtonLink>
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
                midがデザインから生産まで手掛けるオリジナルユニフォームは
                店舗や企業の魅力を引き立てる、スタイル提案型のワークウェアを幅広いシーンでご提案可能です。

                きめ細やかなヒアリングを通じてご要望を丁寧に形にし、OEMや小ロットでの生産にも柔軟に対応。
                機能性とデザイン性を兼ね備えた、現場で“本当に使える”ユニフォームをご提案します。
              </p>
              <div className={styles.btnBox}>
                <ButtonLink href="https://wansie.tokyo/uniform/" variant="arrow">more</ButtonLink>
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

        <div className={`${styles.div5} ${styles.special}`}>
          <AnimatedContent delay={200}>
            <div className={`${styles.item} ${styles.specialItem}`}>
              <h3 className={styles.title}>人材派遣事業</h3>
              <div className={styles.itemImg}>
                <Image
                  src="/staff.png"
                  alt="wansie staffing"
                  className={styles.image}
                  width={256}
                  height={144}
                  loading="lazy"
                />
              </div>
              <p className={styles.itemHeading}>最適な出会いを創出する<br />人材派遣事業</p>
              <p className={styles.itemText}>
                WEBマーケティングを活かし、各業界と人材をつなぐマッチングに強みを持つ人材サービスを展開。

                WEB・アパレル・販売・イベント運営をはじめとする現場に精通したスタッフが、即戦力となる人材の確保をサポート。
                企業ごとの課題やニーズに応じた柔軟な人材提案により、現場のクオリティとブランド体験の向上を実現します。
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
