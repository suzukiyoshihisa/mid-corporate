'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { createContactData } from '../../_actions/contact';
import { useActionState, useEffect, useState } from 'react';
import styles from './index.module.css';
import Link from 'next/link';

const initialState = {
  status: '',
  message: '',
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);

  const handleSubmit = () => {
    sendGAEvent({ event: 'contact', value: 'submit' });
  };

  // ✅ Hydration対策
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  if (state.status === 'success') {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <p className={styles.subTitle}>
        サービスや採用に関することなど、<br />
        下記フォームよりお気軽にお問い合わせください。
      </p>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="name">
          お名前<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="name"
          name="name"
          placeholder="(例)Taro Yamada"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="company"
          name="company"
          placeholder="(例)株式会社mid"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          className={styles.textfield}
          type="email"
          id="email"
          name="email"
          placeholder="(例)test@example.com"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ<span style={{ color: 'red' }}>*</span>
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="(例) サービスについてのご質問など"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            id='handling'
            name="handling"
          />
          &emsp;
          <Link href="/news/en46y027e3l" className={styles.link}>
            個人情報の取扱い
          </Link>
            に同意する<span style={{ color: 'red' }}>*</span>
        </label>
      </div>

      <div className={styles.actions}>
        {state.status === 'error' && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="submit" className={styles.button} />
      </div>
    </form>
  );
}
