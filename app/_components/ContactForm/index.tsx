'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { createContactData } from '../../_actions/contact';
import { useActionState, useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import AnimatedHeading from '../AnimatedHeading';
import Link from 'next/link';
import type { ContactFormState } from '../../_types';

const initialState: ContactFormState = {
  status: '',
  message: '',
};

function ContactFormContent() {
  const [state, formAction] = useActionState(createContactData, initialState);
  const [values, setValues] = useState({ name: '', company: '', email: '', message: '' });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formRef = useRef<HTMLFormElement>(null);
  const tokenInputRef = useRef<HTMLInputElement>(null);
  const isGettingToken = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isGettingToken.current) {
      isGettingToken.current = false;
      sendGAEvent({ event: 'contact', value: 'submit' });
      return;
    }

    e.preventDefault();
    if (!executeRecaptcha) return;

    isGettingToken.current = true;
    try {
      const token = await executeRecaptcha('contact_form');
      if (tokenInputRef.current) {
        tokenInputRef.current.value = token;
      }
      formRef.current?.requestSubmit();
    } catch {
      isGettingToken.current = false;
    }
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
          <AnimatedHeading className={styles.sectionTitle}>Contact</AnimatedHeading>
          <p className={styles.subTitle}>
            サービスやお見積りに関するご相談。
            <br />
            下記フォームよりお気軽にお問い合わせください。
          </p>
        </div>

        <form ref={formRef} className={styles.form} action={formAction} onSubmit={handleSubmit}>
          <input type="hidden" name="recaptchaToken" ref={tokenInputRef} />

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

export default function ContactForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ContactFormContent />
    </GoogleReCaptchaProvider>
  );
}
