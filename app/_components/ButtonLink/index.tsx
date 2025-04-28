import styles from './index.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'normal' | 'arrow' | 'arrow_white' | 'outline'; // デザインの種類
};

export default function ButtonLink({ href, children, variant = 'normal' }: Props) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}