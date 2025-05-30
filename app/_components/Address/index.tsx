'use client';

import styles from "./index.module.css";
import dynamic from 'next/dynamic';
import Profile from '../Profile';

// 遅延読み込み（すべてクライアント限定に）
const AnimatedContent = dynamic(() => import('../AnimatedContent'), { ssr: false });
const YoutubeEmbed = dynamic(() => import('../YoutubeEmbed'), { ssr: false });

export default function Address() {
  return (
    <section className={styles.contents} id="address">
      <div className={styles.profile}>
        <Profile />
      </div>
      <div className={styles.content}>
        <AnimatedContent delay={150}>
          <div className={styles.content1}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Address.</h2>
              <p className={styles.text}>
                〒160-0022<br />
                東京都新宿区新宿5-11-25<br />
                アソルティ新宿五丁目ビル 201<br />
                &gt;&gt;
                <a href="https://www.google.co.jp/maps/dir//%E3%80%92160-0022+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%96%B0%E5%AE%BF%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%92%EF%BC%95/...">
                  アクセスマップ
                </a>
              </p>

              <ul className={styles.list}>
                <li className={styles.item}>
                  [MAIL] info@mid-group.co
                </li>
                <li className={styles.item}>
                  [URL] https://mid-group.co/
                </li>
                <li className={styles.item}>
                  [TEL] 03-6869-7785
                </li>
                <li className={styles.item}>
                  [FAX] 03-6730-2693
                </li>
              </ul>
            </div>
          </div>
        </AnimatedContent>
      </div>
      <div className={styles.content}>
        <div className={styles.iframe}>
          <YoutubeEmbed videoId="_mJO_Kzi84o" title="Wansie uniform" />
        </div>
      </div>
    </section>
  );
}
