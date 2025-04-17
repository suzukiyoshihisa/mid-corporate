
'use client'
import { EmblaCarousel } from '@/app/_components/Carousel';
import CountUp from '@/app/_components/CountUp';
import styles from './index.module.css';

export default function Clients() {

  return (
    <div className={styles.contents}>
      <div className={styles.image}>
      </div>
      <div className={styles.text}>
        <p className={styles.playfairTitle}>
          Thanks<br />
          our<br />
          Clients.
        </p>
        <p className={styles.number}>
          <CountUp
            from={0}
            to={36}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </p>
      </div>
      <div className={styles.slides}>
        <EmblaCarousel/>
      </div>
    </div>
  );
}
