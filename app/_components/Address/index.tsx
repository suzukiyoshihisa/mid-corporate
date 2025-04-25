import Image from "next/image";

import styles from "./index.module.css";
import Profile from '@/app/_components/Profile'
import YoutubeEmbed from "@/app/_components/YoutubeEmbed";
import Link from "next/link";
import SpotlightCard from '@/app/_components/SpotlightCard';

export default function Address() {
  return (
    <section className={styles.contents} id="address">
      <div className={styles.profile}>
        <Profile/>
      </div>
      <div className={styles.address}>
        <SpotlightCard className={styles.content1}>
          <div className={styles.inner}>
            <h2 className={styles.title}>Address.</h2>
            <p className={styles.text}>
              〒160-0022<br />
              東京都新宿区新宿5-11-25<br />
              アソルティ新宿五丁目ビル 201<br />
              &gt;&gt;
              <a href="https://www.google.co.jp/maps/dir//%E3%80%92160-0022+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%96%B0%E5%AE%BF%E5%8C%BA%E6%96%B0%E5%AE%BF%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%91%E2%88%92%EF%BC%92%EF%BC%95/@35.6928166,139.6255896,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188cdc5c3ffaa9:0xb9d6b366eb54b1c!2m2!1d139.7079907!2d35.6928447?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">アクセスマップ</a>
            </p>

            <ul className={styles.list}>
              <li className={styles.item}>
                [MAIL] <a href="mailto:info@mid-group.co">info@mid-group.co</a>
              </li>
              <li className={styles.item}>
                [URL] <a href="https://mid-group.co/">www.mid-group.co</a>
              </li>
              <li className={styles.item}>
                [TEL] <a href="tel:03-6869-7785">03-6869-7785</a>
              </li>
              <li className={styles.item}>
                [FAX] 03-6730-2693
              </li>
            </ul>
          </div>
        </SpotlightCard>
        <div className={styles.content2}>
          <div className={styles.iframe}>
            <YoutubeEmbed videoId="_mJO_Kzi84o" title="Wansie uniform" />
          </div>
        </div>
        <div className={styles.content3}>
          <Link href="https://en-gage.net/mid-group_saiyo/?banner=1" target="_blank" className={styles.engage}></Link>
        </div>
      </div>
    </section>
  );
}