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
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ width: '100%', height: 'auto' }}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoKAAoABABoJZwC7ADdF78MAAD+7N0hQB53wxKa2Gp6NJgR6TfAGrCwAXjeQAAA"
      />
    </section>
  );
}
