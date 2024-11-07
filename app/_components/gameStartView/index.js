import Image from "next/image";
import cx from "classnames";
import styles from "./index.module.css"

export default function StartView({onStart}) {

    const handleClick = () => onStart();

    return (
        <div className={styles.Box}>
            <p className={styles.title}>あなたはこの５種類のキャラクターの内どれにいちばん近い？</p>
            <div className={styles.introbox}>
                <div className={styles.introflex}>
                    <div>
                        <p>ミッキー</p>
                        <div className={styles.img}>
                            <Image
                                src="/game/quiz-mickey.png"
                                alt="ミッキーマウス"
                                layout="responsive"
                                sizes="(min-width: 150px) 150px, 13vw"
                                width={316}
                                height={316}
                            />
                        </div>
                    </div>
                    <div>
                        <p>ミニー</p>
                        <div className={styles.img}>
                            <Image
                                src="/game/quiz-miny.png"
                                alt="ミニーマウス"
                                layout="responsive"
                                sizes="(min-width: 150px) 150px, 13vw"
                                width={316}
                                height={316}
                            />
                        </div>
                    </div>
                    <div>
                        <p>ピート</p>
                        <div className={styles.img}>
                            <Image
                                src="/game/quiz-pete.png"
                                alt="ピート"
                                layout="responsive"
                                sizes="(min-width: 150px) 150px, 13vw"
                                width={316}
                                height={316}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx(styles.introflex,styles.introflexSec)}>
                    <div>
                        <p>オウム</p>
                        <div className={styles.img}>
                            <Image
                                src="/game/quiz-oumu.png"
                                alt="ピート"
                                layout="responsive"
                                sizes="(min-width: 150px) 150px, 13vw"
                                width={316}
                                height={316}
                            />
                        </div>
                    </div>
                    <div>
                        <p>山羊</p>
                        <div className={styles.img}>
                            <Image
                                src="/game/quiz-hituji.png"
                                alt="ピート"
                                layout="responsive"
                                sizes="(min-width: 150px) 150px, 13vw"
                                width={316}
                                height={316}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className={cx(styles.button, styles.pushright)} onClick={handleClick}><span>診断スタート！</span></button>
                <p>10問あるよ!</p>
            </div>
        </div>
    )
}