
import cx from "classnames";
import styles from "./index.module.css"
import { BlurImage1 } from "../blurImage";

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
                            <BlurImage1 src="/game/mickey.png" alt="ミッキーマウス" width="300" height="300" sizes="(min-width: 150px) 150px, 13vw" />
                        </div>
                    </div>
                    <div>
                        <p>ミニー</p>
                        <div className={styles.img}>
                            <BlurImage1 src="/game/minnie.png" alt="ミニーマウス" width="300" height="300" sizes="(min-width: 150px) 150px, 13vw" />
                        </div>
                    </div>
                    <div>
                        <p>ピート</p>
                        <div className={styles.img}>
                            <BlurImage1 src="/game/pete.png" alt="ピート" width="300" height="300" sizes="(min-width: 150px) 150px, 13vw" />
                        </div>
                    </div>
                </div>
                <div className={cx(styles.introflex,styles.introflexSec)}>
                    <div>
                        <p>オウム</p>
                        <div className={styles.img}>
                            <BlurImage1 src="/game/oumu.png" alt="おうむ" width="300" height="300" sizes="(min-width: 150px) 150px, 13vw" />
                        </div>
                    </div>
                    <div>
                        <p>山羊</p>
                        <div className={styles.img}>
                            <BlurImage1 src="/game/goat.png" alt="山羊" width="300" height="300" sizes="(min-width: 150px) 150px, 13vw" />
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