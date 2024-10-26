import Link from "next/link";
import styles from "./index.module.css"
import cx from "classnames";

export function ButtonAbout() {
    return (
        <Link href="/menu" className={cx(styles.button, styles.about)}>menu</Link>
    )
}