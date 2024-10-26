"use client";
import { useEffect, useState } from "react";
import data from "../data";
import Story from "../story";
import cx from "classnames";
import styles from "./index.module.css"

export default function SlideShow() {

    const totalSliders = 8;
    const[count, setCount] = useState(1);

    useEffect(() => {

    const t = setInterval(() => {
        if(count > totalSliders - 1) {
            clearInterval(t);
        } else {
        setCount(c => c + 1);
    }
    },5000);

    return () => {
        clearInterval(t);
    };

    },[count]);

    return (
        <div className={styles.contents}>
            <div className={styles.viewContainer}>
                <div className={cx(styles.slideWhole,styles[`slide${count}`])}>
                    {
                        data.map((num,i) => (
                            <Story key={i} {...num}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
