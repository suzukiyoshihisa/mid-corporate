'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { createContactData } from '../../_actions/contact';
import { useActionState, useEffect, useState } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import type { ContactFormState } from '../../_types';

const initialState: ContactFormState = {
  status: '',
  message: '',
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactData, initialState);
  const [values, setValues] = useState({ name: '', company: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    sendGAEvent({ event: 'contact', value: 'submit' });
  };

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  if (state.status === 'success') {
    return (
      <section className={styles.contactSection}>
        <p className={styles.success}>
          お問い合わせいただき、ありがとうございます。
          <br />
          お返事まで今しばらくお待ちください。
        </p>
      </section>
    );
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.inner}>
        <div className={styles.contactLeft}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.subTitle}>
            サービスやお見積りに関するご相談。
            <br />
            下記フォームよりお気軽にお問い合わせください。
          </p>
        </div>

        <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.fieldsCol}>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="name">
                  お名前<span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.textfield}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="(例)Taro Yamada"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="company">
                  会社名<span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.textfield}
                  type="text"
                  id="company"
                  name="company"
                  placeholder="(例)株式会社mid"
                  value={values.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.item}>
                <label className={styles.label} htmlFor="email">
                  メールアドレス<span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.textfield}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="(例)test@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.messageCol}>
              <div className={styles.messageItem}>
                <label className={styles.label} htmlFor="message">
                  お問い合わせ内容<span className={styles.required}>*</span>
                </label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder="(例) サービスについてのご質問など"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.formBottom}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" id="handling" name="handling" />
              &emsp;
              <Link href="/news/handling" className={styles.link}>
                個人情報の取り扱い
              </Link>
              に同意する<span className={styles.required}>*</span>
            </label>
            <div className={styles.actions}>
              {state.status === 'error' && (
                <p className={styles.error}>{state.message}</p>
              )}
              <button type="submit" className={styles.button}>
                送信する &nbsp;→
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
