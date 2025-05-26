'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './index.module.css';

// 遅延読み込み
const AnimatedContent = dynamic(() => import('../AnimatedContent'), { ssr: false });
const GridMotion = dynamic(() => import('../GridMotion'), { ssr: false });

export type GridItem = {
  type: 'image' | 'label';
  src?: string;
  alt?: string;
  label?: string;
};

export const items: GridItem[] = [
  { type: 'image', src: '/grid-wansie01.webp', alt: 'WANSIE Collection 1' },
  { type: 'image', src: '/gird-uniform.webp', alt: 'Hero Right' },
  { type: 'image', src: '/grid-wansie02.webp', alt: 'WANSIE Collection 2' },
  { type: 'image', src: '/grid-shop.webp', alt: 'Unsplash 2' },
  { type: 'image', src: '/grid-image.webp', alt: 'Hero Left' },
  { type: 'image', src: '/grid-wansie02.webp', alt: 'Hero Left 2' },
  { type: 'image', src: '/gird-uniform.webp', alt: 'Shop Illustration 2' },
  { type: 'image', src: '/grid-wansie01.webp', alt: 'Hero Left 3' },
  { type: 'image', src: '/grid-image.webp', alt: 'Unsplash 1' },
  { type: 'image', src: '/grid-wansie02.webp', alt: 'WANSIE Collection 1' },
  { type: 'image', src: '/gird-uniform.webp', alt: 'Hero Right' },
  { type: 'image', src: '/grid-wansie01.webp', alt: 'WANSIE Collection 2' },
  { type: 'image', src: '/grid-shop.webp', alt: 'Unsplash 2' },
  { type: 'image', src: '/grid-image.webp', alt: 'Hero Left' },
  { type: 'image', src: '/grid-shop.webp', alt: 'Shop Illustration' },
  { type: 'image', src: '/grid-wansie02.webp', alt: 'Hero Left 2' },
  { type: 'image', src: '/gird-uniform.webp', alt: 'Shop Illustration 2' },
  { type: 'image', src: '/grid-wansie01.webp', alt: 'Hero Left 3' },
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 .003.594.003 1.326v21.348C.003 23.406.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.127c.728 0 1.322-.594 1.322-1.326V1.326C24 .594 23.406 0 22.675 0z" />
                </svg>
                <p className={styles.snsBottom}>wansietokyo</p>
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="https://www.instagram.com/wansie_official/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
                <p className={styles.snsBottom}>wansie_official</p>
              </Link>
            </li>
          </ul>
        </div>
      </AnimatedContent>
    </div>
  );
}
