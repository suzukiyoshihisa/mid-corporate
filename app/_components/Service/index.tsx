import Image from "next/image";
import styles from "./index.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import AnimatedContent from '@/app/_components/AnimatedContent';

export default function Service() {
  return (
    <section className={styles.service} id="service">
      <div className={styles.contents}>
        <div className={styles.serviceTextContainer}>
          <h2 className={styles.playfairTitle}>Our Service</h2>
          <p className={styles.subTitle}>midの主要サービスをご紹介</p>
        </div>

        <AnimatedContent delay={0}>
          <div className={styles.item}>
            <h3 className={styles.title}>アパレル事業 1</h3>
            <div className={styles.itemImg}>
              <Image
                src="/service-area-logo01.png"
                alt="wansie"
                className={styles.image}
                width={100}
                height={11}
                style={{ aspectRatio: 258 / 30 }}
                loading="lazy"
              />
            </div>
            <p className={styles.itemHeading}>
              ジャンプスーツを中心としたワークウェア・ユニフォームブランド
            </p>
            <p className={styles.itemText}>
              WANSIEはジャンプスーツ、オーバーオール、エプロンをベースとしたワークウェアのスペシャリティブランドです。実用服にファッション性・機能美を取り入れ、キャンプ、ガーデニング、農業、DIYなどのアウトドア・ワークシーンから、街でも着られるタウンユースまで幅広くご提案。
            </p>
            <div className={styles.btnBox}>
              <ButtonLink href="https://www.wansie.tokyo/">more</ButtonLink>
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent delay={250}>
          <div className={styles.item}>
            <h3 className={styles.title}>アパレル事業 2</h3>
            <div className={styles.itemImg}>
              <Image
                src="/uniform-img.png"
                alt="wansie uniform"
                className={styles.image}
                width={101}
                height={36}
                style={{ aspectRatio: "187 / 67" }}
                loading="lazy"
              />
            </div>
            <p className={styles.itemHeading}>
              店舗やオフィスのオリジナルユニフォーム制作
            </p>
            <p className={styles.itemText}>
              WANSIEがデザインから生産まで手掛けるオリジナルユニフォームは様々なシーンでのスタイル提案が可能です。きめ細かいサービスでクライアント様の要望を形にし、OEMや小ロット生産も対応。店舗や企業の魅力が引き立つワークスタイルを実現。
            </p>
            <div className={styles.btnBox}>
              <ButtonLink href="https://wansie.tokyo/uniform/">more</ButtonLink>
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent delay={100}>
          <div className={`${styles.item} ${styles.specialItem}`}>
            <h3 className={styles.title}>WEB事業</h3>
            <div className={styles.itemImg}>
              <Image
                src="/service-area-logo03.png"
                alt="wansie design"
                className={styles.image}
                width={258}
                height={106}
                style={{ aspectRatio: "258 / 106" }}
                loading="lazy"
              />
            </div>
            <p className={styles.itemHeading}>企画・制作・運用を<br/>オールインワン</p>
            <p className={styles.itemText}>
              ホームページ、EC、システム開発、グラフィックデザインなどの企画制作・運用サービスにおいて国内外の制作実績が多数ございます。インバウンド対策、海外クライアントとお取引のある企業様のサポート、外資系企業様での日々のサイト運用など多岐に渡る業務を遂行。
            </p>
            <div className={styles.btnBox}>
              <ButtonLink href="https://mid-group.design/">more</ButtonLink>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
