import styles from "./not-found.module.css";
import Footer from "./_components/Footer";
import Image from "next/image";
import Container from "./_components/container";
import cx from "classnames";

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
        <Container>
        
            <div className={styles.top}>
                <div className={styles.img}>
                    <Image
                        src="/pans.svg"
                        alt=""
                        width={240}
                        height={130}
                    />
                </div>
                <dl className={styles.box}>
                    <dt>ページが迷子です</dt>
                    <dd>あなたがアクセスしたページは存在しないようです。もう一度URLを見直してみてください。</dd>
                </dl>
                <div className={cx(styles.img, styles.pan2)}>
                    <Image
                        src="/pans.svg"
                        alt=""
                        width={240}
                        height={130}
                    />
                </div>
            </div>
            <div className={styles.cat}>
                <Image
                    src="/cat.svg"
                    alt=""
                    width={143}
                    height={144}
                />
            </div>
        
        </Container>
        <Footer />
        </div>
    )
}

