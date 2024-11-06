
import Container from "../_components/container";
import Header from "../_components/Header";
import Icon from "../_components/Icon";
import data from "../_components/dataBase";
import styles from "./page.module.css"


export default function Menu() {

    const contents = data.menu;

    return (
        <>
        <Header />
        <main>
            <Container>
                <section className={styles.wrapper}>
                    <h2>世界にはさまざまな問題が溢れています。いくつか詳細を知ってみませんか？</h2>
                    <div className={styles.menuWrapper}>
                        <div className={styles.contentsFlex}>
                            <h3>社会問題</h3>
                            <div className={styles.detailFlex}>
                            {contents.society.map((content,i) => (
                                <Icon key={i} {...content}/>
                            ))}
                            </div>
                        </div>
                        <div className={styles.contentsFlex}>
                            <h3>環境問題</h3>
                            <div className={styles.problem}>
                                <div className={styles.detailFlex}>
                                    <p>環境破壊による生態系への影響</p>
                                    <div className={styles.iconFlex}>
                                        {contents.env.effect.map((content,i) => (
                                            <Icon key={i} {...content}/>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.detailFlex}>
                                    <p>環境破壊の要因</p>
                                    <div className={styles.iconFlex}>
                                        {contents.env.factor.map((content,i) => (
                                            <Icon key={i} {...content}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className={styles.cr}>©︎ GrayMickey. All Rights Reserved 2024.</footer>
            </Container>
        </main>
        </>
    )
}