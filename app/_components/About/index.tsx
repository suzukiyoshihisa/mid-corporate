import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import GridMotion from '@/app/_components/GridMotion';
import SpotlightCard from '@/app/_components/SpotlightCard';
import styles from './index.module.css';
import AnimatedContent from '@/app/_components/AnimatedContent';
  
// note: you'll need to make sure the parent container of this component is sized properly
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
      alt="Custom Image"
      className={styles.image}
      width={154}
      height={153}
      priority={false}
    />
    <p className={styles.name}>WANSIE FLAGSHIP STORE </p>
  </div>,
  'https://wansie.tokyo/uniform/wp/wp-content/themes/wansie/assets/img/top/hero-left.jpg',
  'https://wansie.tokyo/shared/img/shop-info/WANSIE_SHOP_ILLUST.webp',
  'https://wansie.tokyo/uniform/wp/wp-content/themes/wansie/assets/img/top/hero-left.jpg',
  <div key='jsx-item-2'>
    <Image
      src="/about__sns-top.png"
      alt="Custom Image"
      className={styles.image}
      width={154}
      height={153}
      priority={false}
    />
    <p className={styles.name}>WANSIE FLAGSHIP STORE </p>
  </div>,
  // Add more items as needed
];

export default function About() {
  return (
    <div className={styles.inner} id="about">
      <div className={styles.container}>
        <AnimatedContent delay={0}>
          <h2 className={styles.title}>About Us.</h2>
          <p className={styles.text}>
            株式会社mid（ミッド）は、新宿に拠点を置くクリエイティブカンパニー。<br/>自社ブランド「WANSIE（ワンジー）」の企画・製造をはじめ、WEB制作やグラフィックデザイン、人材派遣など、領域を横断した事業を展開しています。
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
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
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
                  priority={false}
                />
              </div>
            </div>
            <p className={styles.playfairTitle}>sns.</p>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="https://www.facebook.com/wansietokyo/">
                  <div className={styles.circle}><FaFacebookF /></div>
                  <p className={styles.snsBottom}>wansietokyo</p>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="https://www.instagram.com/wansie_official/">
                  <div className={styles.circle}><FaInstagram /></div>
                  <p className={styles.snsBottom}>wansie_official</p>
                </Link>
              </li>
            </ul>
          </div>
        </AnimatedContent>
      </SpotlightCard>
    </div>
  );
}
