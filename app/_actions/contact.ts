"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: unknown, formData: FormData) {
    // ✅ 一時的に環境変数の確認ログを出力
    console.log("HUBSPOT_PORTAL_ID:", process.env.HUBSPOT_PORTAL_ID);
    console.log("HUBSPOT_FORM_ID:", process.env.HUBSPOT_FORM_ID);

  // formのname属性ごとにformData.get()で値を取り出すことができる
  const rawFormData = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    handling: formData.get("handling") as string | null,
  };

  if (!rawFormData.name) {
    return {
      status: "error",
      message: "お名前を入力してください",
    };
  }
  if (!rawFormData.company) {
    return {
      status: "error",
      message: "会社名を入力してください",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "メッセージを入力してください",
    };
  }

  if (rawFormData.handling !== "on") {
    return {
      status: "error",
      message: "個人情報の取扱いに同意してください",
    };
  }

  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          { name: "company", value: rawFormData.company },
          { name: "firstname", value: rawFormData.name },
          { name: "email", value: rawFormData.email },
          { name: "message", value: rawFormData.message },
        ],
      }),
    }
  );

  if (!result.ok) {
    return {
      status: "error",
      message: "サーバー側で問題が発生しました",
    };
  }

  try {
    await result.json();
  } catch (e) {
    console.log(e);
    return {
      status: "error",
      message: "お問い合わせに失敗しました",
    };
  }
  
  return { status: "success", message: "OK" };
}