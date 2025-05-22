'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { createContactData } from '@/app/_actions/contact';
import { useActionState } from 'react';
import styles from './index.module.css';

const initialState = {
  status: '',
  message: '',
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    sendGAEvent({ event: 'contact', value: 'submit' });
  };

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
          お名前
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
          会社名
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
          メールアドレス
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
          メッセージ
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="(例) サービスについてのご質問など"
        />
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
