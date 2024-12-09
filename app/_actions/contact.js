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

    return { status: "success", message: "OK"};
}