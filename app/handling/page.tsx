import ButtonLink from '../_components/ButtonLink';

import styles from './page.module.css';

export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>個人情報の取扱いについて</h1>
      <p className={styles.paragraph}>
        当社は、JIS Q 15001:2017のA.3.4.2.5(A.3.4.2.4のうち本人から直接書面によって取得する場合の措置)に従い、個人情報を収集・保管いたします。
        この入力フォームで取得する個人情報の取り扱いは下記3項の利用目的のためであり、この目的の範囲を超えて利用することはございません。
      </p>
      <ol className={styles.list}>
        <li className={styles.item}>
          <strong>1. 組織の名称</strong>
          <p className={styles.paragraph}>組織の名称: 株式会社mid</p>
        </li>
        <li className={styles.item}>
          <strong>2. 個人情報に関する管理者の氏名、所属及び連絡先</strong>
          <p className={styles.paragraph}>管理者名: 個人情報保護管理者 廣田 将大</p>
          <p className={styles.paragraph}>役職名: 株式会社mid 代表取締役</p>
          <p className={styles.paragraph}>連絡先: 電話03-6869-7785 / メール: team@mid-group.info</p>
        </li>
        <li className={styles.item}>
          <strong>3. 個人情報の利用目的</strong>
          <ul className={styles.sublist}>
            <li>お問い合わせの対応</li>
            <li>採用業務での使用</li>
            <li>人材派遣事業における登録・紹介・採用</li>
            <li>商品の発送やサービス案内</li>
          </ul>
        </li>
        <li className={styles.item}>
          <strong>4. 個人情報の第三者提供</strong>
          <p className={styles.paragraph}>以下の場合を除き、第三者に提供いたしません：</p>
          <ul className={styles.sublist}>
            <li>本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命・身体・財産の保護</li>
            <li>公衆衛生の向上・児童の健全育成</li>
            <li>国や自治体の法令業務遂行の協力</li>
          </ul>
        </li>
        <li className={styles.item}>
          <strong>5. 個人情報取扱いの委託</strong>
          <p className={styles.paragraph}>
            業務委託先に個人情報を預ける場合は、適切な管理と契約を行います。
          </p>
        </li>
        <li className={styles.item}>
          <strong>6. 個人情報の開示等の請求</strong>
          <p className={styles.paragraph}>
            下記窓口までお問い合わせください。<br />
            〒160-0022 東京都新宿区新宿5-11-25 新宿五丁目ビル201<br />
            株式会社mid 個人情報問合せ窓口<br />
            メール: team@mid-group.info<br />
            TEL: 03-6869-7785 (受付時間 11:00~18:00)
          </p>
        </li>
        <li className={styles.item}>
          <strong>7. 個人情報を提供されることの任意性について</strong>
          <p className={styles.paragraph}>
            提供は任意ですが、必要情報がない場合サービス提供ができないことがあります。
          </p>
        </li>
        <li className={styles.item}>
          <strong>8. アクセスにより機械的に取得される情報</strong>
          <p className={styles.paragraph}>
            Cookie等により情報を取得することがあります。
          </p>
        </li>
      </ol>

      <ButtonLink href="../" variant="outline_black">
        TOPに戻る
      </ButtonLink>
    </div>
  );
}