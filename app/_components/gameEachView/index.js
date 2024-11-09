"use client";

import Image from "next/image";
import cx from "classnames";
import styles from "./index.module.css"


export default function EachView({id,question,choices,imgLeft,imgRight,imgMobile,onUpdate,handleSelectChange,selectedOption}) {
    
    const handleClick = () => onUpdate();
    
    const handleOptionChange = (event) => {
       const value = event.target.value;
       handleSelectChange(value)
    };
    
    return (
        <div className={styles.question}>
            <div className={cx(styles.quest, styles[`quest${id}`])}>
                <Image
                    src={`/game/${imgLeft.url}.png`}
                    alt=""
                    width={imgLeft.width}
                    height={imgLeft.height}
                    style={{width: '100%', height: 'auto',}}
                    loading="eager"
                />
            </div>
            <div className={cx(styles.box, styles.secondBox)}>
                <p className={styles.number}>{`${id}問目`}</p>
                <p className={styles.title}>{question}</p>
                <div className={styles.quests}>
                {
                    Object.keys(choices).map((choice,i) => (
                        <p key={i} className={styles.quiz}>
                            <input type="radio" name="choice" value={choice} id={`name${i}`} checked={selectedOption === choice} onChange={handleOptionChange} />
                            <label htmlFor={`name${i}`}>{choice}</label>
                        </p>
                    ))
                }
                </div>
                <div className={styles.bottom}>
                    <div className={styles.actions}>
                        <button className={styles.button2} onClick={handleClick}><span>{ id === 10 ? "結果を見る" : "次へ"}</span></button>
                    </div>
                    <p>５つの内どれか１つをチェックしてね</p>
                </div>
            </div>
            <div className={cx(styles.quest, styles[`quest${id}`],styles[`quest${id}Right`])}>
                <Image
                    src={`/game/${imgRight.url}.png`}
                    alt=""
                    width={imgRight.width}
                    height={imgRight.height}
                    style={{width: '100%', height: 'auto',}}
                    loading="eager"
                />
            </div>
            <div className={cx(styles.questMobile, styles[`quest${id}`])}>
                    <Image
                        src={`/game/${imgMobile.url}.png`}
                        alt=""
                        width={imgMobile.width}
                        height={imgMobile.height}
                        style={{width: '100%', height: 'auto',}}
                        loading="eager"
                    />
            </div>
        </div>
    )
}