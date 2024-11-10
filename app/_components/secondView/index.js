
import Image from "next/image";
import LayoutBasic from "../layoutBasic";
import SlideShow from "../slideShow";
import ContactForm from "../ContactForm";
import Container from "../container";
import cx from "classnames";
import styles from "./index.module.css"

export default function SecondView({count}) {

    return (
        <div className={cx(styles.wrapper, count === 0 ? styles.fadeIn : '')}>
            <LayoutBasic>
                <div className={styles.main}>
                    <SlideShow />
                    <div id="contact" className={styles.contact}>
                        <Container>
                            <div className={styles.mickey}>
                                <div >
                                    <Image
                                        src="/home/mickey.svg"
                                        alt=""
                                        width={154}
                                        height={154}
                                        />
                                </div>
                                <p>あなたのANGRYなエピソード、<br/>理不尽な話、社会問題についての意見など募集しています！<br/>是非お話を聞かせてください。</p>
                            </div>
                            <ContactForm />
                        </Container>
                    </div>
                    <div className={styles.section}>
                        <Image
                        src="/home/sectionImg.svg"
                        alt=""
                        sizes="100vw"
                        width={1280}
                        height={130}
                        style={{width: '100%', height: 'auto'}}
                        />
                    </div>
                </div>
            </LayoutBasic>
        </div>
    )
}