'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <AnchorLink href="#about">ABOUT US</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#service">SERVICE</AnchorLink>
          </li>
          <li>
            <Link href="/news">NEWS</Link>
          </li>
          <li>
            <AnchorLink href="#address">ADDRESS</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#footer">CONTACT</AnchorLink>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}