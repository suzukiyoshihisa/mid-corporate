'use client';

import ContactForm from '../ContactForm/index';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <ContactForm />
      <div className={styles.footerBottom}>
        <Link href="/" className={styles.footerLogoLink}>
          <Image
            src="/logo.png"
            alt="mid logo"
            className={styles.footerLogo}
            width={348}
            height={133}
          />
        </Link>
        <nav className={styles.footerNav}>
          <Link href="/news/privacy">プライバシーポリシー</Link>
          <span className={styles.divider}>｜</span>
          <Link href="/news/handling">個人情報の取り扱いについて</Link>
        </nav>
        <p className={styles.copyright}>© 2026 mid Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
