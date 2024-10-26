import Image from "next/image";
import Link from "next/link";
import { Nothing_You_Could_Do } from "next/font/google";
import { ButtonAbout } from "../_components/Button";
import Footer from "../_components/Footer";
import Container from "../_components/container";
import styles from "./page.module.css"

const logo = Nothing_You_Could_Do({ subsets: ["latin"], weight: ["400"] });

export default function About() {

    return (
        <div className={styles.wrapper}>
            <Container>
            <div className={styles.topFlex}>
                <ButtonAbout />
                <main className={styles.main}>
                    <div className={styles.titleFlex}>
                        <div className={styles.title}>
                            <h1 className={logo.className}>About<br /><span>Gray Mickey</span></h1>
                        </div>
                        <div className={styles.img}>
                            <Image
                                src="/about/mickey.svg"
                                alt="ミッキーマウス"
                                width={187}
                                height={305}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p>生きていると、ちょっとこれはおかしいなとか、納得いかないことがある。<br />本当に知らなければいけないこと、真実が報道されていないような気がするし、隠されてさえいるような気がする。このまま知らないふりや見て見ぬ振りをしていても本当にいいのだろうか？</p>
                        <p>おかしいことをおかしいと言わないで我慢していたり、発言することを諦めたり、無駄だと思ったり、みんながそう思っていたら世の中は一向に良くならない。あなたと同じように思っている人がきっと必ずどこかにいる。</p>
                        <p>身の回り、私たちが住む国、そして世界中には今多くの問題が存在している。真実を知って、今を生きる人々やあらゆる生き物のために、そして未来のために、少しづつでも問題を解決していきたい。それにはどうすれば良いんでしょう？</p>
                        <p>情報を発信したり、集めたり、知ったりできるようにしたいと思いこのサイトを作りました。ちょっとモヤっとする完全に黒ではないグレーな話やこれらのことに対してのあなたの意見をぜひ聞かせてください。</p>
                        <Link href="/">メッセージを送る</Link>
                    </div>
                </main>
            </div>
            </Container>
            <Footer />
        </div>
        
    )
}