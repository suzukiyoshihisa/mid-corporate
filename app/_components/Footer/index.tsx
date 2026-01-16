'use client';

import ContactForm from '../ContactForm/index';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <ul className={styles.items}>
        <li className={styles.item}>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <h2 className={styles.sectionTitle}>Company Info</h2>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>社名</h3>
                  <p className={styles.infoText}>株式会社mid</p>
                </li>
                <li className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>所在地</h3>
                  <p className={styles.infoText}>
                    【本社】<br />
                    〒160-0022<br />
                    東京都新宿区新宿5-11-25<br />
                    アソルティ新宿五丁目ビル 201
                    <br/><br/>
                    【福岡支社】<br />
                    〒810-0042<br />
                    福岡県福岡市中央区赤坂1丁目8-23
                    </p>
                </li>
                <li className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>事業内容</h3>
                  <p className={styles.infoText}>
                    アパレルブランド<br className="sm-br" />
                    「ＷＡＮＳＩＥ」の運営<br />
                    WEBサイトの企画、デザイン、制作、運営及び管理事業<br />
                    人材派遣事業
                  </p>
                </li>
                <li className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>主要取引銀行</h3>
                  <p className={styles.infoText}>
                    さわやか信用金庫 新宿西支店<br />
                    楽天銀行 第二営業支店
                  </p>
                </li>
                <li className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>資本金</h3>
                  <p className={styles.infoText}>1,735万円</p>
                </li>
                <li className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>設立年月日</h3>
                  <p className={styles.infoText}>平成26年3月</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <ContactForm />
        </li>
      </ul>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <p>©️ 2025 mid</p>
        </div>
        <div className={styles.navItem}>
          <a href="/news/s5qhekpbzrl">個人情報保護方針</a>
        </div>
        <div className={styles.navItem}>
          <a href="/news/en46y027e3l">個人情報の取り扱いについて</a>
        </div>
      </nav>
    </footer>
  );
}