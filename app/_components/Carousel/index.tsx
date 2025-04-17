import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './index.module.css';
import Image from 'next/image';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

  return (
    <div className={styles.container}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__slides}>
          <div className={styles.embla__slide}>
              <Image
                src="/hoshino.gif"
                alt="client1"
                width={140}
                height={140}
                className={styles.embla__slide__img}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
                src="/lush.jpg"
                alt="client1"
                width={140}
                height={140}
                className={styles.embla__slide__img}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
                src="/irobot.gif"
                alt="client1"
                width={140}
                height={140}
                className={styles.embla__slide__img}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
                src="/inoac.gif"
                alt="client1"
                width={140}
                height={140}
                className={styles.embla__slide__img}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
                src="/kaseikai.gif"
                alt="client1"
                width={140}
                height={140}
                className={styles.embla__slide__img}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
                src="/deiberica.gif"
                alt="client1"
                width={140}
                height={140}
                className={styles.embla__slide__img}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
