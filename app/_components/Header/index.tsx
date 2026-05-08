'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.png"
          alt="mid logo"
          className={`${styles.logo} ${scrolled ? styles.logoDark : ''}`}
          width={348}
          height={133}
        />
      </Link>
      <Menu scrolled={scrolled} />
    </header>
  );
}
