import styles from './index.module.css';
import type { ButtonVariant } from '../../_types';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
};

export default function ButtonLink({ href, children, variant = 'normal' }: Props) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}
