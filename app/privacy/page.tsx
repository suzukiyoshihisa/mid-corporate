import ButtonLink from '../_components/ButtonLink';

import styles from './page.module.css';

export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>個人情報保護方針</h1>
        <p className={styles.paragraph}>制定日 2024年2月1日</p>
        <p className={styles.paragraph}>最終改正日 2024年2月1日</p>

        <p className={styles.paragraph}>株式会社mid(以下、「当社」という。)では、アパレル、WEB制作・運用、人材派遣の運営を行っており、お客様、お取引先関係者の個人情報などを、お客様のご要望の整理、企画ご提案、制作および運営の支援に利用しています。また、従業者の情報及び特定個人情報などを従業者管理に利用します。これらから当社にとって個人情報及び特定個人情報の保護が重大な責務であると同時に、個人情報などの保護を徹底することは企業の社会的責務との認識としております。そこで、個人情報保護理念と自ら定めた行動規範に基づき、社会的使命を十分に認識し、本人の権利の保護、個人情報に関する法規制等を遵守致します。</p>

        <p className={styles.paragraph}>また、以下に示す方針を具現化するための個人情報保護マネジメントシステムを構築し、最新のIT技術の動向、社会的要請の変化、経営環境の変動等を常に認識しながら、その継続的改善に、全社を挙げて取り組むことをここに宣言致します。</p>

        <ol className={styles.list}>
          <li className={styles.item}>当社は、事業の目的に適切な個人情報の取得・利用及び提供を行い、特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行ないません。また、そのための措置を講じます。</li>
          <li className={styles.item}>当社は個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守致します。</li>
          <li className={styles.item}>当社は個人情報の漏えい、滅失、き損などのリスクに対しては、合理的な安全対策を講じて防止する規程、体制を構築し、継続的に向上させていきます。また、万一の際には速やかに是正措置を講じます。</li>
          <li className={styles.item}>当社は個人情報取扱いに関する苦情及び相談に対しては、迅速かつ誠実に対応致します。</li>
          <li className={styles.item}>個人情報保護マネジメントシステムは、当社を取り巻く環境の変化と実情を踏まえ、適時・適切に見直して継続的に改善をはかっていきます。</li>
        </ol>

        <p className={styles.paragraph}>株式会社mid 代表取締役 廣田 将大</p>

        <p className={styles.paragraph_right}>以上</p>

        <div className={styles.divider}>
          <h2 className={styles.subheading}>個人情報保護方針に関するお問い合わせ先兼個人情報に関する苦情・相談窓口</h2>
          <p className={styles.paragraph}>
            〒160-0022 東京都新宿区新宿5-11-25 アソルティ新宿五丁目ビル201<br />
            株式会社mid 個人情報問合せ窓口<br />
            メールアドレス: team@mid-group.info
          </p>
        </div>

        <h2 className={styles.subheading}>個人情報の利用目的の公表</h2>
        <p className={styles.paragraph}>株式会社mid(以下、「当社」という。)は、個人情報を次の利用目的の範囲内で利用することを、個人情報の保護に関する法律(個人情報保護法)第21条第1項及びJISQ15001:2017附属書A.3.4.2.4に基づき公表いたします。</p>

        <h3 className={styles.subheading}>個人情報の利用目的</h3>
        <p className={styles.paragraph}>(1) ご本人より直接書面等（ホームページや電子メール等によるものを含む。以下「書面」という）に記載された個人情報を取得する場合の利用目的。</p>
        <ul className={styles.sublist}>
          <li>お客様の個人情報は、アパレル事業及びウェブ・グラフィック事業における商品の発送、関連するアフターサービス、新商品や新たなサービスのご案内のため</li>
          <li>当社の各事業に関するお問い合わせの方の個人情報は、お問い合わせにお答えするため</li>
          <li>当社従業者の個人情報は、人事労務管理、業務管理、健康管理、セキュリティ管理等のため</li>
          <li>当社従業者およびその扶養家族の個人番号は、法律で特定された利用目的のため</li>
          <li>当社への直接応募者情報は、採用業務のため</li>
          <li>当社の人材派遣事業への応募登録者情報は、人材派遣先紹介のため</li>
        </ul>

        <p className={styles.paragraph}>(2) ご本人より直接書面以外の方法で個人情報を取得する場合の利用目的</p>
        <ul className={styles.sublist}>
          <li>当社のアパレル販売事業においては、商品の選別、発送、アフターサービスを行うため</li>
          <li>ハローワークや民間求人情報サイトからの採用応募者情報は、採用業務のため</li>
        </ul>

        <p className={styles.paragraph_right}>以上</p>

        <h2 className={styles.subheading}>保有個人データ及び第三者提供記録に関する事項の周知について</h2>
        <p className={styles.paragraph}>当社では、保有個人データの開示等（利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止）の請求及び第三者提供記録の開示に関する請求について、以下の事項を周知致します。</p>

        <ol className={styles.list}>
          <li className={styles.item}>
            当社の名称及び住所、代表者の氏名<br />
            名称:株式会社mid<br />
            住所:〒160-0022 東京都新宿区新宿5-11-25 アソルティ新宿五丁目ビル201<br />
            代表者：廣田 将大
          </li>
          <li className={styles.item}>
            個人情報保護管理者<br />
            役職名：代表取締役社長<br />
            連絡先：メールアドレス team@mid-group.info
          </li>
          <li className={styles.item}>
            保有個人データの利用目的
            <ul className={styles.sublist}>
              <li>商品の発送、アフターサービス、新商品・サービスのご案内</li>
              <li>お問い合わせ対応</li>
              <li>人事労務・業務・健康・セキュリティ管理</li>
              <li>法定目的のための個人番号利用</li>
              <li>採用業務</li>
              <li>人材派遣先紹介</li>
            </ul>
          </li>
          <li className={styles.item}>
            保有個人データ取扱いに関する苦情の申し出先<br />
            〒160-0022 東京都新宿区新宿5-11-25 アソルティ新宿五丁目ビル201<br />
            株式会社mid 個人情報問合せ窓口<br />
            メールアドレス:team@mid-group.info
          </li>
          <li className={styles.item}>
            当社の加入する認定個人情報保護団体について<br />
            当社の加入する認定個人情報保護団体はありません。
          </li>
          <li className={styles.item}>
            開示等の手続きについて<br />
            請求がある場合には、上記お問い合わせ窓口までご連絡ください。必要な手続きと申請書類をご案内します。
          </li>
          <li className={styles.item}>
            保有個人データの安全管理のために講じた措置
            <ol className={styles.list}>
              <li className={styles.item}>
                組織的安全管理措置
                <ul className={styles.sublist}>
                  <li>方針の社内周知とウェブ公開</li>
                  <li>業務手順の文書化と社内徹底</li>
                  <li>定期的な自己点検と内部監査</li>
                  <li>従業者のアクセス制限</li>
                </ul>
              </li>
              <li className={styles.item}>
                人的安全管理措置
                <ul className={styles.sublist}>
                  <li>取扱いに関する研修の実施</li>
                  <li>秘密保持誓約の取得</li>
                </ul>
              </li>
              <li className={styles.item}>
                物理的・技術的安全管理措置
                <ul className={styles.sublist}>
                  <li>区域の限定・入退室管理・機器持込制限</li>
                  <li>施錠・アクセス制限された保管</li>
                  <li>ファイアウォール導入等の外部アクセス防止策</li>
                  <li>不正ソフトウェア対策</li>
                  <li>移送時：配送記録または手渡し、通信の暗号化</li>
                </ul>
              </li>
              <li className={styles.item}>
                外的環境の把握
                <ul className={styles.sublist}>
                  <li>海外事業者への委託は行わず、国内事業者については契約や利用規約を確認</li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>

        <p className={styles.paragraph_right}>以上</p>

        <h2 className={styles.subheading}>保有個人データ及び第三者提供記録に関する事項の周知について</h2>
        <p className={styles.paragraph}>当社では、保有個人データの開示等（利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止）の請求及び第三者提供記録の開示に関する請求について、以下の事項を周知致します。</p>

        <ol className={styles.list}>
          <li className={styles.item}>
            当社の名称及び住所、代表者の氏名<br />
            名称:株式会社mid<br />
            住所:〒160-0022 東京都新宿区新宿5-11-25 アソルティ新宿五丁目ビル201<br />
            代表者：廣田 将大
          </li>
          <li className={styles.item}>
            個人情報保護管理者<br />
            役職名：代表取締役社長<br />
            連絡先：メールアドレス team@mid-group.info
          </li>
          <li className={styles.item}>
            保有個人データの利用目的
            <ul className={styles.sublist}>
              <li>商品の発送、アフターサービス、新商品・サービスのご案内</li>
              <li>お問い合わせ対応</li>
              <li>人事労務・業務・健康・セキュリティ管理</li>
              <li>法定目的のための個人番号利用</li>
              <li>採用業務</li>
              <li>人材派遣先紹介</li>
            </ul>
          </li>
          <li className={styles.item}>
            保有個人データ取扱いに関する苦情の申し出先<br />
            〒160-0022 東京都新宿区新宿5-11-25 アソルティ新宿五丁目ビル201<br />
            株式会社mid 個人情報問合せ窓口<br />
            メールアドレス:team@mid-group.info
          </li>
          <li className={styles.item}>
            当社の加入する認定個人情報保護団体について<br />
            当社の加入する認定個人情報保護団体はありません。
          </li>
          <li className={styles.item}>
            開示等の手続きについて<br />
            請求がある場合には、上記お問い合わせ窓口までご連絡ください。必要な手続きと申請書類をご案内します。
          </li>
          <li className={styles.item}>
            保有個人データの安全管理のために講じた措置
            <ol className={styles.list}>
              <li className={styles.item}>
                組織的安全管理措置
                <ul className={styles.sublist}>
                  <li>方針の社内周知とウェブ公開</li>
                  <li>業務手順の文書化と社内徹底</li>
                  <li>定期的な自己点検と内部監査</li>
                  <li>従業者のアクセス制限</li>
                </ul>
              </li>
              <li className={styles.item}>
                人的安全管理措置
                <ul className={styles.sublist}>
                  <li>取扱いに関する研修の実施</li>
                  <li>秘密保持誓約の取得</li>
                </ul>
              </li>
              <li className={styles.item}>
                物理的・技術的安全管理措置
                <ul className={styles.sublist}>
                  <li>区域の限定・入退室管理・機器持込制限</li>
                  <li>施錠・アクセス制限された保管</li>
                  <li>ファイアウォール導入等の外部アクセス防止策</li>
                  <li>不正ソフトウェア対策</li>
                  <li>移送時：配送記録または手渡し、通信の暗号化</li>
                </ul>
              </li>
              <li className={styles.item}>
                外的環境の把握
                <ul className={styles.sublist}>
                  <li>海外事業者への委託は行わず、国内事業者については契約や利用規約を確認</li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>

        <h2 className={styles.subheading}>開示等に関する手続き</h2>
        <p className={styles.paragraph}>保有個人データについては、利用目的の通知、開示、内容の訂正、追加又は削除、 利用の停止、消去および第三者への提供の停止（開示等）のご請求及び第三者提供記録の開示に関するご請求について、以下の事項を周知致します。</p>
        <p className={styles.paragraph}>当社では、次の手順で個人情報の開示等の求めに対応いたします。</p>

        <ol className={styles.list}>
          <li className={styles.item}>
            開示等の求めの受付
            <ol className={styles.sublist}>
              <li>
                下記の宛先までご連絡ください。当社より「所定の用紙」を郵送いたしますので、到着後、当社の「個人情報の取扱いについて」に同意後、必要な資料を添付し、郵送又はご持参ください。<br />
                〒160-0022 東京都新宿区新宿5-11-25 アソルティ新宿五丁目ビル201<br />
                株式会社mid 個人情報問合せ窓口<br />
                メールアドレス:team@mid-group.info
              </li>
              <li>
                開示等の請求をする者が本人又は代理人であることの確認の方法
                <ul>
                  <li>本人であることの確認：運転免許証、マイナンバーカード（表面）、その他写真入りの公的証明書の写し</li>
                  <li>代理人であることの確認：本人確認書類に加え、委任状や戸籍謄本、登記事項証明書など</li>
                </ul>
              </li>
            </ol>
          </li>
          <li className={styles.item}>
            「開示等の請求」の手数料及びその徴収方法<br />
            ・利用目的の通知又は開示及び第三者提供記録の開示請求の場合に限り、1,000円分の郵便切手を請求書類に同封してください。
          </li>
          <li className={styles.item}>
            検討結果連絡<br />
            ・ご要望の方法により遅滞なく連絡します。<br />
            ・回答は、登録されている本人または法定代理人の住所への郵送、またはメールアドレスへの送付となります。
          </li>
        </ol>

        <p className={styles.paragraph_right}>以上</p>


      <ButtonLink href="../" variant="outline_black">
        TOPに戻る
      </ButtonLink>
    </div>
  );
}