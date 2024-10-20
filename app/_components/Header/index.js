import { Nothing_You_Could_Do } from "next/font/google";
import Image from "next/image";
import styles from "./index.module.css"


const logo = Nothing_You_Could_Do({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <h1 className={logo.className}>Gray Mickey
                <span className={styles.img}>
                <Image
                    src="/logoAfter.svg"
                    alt=""
                    layout="responsive"
                    sizes="(min-width: 1280px) 49px, 100vw"
                    width={49}
                    height={42}
                />
                </span>
                </h1>
            </div>
        </header>
    )
}