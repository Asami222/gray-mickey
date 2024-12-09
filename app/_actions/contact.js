"use server";

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState, formData) {
    const rawFormData ={
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    if(!rawFormData.fullname) {
        return {
            status: "error",
            message: "お名前を入力してください",
        };
    }
    if(!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }
    if(!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        };
    }
    if(!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
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
                    {
                        objectTypeId: "0-1",
                        name: "fullname",
                        value: rawFormData.fullname,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormData.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: rawFormData.message,
                    },
                ],
            }),
        },
    );

    try {
        await result.json();
    } catch(e) {
        console.log(e);
        return {
            status: "error",
            message: "お問い合わせに失敗しました",
        };
    }

    return { status: "success", message: "OK"};
}