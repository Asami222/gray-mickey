import cx from "classnames";
import Image from "next/image";
import styles from "./index.module.css"

export default function FirstView({count,Go}) {

    const handleClick = () => Go();

    return (
        <main className={cx(styles.position, count === 0 ? styles.fadeOut : '')}>
            <div className={styles.wrapper}>
                <p>こんにちは。このサイトの名称は、<br/>
                    <strong>Gray Mickey</strong><br/>
                    です。世の中の社会問題や理不尽なことに対しての情報提供または疑問を投げかけるサイトです。<br/>
                    数秒後にストーリーが始まります。
                </p>
                <div className={styles.mickey}>
                    <Image
                    src="/home/mickeyLow1.gif"
                    alt="Welcome To Gray Mickey Site !"
                    sizes="(max-width: 375px) 252px, 380px"
                    width={758}
                    height={760}
                    priority
                    />
                </div>
                <p>あと<span>{count}</span>秒でスタートします</p>
                <button className={styles.button} onClick={handleClick}><span>START</span></button>
            </div>
        </main>
    )
}