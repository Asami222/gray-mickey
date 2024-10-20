
import Image from "next/image";
import LayoutBasic from "../layoutBasic";
import cx from "classnames";
import styles from "./index.module.css"

export default function SecondView({count}) {
    return (
        <div className={cx(styles.wrapper, count === 0 ? styles.fadeIn : '')}>
            <LayoutBasic>
                <div className={styles.main}>
                    <p>Hello!</p>
                    <div className={styles.section}>
                        <Image
                        src="/sectionImg.svg"
                        alt=""
                        layout="responsive"
                        sizes="100vw"
                        width={1280}
                        height={130}
                        />
                    </div>
                </div>
            </LayoutBasic>
        </div>
    )
}