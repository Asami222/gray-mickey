
import Header from "../_components/Header";
import Container from "../_components/container";
import GameBasic from "../_components/gameBasic";
import styles from "./page.module.css"

export default function Game() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <section className={styles.wrapper}>
                        <GameBasic />
                    </section>
                    <footer className={styles.cr}>©︎ GrayMickey. All Rights Reserved 2024.</footer>
                </Container>
            </main>
        </>
    )
}