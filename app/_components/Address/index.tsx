'use client';

import styles from "./index.module.css";
import dynamic from 'next/dynamic';
import Profile from '../Profile';
import AnimatedContent from '../AnimatedContent';
import { COMPANY_INFO } from '../../_constants/config';

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
                {COMPANY_INFO.address.postal}<br />
                {COMPANY_INFO.address.city}<br />
                {COMPANY_INFO.address.building}<br />
                &gt;&gt;
                <a href={COMPANY_INFO.address.mapUrl}>
                  アクセスマップ
                </a>
              </p>

              <ul className={styles.list}>
                <li className={styles.item}>
                  [MAIL] {COMPANY_INFO.mail}
                </li>
                <li className={styles.item}>
                  [URL] {COMPANY_INFO.url}
                </li>
                <li className={styles.item}>
                  [TEL] {COMPANY_INFO.tel}
                </li>
                <li className={styles.item}>
                  [FAX] {COMPANY_INFO.fax}
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
