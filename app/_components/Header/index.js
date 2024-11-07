import { Nothing_You_Could_Do } from "next/font/google";
import Container from "../container";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css"



const logo = Nothing_You_Could_Do({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
            <div className={styles.wrapper}>
            <div className={styles.logo}>
                <h1 className={logo.className}>
                    <Link href="/" >
                        Gray Mickey
                        <span className={styles.img}>
                            <Image
                                src="/logoAfter.svg"
                                alt=""
                                sizes="(min-width: 1280px) 49px, 100vw"
                                width={49}
                                height={42}
                            />
                        </span>
                    </Link>
                </h1>
            </div>
            <nav>
                <ul>
                    <li className={styles.menu}>
                        <Link href="/menu">MENU</Link>
                    </li>
                    <li className={styles.game}>
                        <Link href="/game">キャラクター<br/>診断クイズ</Link>
                    </li>
                    <li className={styles.about}>
                        <Link href="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
            </div>
            </Container>
        </header>
    )
}