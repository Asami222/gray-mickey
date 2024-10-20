import styles from "./index.module.css"

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <nav>
                <ul>
                    <li>
                        <a href="/menu">MENU</a>
                    </li>
                    <li>
                        <a href="/game">キャラクターゲーム</a>
                    </li>
                    <li>
                        <a href="/about">ABOUT</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©︎ GrayMickey. All Rights Reserved 2024.</p>
        </footer>
    )
}