import Image from 'next/image';
import styles from './index.module.css';
import { formatDate } from '../../_libs/utils';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={10} height={10} loading="eager" />
      { formatDate(date) }
    </span>
  );
}
