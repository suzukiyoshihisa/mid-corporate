"use server";

import type { ContactFormState } from '../_types';

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    handling: formData.get("handling") as string | null,
    recaptchaToken: formData.get("recaptchaToken") as string,
  };

  // フォームバリデーション
  if (!rawFormData.name) return { status: "error", message: "お名前を入力してください" };
  if (!rawFormData.company) return { status: "error", message: "会社名を入力してください" };
  if (!rawFormData.email) return { status: "error", message: "メールアドレスを入力してください" };
  if (!validateEmail(rawFormData.email)) return { status: "error", message: "メールアドレスの形式が誤っています" };
  if (!rawFormData.message) return { status: "error", message: "メッセージを入力してください" };
  if (rawFormData.handling !== "on") return { status: "error", message: "個人情報の取扱いに同意してください" };

  // 環境変数チェック
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  if (!portalId || !formId) {
    console.error("❌ 環境変数が未設定: HUBSPOT_PORTAL_ID or HUBSPOT_FORM_ID");
    return { status: "error", message: "サーバーの設定に問題があります。管理者にお問い合わせください。" };
  }

  // reCAPTCHA v3 検証
  if (!recaptchaSecret) {
    console.error("❌ 環境変数が未設定: RECAPTCHA_SECRET_KEY");
    return { status: "error", message: "サーバーの設定に問題があります。管理者にお問い合わせください。" };
  }

  if (!rawFormData.recaptchaToken) {
    return { status: "error", message: "reCAPTCHAの検証に失敗しました。再度お試しください。" };
  }

  try {
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${recaptchaSecret}&response=${rawFormData.recaptchaToken}`,
    });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error("❌ reCAPTCHA検証失敗:", recaptchaData);
      return { status: "error", message: "スパムと判定されました。再度お試しください。" };
    }
  } catch (e) {
    console.error("❌ reCAPTCHA検証時の例外:", e);
    return { status: "error", message: "reCAPTCHAの検証に失敗しました。再度お試しください。" };
  }

  // HubSpot送信
  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  const payload = {
    fields: [
      { name: "company", value: rawFormData.company },
      { name: "firstname", value: rawFormData.name },
      { name: "email", value: rawFormData.email },
      { name: "message", value: rawFormData.message },
    ],
    context: {
      pageName: "お問い合わせ",
    },
  };

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const rawResponse = await result.text();

    if (!result.ok) {
      console.error(`❌ HubSpotエラー (${result.status}):`, rawResponse);
      try {
        const parsed = JSON.parse(rawResponse);
        const detail = parsed?.errors?.[0]?.message || parsed?.message || rawResponse;
        console.error("❌ HubSpot詳細:", detail);
      } catch {}
      return { status: "error", message: "送信に失敗しました。時間をおいて再度お試しください。" };
    }

    console.log("✅ HubSpot送信成功:", rawResponse);
    return { status: "success", message: "OK" };

  } catch (e) {
    console.error("❌ HubSpot送信時の例外:", e);
    return { status: "error", message: "通信エラーが発生しました。時間をおいて再度お試しください。" };
  }
}
