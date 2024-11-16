"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css"
import cx from "classnames";

export function ButtonAbout() {
    return (
        <Link href="/menu" className={cx(styles.button, styles.about)}>menu</Link>
    )
}

export function ButtonArticle({img,imgHover,title,color = 'initial'}) {

    const [isHover, setHover] = useState(false);

    return (
        <Link href="/menu" className={cx(styles.button,styles.article,isHover && styles.hover)} style={{ '--color': color }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <p>menu</p>
            { isHover ?
            <div className={styles.img}>
                <Image
                    src={imgHover}
                    alt={title}
                    width={140}
                    height={140}
                />
            </div>
            :
            <div className={styles.img}>
                <Image
                    src={img}
                    alt={title}
                    width={140}
                    height={140}
                />
            </div>
            }
        </Link>
    )
}