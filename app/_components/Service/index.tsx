'use client';

import Image from "next/image";
import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";
import AnimatedContent from "../AnimatedContent";
import { IMAGE_SIZES } from "../../_constants/config";

const items = [
  {
    number: '01',
    title: 'ファッションブランド',
    src: '/service-wansie.webp',
    alt: 'WANSIE',
    text: '伝統的なユニフォームの機能性と日本のクラフトマンシップを融合。現代を生きる人のための機能美とモード感を備えたデイリーウェアを提案します。',
    link: 'https://www.wansie.tokyo/',
    label: 'ブランドの詳細を見る',
    variant: 'arrow' as const,
  },
  {
    number: '02',
    title: 'ユニフォーム・業務ウェア',
    src: '/service-uniform.webp',
    alt: 'WANSIE UNIFORM',
    text: 'デザインから生産まで一貫対応。スタイル提案型ユニフォームで企業や店舗の魅力を引き出し、小ロットやOEMにも柔軟に対応します。',
    link: 'https://wansie.tokyo/uniform/',
    label: 'ユニフォーム事例を見る',
    variant: 'arrow' as const,
  },
  {
    number: '03',
    title: 'デザイン・Web制作',
    src: '/service-web.webp',
    alt: 'WANSIE DESIGN',
    text: 'ホームページ、EC、システム、グラフィックまで対応。ブランディングや運営の実体験をもとに、伝わるWEB制作をサポートします。',
    link: 'https://mid-group.design/',
    label: 'WEB制作サービスを見る',
    variant: 'arrow' as const,
  },
  {
    number: '04',
    title: '人材サービス・スタッフィング',
    src: '/service-staff.webp',
    alt: 'mid staffing',
    text: 'WEBと現場力を活かした即戦力マッチング。アパレル・販売・イベント分野などに、柔軟かつ実務的な人材を提案します。',
    link: 'https://mid-staffing.studio.site/',
    label: '人材派遣の詳細を見る',
    variant: 'arrow' as const,
  },
  {
    number: '05',
    title: '飲食・バー',
    src: '/service-bar.svg',
    alt: 'mid bar',
    text: 'ブランドの世界観をそのまま体験できるバーを運営。服やデザインだけでは伝えきれない価値観を、空間とサービスを通じて届けます。',
    link: 'https://www.instagram.com/wansie_flagshipstore',
    label: '店舗のInstagramを見る',
    variant: 'arrow' as const,
  },
];

export default function Service() {
  return (
    <section className={styles.service} id="service">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Our Service</h2>
        <p className={styles.sectionSub}>midの主要サービスをご紹介</p>
      </div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <AnimatedContent key={item.number} delay={i * 60}>
            <div className={styles.item}>
              <div className={styles.itemImg}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={styles.itemImgSrc}
                  width={IMAGE_SIZES.SERVICE_ITEM.width}
                  height={IMAGE_SIZES.SERVICE_ITEM.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
              <div className={styles.btnBox}>
                <ButtonLink href={item.link} variant={item.variant}>
                  {item.label}
                </ButtonLink>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
