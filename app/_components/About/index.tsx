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
          株式会社mid（ミッド）は、新宿に拠点を置くクリエイティブカンパニー。<br/>自社ブランド「WANSIE（ワンジー）」の企画・製造をはじめ、WEB制作やグラフィックデザイン、人材派遣など、領域を横断した事業を展開しています。
        </p>
        <p className={styles.text}>
          私たちが大切にしているのは、表面的なトレンドに流されることなく、個人や企業が持つ本来の魅力や事業の本質に目を向けること。
          長く愛される価値を築くために、丁寧に言葉を交わしながら、その核を形にしていきます。
        </p>
      </div>
      <div className={styles.animatedFadeIn}>
        <Image
          src="/about-img.jpg"
          alt="About Image"
          className={styles.card}
          width={1920}
          height={1270}
          priority={false}
        />
      </div>
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
    </div>
  );
}
