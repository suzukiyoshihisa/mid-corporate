'use client';

import Image from 'next/image';
import styles from "./index.module.css";
import AnimatedContent from '../AnimatedContent';
import CountUp from '../CountUp';
import { COMPANY_INFO } from '../../_constants/config';

export default function Address() {
  return (
    <section className={styles.contents} id="address">

      {/* Col 1: Profile */}
      <div className={styles.profileCol}>
        <div className={styles.profileTop}>
          <Image
            src="/profile-img.webp"
            alt="代表取締役 廣田将大"
            fill
            className={styles.profilePhoto}
            sizes="17vw"
          />
          <div className={styles.profileOverlay}>
            <p className={styles.profileLabel}>代表取締役 / CEO</p>
            <p className={styles.profileName}>廣田将大</p>
            <p className={styles.profileBioText}>
              2007年 早稲田大学商学部卒業後、メリルリンチ日本証券株式会社に入社。
              2012年 JPモルガン証券株式会社に入社。内部統制など様々なプロジェクトマネジメントを担当。退社後、システム開発・WEBディレクターとしてフリーで活動。
              2014年 株式会社midを設立。
            </p>
          </div>
        </div>
      </div>

      {/* Col 2: Company info */}
      <div className={styles.infoCol}>
        <AnimatedContent delay={150}>
          <h2 className={styles.infoTitle}>Company Info.</h2>
          <dl className={styles.infoList}>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>会社名</dt>
              <dd className={styles.infoDef}>株式会社mid</dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>事業内容</dt>
              <dd className={styles.infoDef}>ファッションブランド事業 / ユニフォーム事業 / Web制作事業 / 人材サービス事業</dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>設立</dt>
              <dd className={styles.infoDef}>平成26年3月</dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>資本金</dt>
              <dd className={styles.infoDef}>1,735万円</dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>所在地</dt>
              <dd className={styles.infoDef}>
                【本社】{COMPANY_INFO.address.postal} {COMPANY_INFO.address.city} {COMPANY_INFO.address.building}<br />
                【福岡支社】〒810-0042 福岡県福岡市中央区赤坂1丁目8-23
              </dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>取引銀行</dt>
              <dd className={styles.infoDef}>
                さわやか信用金庫 新宿西支店 / 楽天銀行 第二営業支店
              </dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>TEL</dt>
              <dd className={styles.infoDef}>{COMPANY_INFO.tel}</dd>
            </div>
            <div className={styles.infoRow}>
              <dt className={styles.infoTerm}>MAIL</dt>
              <dd className={styles.infoDef}>{COMPANY_INFO.mail}</dd>
            </div>
          </dl>
        </AnimatedContent>
      </div>

      {/* Col 3: Thanks Our Clients */}
      <div className={styles.clientsCol}>
        <AnimatedContent delay={300}>
          <p className={styles.clientsTitle}>
            Thanks<br />our<br />Clients.
          </p>
          <p className={styles.clientsNumber}>
            <CountUp
              from={0}
              to={36}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </p>
          <p className={styles.clientsNote}>(2025年5月時点)</p>
        </AnimatedContent>
      </div>

    </section>
  );
}
