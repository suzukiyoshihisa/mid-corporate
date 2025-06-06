"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: unknown, formData: FormData) {
  const rawFormData = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    handling: formData.get("handling") as string | null,
  };

  // フォームバリデーション
  if (!rawFormData.name) return { status: "error", message: "お名前を入力してください" };
  if (!rawFormData.company) return { status: "error", message: "会社名を入力してください" };
  if (!rawFormData.email) return { status: "error", message: "メールアドレスを入力してください" };
  if (!validateEmail(rawFormData.email)) return { status: "error", message: "メールアドレスの形式が誤っています" };
  if (!rawFormData.message) return { status: "error", message: "メッセージを入力してください" };
  if (rawFormData.handling !== "on") return { status: "error", message: "個人情報の取扱いに同意してください" };

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`;

  const payload = {
    fields: [
      { name: "company", value: rawFormData.company },
      { name: "firstname", value: rawFormData.name },
      { name: "email", value: rawFormData.email },
      { name: "message", value: rawFormData.message },
    ],
  };

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const rawResponse = await result.text(); // ← JSONでなく textで取得

    if (!result.ok) {
      console.error("❌ HubSpotエラー（非200）:", rawResponse); // ← ここで原因が必ずわかる
      return {
        status: "error",
        message: "サーバー側で問題が発生しました",
      };
    }

    console.log("✅ HubSpot正常応答:", rawResponse);
    return {
      status: "success",
      message: "OK",
    };

  } catch (e) {
    console.error("❌ HubSpot送信時の例外:", e);
    return {
      status: "error",
      message: "サーバーエラーが発生しました",
    };
  }
}
