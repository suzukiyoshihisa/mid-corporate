import styles from './index.module.css';
import Image from 'next/image';
import { IMAGE_SIZES } from '../../_constants/config';

const clients = [
  { src: '/gategourmet.gif', alt: 'Gate Gourmet' },
  { src: '/hoshino.gif', alt: '星野リゾート | リゾナーレ八ヶ岳' },
  { src: '/irobot.gif', alt: 'iRobot' },
  { src: '/sony.gif', alt: 'sony' },
  { src: '/lush.jpg', alt: 'Lush Fresh Handmade Cosmetics' },
  { src: '/unico.gif', alt: 'unico' },
  { src: '/sg.gif', alt: 'Stage Group' },
  { src: '/seiloo.gif', alt: 'relativ' },
  { src: '/unic.gif', alt: 'Unic' },
  { src: '/deiberica.gif', alt: 'Deiberica' },
  { src: '/kaseikai.gif', alt: '社会福祉法人 | 嘉誠会' },
  { src: '/sakon.gif', alt: '左近' },
  { src: '/shogakukan.gif', alt: '小学館' },
];

export default function ClientsList() {
  return (
    <div className={styles.container}>
      {clients.map((client) => (
        <div key={client.src}>
          <Image
            src={client.src}
            alt={client.alt}
            className={styles.image}
            width={IMAGE_SIZES.CLIENT_LOGO.width}
            height={IMAGE_SIZES.CLIENT_LOGO.height}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
