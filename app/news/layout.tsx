import styles from './layout.module.css';

export const metadata = {
  title: 'NEWS',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function Layout({ children }: Props) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>News</h1>
          <p className={styles.pageSub}>Latest articles</p>
        </div>
      </div>
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
}
