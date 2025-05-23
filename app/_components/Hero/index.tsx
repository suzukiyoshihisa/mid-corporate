import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.webp"
        alt="企業ビルの外観"
        width={1200}
        height={600}
        priority
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
}
