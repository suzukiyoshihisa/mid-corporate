'use client';

import Image from "next/image";
import styles from "./index.module.css";
import AnimatedHeading from "../AnimatedHeading";
import { IMAGE_SIZES } from "../../_constants/config";

const items = [
  {
    number: '01',
    brand: 'WANSIE',
    title: 'ファッションブランド',
    src: '/service-wansie.webp',
    alt: 'WANSIE',
    text: '伝統的なユニフォームの機能性と日本のクラフトマンシップを融合。現代を生きる人のための機能美とモード感を備えたデイリーウェアを提案します。',
    link: 'https://www.wansie.tokyo/',
    label: 'WANSIEのブランドサイトを見る',
  },
  {
    number: '02',
    brand: 'WANSIE UNIFORM',
    title: 'ユニフォーム事業',
    src: '/service-uniform.webp',
    alt: 'WANSIE UNIFORM',
    text: 'デザインから生産まで一貫対応。スタイル提案型ユニフォームで企業や店舗の魅力を引き出し、小ロットやOEMにも柔軟に対応します。',
    link: 'https://wansie.tokyo/uniform/',
    label: 'WANSIEユニフォームの制作事例を見る',
  },
  {
    number: '03',
    brand: 'WANSIE DESIGN',
    title: 'WEB制作事業',
    src: '/service-web.webp',
    alt: 'WANSIE DESIGN',
    text: 'ホームページ、EC、システム、グラフィックまで対応。ブランディングや運営の実体験をもとに、伝わるWEB制作をサポートします。',
    link: 'https://mid-group.design/',
    label: 'WANSIE DESIGNの制作事例を見る',
  },
  {
    number: '04',
    brand: 'mid staffing',
    title: '人材サービス事業',
    src: '/service-staff.webp',
    alt: 'mid staffing',
    text: 'エンジニアをはじめとするIT人材のマッチングを主軸に、販売・営業分野にも対応。即戦力となる人材を柔軟かつ実務的に提案します。',
    link: 'https://mid-staffing.studio.site/',
    label: 'mid staffingの詳細を見る',
  },
  {
    number: '05',
    brand: 'FOOD & BAR',
    title: '飲食・バー事業',
    src: '/service-bar.webp',
    alt: 'WANSIE旗艦店に併設されたバー',
    text: 'ブランドの世界観をそのまま体験できるバーを運営。服やデザインだけでは伝えきれない価値観を、空間とサービスを通じて届けます。',
    link: 'https://www.instagram.com/wansie_flagshipstore',
    label: '店舗のInstagramを見る',
  },
];

export default function Service() {
  return (
    <section className={styles.service} id="service">
      <div className={styles.inner}>
        <div className={styles.aside}>
          <AnimatedHeading className={styles.sectionTitle}>Our Service</AnimatedHeading>
          <p className={styles.sectionSub}>midの主要サービスをご紹介</p>
        </div>

        <div className={styles.list}>
          {items.map((item, i) => (
            <article
              key={item.number}
              className={styles.item}
              style={{ zIndex: i + 1, "--card-img": `url(${item.src})` } as React.CSSProperties}
            >
              <div className={styles.itemBody}>
                <span className={styles.number}>{item.number}</span>
                <div className={styles.itemHead}>
                  <span className={styles.brand}>{item.brand}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                  <a
                    className={styles.link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{item.label}</span>
                    <span className={styles.linkArrow} aria-hidden="true">→</span>
                  </a>
                </div>
                <div className={styles.itemImg}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className={styles.itemImgSrc}
                    width={IMAGE_SIZES.SERVICE_ITEM.width}
                    height={IMAGE_SIZES.SERVICE_ITEM.height}
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 45vw, 57vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
