'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './index.module.css';

// 遅延読み込みに変更
const AnimatedContent = dynamic(() => import('../AnimatedContent'), { ssr: false });
const GridMotion = dynamic(() => import('../GridMotion'), { ssr: false });

const items = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://wansie.tokyo/shared/img/collections/2025-fw/img020.jpg',
  'https://wansie.tokyo/uniform/wp/wp-content/themes/wansie/assets/img/top/hero-right.jpg',
  'https://wansie.tokyo/shared/img/collections/2025-fw/img020.jpg',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://wansie.tokyo/uniform/wp/wp-content/themes/wansie/assets/img/top/hero-left.jp',
  'https://wansie.tokyo/shared/img/shop-info/WANSIE_SHOP_ILLUST.webp',
  <div key='jsx-item-2'>
    <Image
      src="/about__sns-top.png"
      alt="WANSIE 店舗イラスト"
      className={styles.image}
      width={154}
      height={153}
      loading="lazy"
    />
    <p className={styles.name}>WANSIE FLAGSHIP STORE </p>
  </div>,
  'https://wansie.tokyo/uniform/wp/wp-content/themes/wansie/assets/img/top/hero-left.jpg',
  'https://wansie.tokyo/shared/img/shop-info/WANSIE_SHOP_ILLUST.webp',
  'https://wansie.tokyo/uniform/wp/wp-content/themes/wansie/assets/img/top/hero-left.jpg',
  <div key='jsx-item-3'>
    <Image
      src="/about__sns-top.png"
      alt="WANSIE 店舗イラスト"
      className={styles.image}
      width={154}
      height={153}
      loading="lazy"
    />
    <p className={styles.name}>WANSIE FLAGSHIP STORE </p>
  </div>,
];

export default function About() {
  return (
    <div className={styles.inner} id="about">
      <div className={styles.container}>
        <AnimatedContent delay={0}>
          <h2 className={styles.title}>About Us.</h2>
          <p className={styles.text}>
            株式会社mid（ミッド）は、新宿に拠点を置くクリエイティブカンパニー。<br />
            自社ブランド「WANSIE（ワンジー）」の企画・製造をはじめ、WEB制作やグラフィックデザイン、人材派遣など、領域を横断した事業を展開しています。
          </p>
          <p className={styles.text}>
            私たちが大切にしているのは、表面的なトレンドに流されることなく、個人や企業が持つ本来の魅力や事業の本質に目を向けること。
            長く愛される価値を築くために、丁寧に言葉を交わしながら、その核を形にしていきます。
          </p>
        </AnimatedContent>
      </div>

      <div className={styles.gridContainer}>
        <AnimatedContent delay={100}>
          <GridMotion items={items} />
        </AnimatedContent>
      </div>

      <AnimatedContent delay={350}>
        <div className={styles.snsContainer}>
          <div className={styles.snsTop}>
            <div className={styles.snsTopImg}>
              <Image
                src="/about__sns-top.png"
                alt="SNS Top Image"
                className={styles.image}
                width={154}
                height={153}
                loading="lazy"
              />
            </div>
          </div>
          <p className={styles.playfairTitle}>sns.</p>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="https://www.facebook.com/wansietokyo/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 .003.594.003 1.326v21.348C.003 23.406.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.127c.728 0 1.322-.594 1.322-1.326V1.326C24 .594 23.406 0 22.675 0z" />
                </svg>
                <p className={styles.snsBottom}>wansietokyo</p>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="https://www.instagram.com/wansie_official/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6S371.7 1.7 336 0C300.3-1.7 288 0 224 0S147.7-1.7 112 0C76.3 1.7 44.7 9.9 18.4 36.2S1.7 76.3 0 112C-1.7 147.7 0 160 0 224s-1.7 76.3 0 112c1.7 35.7 9.9 67.3 36.2 93.6S76.3 510.3 112 512c35.7 1.7 48 0 112 0s76.3 1.7 112 0c35.7-1.7 67.3-9.9 93.6-36.2s34.5-57.9 36.2-93.6c1.7-35.7 0-48 0-112s1.7-76.3 0-112zM398.8 388c-7.8 19.6-22.8 34.6-42.4 42.4-29.4 11.7-99.2 9-132.4 9s-103 .3-132.4-9c-19.6-7.8-34.6-22.8-42.4-42.4-11.7-29.4-9-99.2-9-132.4s-.3-103 9-132.4c7.8-19.6 22.8-34.6 42.4-42.4 29.4-11.7 99.2-9 132.4-9s103-.3 132.4 9c19.6 7.8 34.6 22.8 42.4 42.4 11.7 29.4 9 99.2 9 132.4s.3 103-9 132.4z"/>
                </svg>
                <p className={styles.snsBottom}>wansie_official</p>
              </Link>
            </li>
          </ul>
        </div>
      </AnimatedContent>
    </div>
  );
}
