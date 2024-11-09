import Image from "next/image";
import ArticleBase from "@/app/_components/articleBase"
import ArticleText from "@/app/_components/articleText";
import data from '@/app/_components/dataBase'
import cx from "classnames";
import styles from "./page.module.css"
import { BlurImage2 } from "@/app/_components/blurImage";
import {bear} from "@/public/article/land/bear.webp"

export default function Land() {

    const z = data.contents
    const stories = z.filter(content => content.id == "land")

    return (
        <ArticleBase {...stories[0]}>
            <ArticleText>
                <section className={styles.flexBasic}>
                    <div className={styles.bear}>
                        <BlurImage2 src="/article/land/bear.webp" alt="北極熊" width="1248" height="1100" sizes="(min-width: 624px) 624px, 50vw" />
                    </div>
                    <div className={styles.text}>
                        <h3>世界中の汚染物質が最終的に集まる場所</h3>
                        <p>世界各地で発生するダイオキシン類や農薬などの「残留性有機汚染物質(POPs)」と呼ばれる有害な化学物質は、遥か遠くの発生源から北極圏へ集まってきます。</p>
                        <p>遠い亜熱帯地域で散布された農薬の大部分は土壌にとどまることなく大気中に拡散し、気流に乗って北極圏に運ばれてきます。
                            また、先進国の大都市や、工場周辺から流れ込んだ河川の水も、灰釉と共に流されていきます。
                            結果として、北極や南極といった局地は、汚染濃度が発生地域よりも高くなる場合が少なくありません。
                        </p>
                        <p>また、海水に溶け込んだPOPsは、まず植物プランクトンの体内に入ります。
                            するとそれを食するプランクトン、さらにそれを食べる小魚へと少しずつ濃縮されながら、内臓や脂肪へ蓄積されて受け渡されていきます。
                            海水中にわずかな濃度で拡散していたPOPsは、食物連鎖を通じて徐々に生体濃縮を起こし、最終的に、
                            アザラシやホッキョクグマなど生態系の上位にいる動物ほど、高濃度のPOPsに晒されることになります。
                        </p>
                        <p>しかも、一度取り込まれたPOPsは、退社されないまま生物の体内に残留し続け、その子供達まで汚染が引き継がれていきます。有害物質による大気汚染は、世代を超えた脅威なのです。</p>
                    </div>
                </section>
                <section className={styles.flexBasic}>
                    <div className={styles.illust}>
                        <Image
                            src="/article/land/illust.svg"
                            alt="氷の上の生き物のイラスト"
                            width={485}
                            height={544}
                        />  
                    </div>
                    <div>
                        <div className={cx(styles.text, styles.text2)}>
                            <h3>プラスチック汚染を防ぐために私たちができること</h3>
                            <p>海洋プラスチック汚染を食い止めるためには、世界中の人々の意識と行動、そして社会システムの変革が必要不可欠です。
                                ライフスタイルやビジネス活動を根本から見直し、使い捨てプラスチックの利用を最大限に抑える必要がある。
                                日常生活の中でできることとして、マイボトルの活用や、過剰なパッケージを避けるなど、プラスチックごみの発生自体を減らすことが重要です。
                                行政による廃棄物処理制度の確立や、企業のプラスチック削減目標もまた大きな役割を担います。<br/>
                                今日では、科学技術の進展を活用し、環境負担の少ない新素材の開発や、再生可能なバイオプラスチックの利用拡大が期待されています。
                                そして、海を未来に受け継ぐために、世界中の人々が知恵を絞って行動を起こすことが求められています。
                                一人で始められること、仕事で携われることなど、自分の周りでもプラスチック問題の解決に貢献できることを探してみましょう。
                            </p>
                        </div>
                        <div className={styles.bear2}>
                            <Image
                                src="/article/land/bear2.webp"
                                alt="北極熊"
                                sizes="(min-width: 576px) 576px, 100vw"
                                width={1152}
                                height={400}
                            />
                        </div>
                    </div>
            </section>
            <section className={styles.flexBasic}>
                <div className={styles.glacier}>
                    <Image
                        src="/article/land/glacier.webp"
                        alt="氷河"
                        sizes="(min-width: 576px) 576px, 50vw"
                        width={1152}
                        height={800}
                    />
                </div>
                <div className={cx(styles.text, styles.text3)}>
                    <h3>北極熊を守る</h3>
                    <p>北極熊を守るためには、氷の海だけでなく、その食料になるアザラシや他の生き物も守らなければいけません。</p>
                    <p>北極圏の環境変化、そして、有害化学物質による汚染。北極熊をはじめとする、極北の野生を脅かす問題は、今や極めて深刻になりつつあります。</p> 
                    <p>私たちが北極熊を守ることは、北極圏の自然そのものを保全することにつながります。そして、そのことは、遠く離れた橋の自然を守り、地球全体の自然を守ることでもあります。</p>
                </div>
            </section>
            
            </ArticleText>
        </ArticleBase>
    )
}
