import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from './index.module.css';

export default function About() {
  return (
    <div className={styles.inner}>
      <div className={`${styles.container} ${styles.animatedFadeIn} ${styles.delay0}`}>
        <h2 className={styles.title}>About Us.</h2>
        <p className={styles.text}>
          株式会社mid（ミッド）はアパレル/ウェブ・グラフィック/人材派遣を運営
        </p>
        <p className={styles.text}>
          個人や企業の魅力・事業の本質を見出し、長期的な視点で企業の価値を高めるサポートをしております。
        </p>
      </div>
      <div className={`${styles.animatedFadeIn} ${styles.delay1}`}>
        <Image
          src="/about-img.jpg"
          alt="About Image"
          className={styles.card}
          width={1920}
          height={1270}
          priority={false}
        />
      </div>
      <div className={`${styles.snsContainer} ${styles.animatedFadeIn} ${styles.delay2}`}>
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
    </div>
  );
}
