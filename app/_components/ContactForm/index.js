"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initialState = {
    status: "",
    message: "",
};

export default function ContactForm() {
    const [state, formAction] = useFormState(createContactData, initialState);
    console.log(state);
    if (state.status === "success") {
        return (
            <p className={styles.success}>
                Thank You !<br/>メッセージが送られました。
            </p>
        );
    }
    return (
            <form className={styles.form} action={formAction}>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">
                    お名前またはニックネーム
                    </label>
                    <input className={styles.textfield} type="text" id="name" name="name" />
                </div>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                        メールアドレス
                    </label>
                    <input className={styles.textfield} type="text" id="email" name="email" />
                </div>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">
                        メッセージ
                    </label>
                    <textarea className={styles.textarea} id="message" name="message" />
                </div>
                <div className={styles.actions}>
                    {state.status === "error" && (
                        <p className={styles.error}>{state.message}</p>
                    )}
                    <input type="submit" value="送信" className={styles.button} />
                </div>
            </form>
    );
}