import Image from "next/image";
import styles from "./index.module.css";

export default function Profile() {
  return (
    <section className={styles.profile} id="profile">
      <h2 className={styles.title}>Profile</h2>
      <div className={styles.profileContent}>
        <div className={styles.profileData}>
          <p className={styles.name}>
            代表取締役：廣田将大
          </p>
        </div>
        <div className={styles.text}>
          <p>
            2007年 早稲田大学商学部卒業後、メリルリンチ日本証券株式会社に入社。<br />
						2012年 JPモルガン証券株式会社に入社。内部統制など様々なプロジェクトマネジメントを担当。<br />
						退社後、システム開発・WEBディレクターとしてフリーで活動。<br />
						2014年 株式会社midを設立。
          </p>
        </div>
      </div>
    </section>
  );
}