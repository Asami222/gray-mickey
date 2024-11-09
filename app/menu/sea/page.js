import Image from "next/image";
import ArticleBase from "@/app/_components/articleBase"
import ArticleText from "@/app/_components/articleText";
import data from '@/app/_components/dataBase'
import cx from "classnames";
import styles from "./page.module.css"
import { BlurImage2 } from "@/app/_components/blurImage";
import {turtle} from '@/public/article/sea/turtle.webp'

export default function Sea() {

    const z = data.contents
    const stories = z.filter(content => content.id == "sea")

    return (
        <ArticleBase {...stories[0]}>
            <ArticleText>
            <section className={styles.flexBasic}>
                <div className={styles.text}>
                    <h3>マイクロプラスチックの存在を知ってください。
                        私たち人間にも関係することです。
                    </h3>
                    <p>マイクロプラスチックとは、5mm以下のプラスチック片のことです。<br/>
                        魚や海亀が餌と間違えて誤飲するなどして体に取り込みやすいものです。
                        それが食物連鎖を通じて影響が広範囲に広がっていくことが考えられています。
                        さらに、マイクロプラスチックに含まれる添加物などの有害化学物質が、生体内に蓄積されることで慢性的な健康被害も指摘されています。
                        この問題は、魚を食べる私たち人間にも関係することでもあります。
                    </p>
                    <h3>海亀がプラスチックを誤飲する理由とは、匂い？</h3>
                    <p>今まで、誤飲の原因は透明または半透明のプラスチック製品を、自然界の餌であるクラゲや他のゼラチン質の生物と見分けがつきにくいからという説があった。
                        しかし、2020年に発表された、海亀の調査と保護を行うカレッタリサーチプロジェクトの研究員らの研究結果から、
                        海亀がプラスチックごみを食べてしまうのは、海を漂うプラスチックに付着する藻類や微生物のニオイが原因だということが明らかになりました。
                        藻類もまた海亀の餌であり、その匂いで餌と認識していたということです。
                    </p>
                </div>
                <div className={styles.line1}>
                    <Image
                        src="/article/sea/line1.svg"
                        alt=""
                        width={770}
                        height={270}
                    />
                </div>
                <div className={styles.turtle}>
                    <BlurImage2 src="/article/sea/turtle.webp" alt="海亀" width="1248" height="876" sizes="(min-width: 624px) 624px, 50vw"/>
                </div>
                <div className={styles.garbage3}>
                    <Image
                        src="/article/sea/pla.webp"
                        alt="買い物袋のゴミ"
                        sizes="(min-width: 210px) 210px, 30vw"
                        width={420}
                        height={538}
                    />
                </div>
            </section>
            </ArticleText>
            <div className={styles.middleContents}>
                <div className={styles.garbage5}>
                    <Image
                        src="/article/sea/garbageM.webp"
                        alt="海のゴミ"
                        sizes="(min-width: 614px) 614px, 80vw"
                        width={900}
                        height={450}
                    />
                </div>
                <div className={styles.garbage1}>
                    <Image
                        src="/article/sea/garbage1.webp"
                        alt="海のゴミ"
                        sizes="(min-width: 272px) 272px, 40vw"
                        width={544}
                        height={544}
                    />
                </div>
                <div className={styles.garbage4}>
                    <Image
                        src="/article/sea/garbage3.png"
                        alt="買い物袋のゴミ"
                        sizes="(min-width: 210px) 210px, 30vw"
                        width={420}
                        height={538}
                    />
                </div>
                <p className={styles.middleText}>匂いで食べ物と勘違いします</p>
                <div className={styles.illust}>
                    <Image
                        className={styles.turtleIllust}
                        src="/article/sea/illust.svg"
                        alt="海亀のイラスト"
                        width={490}
                        height={395}
                    />
                </div>
                <div className={styles.garbage2}>
                    <Image
                        src="/article/sea/garbage2.webp"
                        alt="プラスチックごみ"
                        sizes="(min-width: 272px) 272px, 40vw"
                        width={544}
                        height={1152}
                    />
                </div>
            </div>
            <ArticleText>
            <section className={cx(styles.flexBasic, styles.bottomContents)}>
                <div className={styles.text2}>
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
                <div className={styles.line2}>
                    <Image
                        src="/article/sea/line1.svg"
                        alt=""
                        width={770}
                        height={270}
                    />
                </div>
                <div className={styles.sea}>
                    <Image
                        src="/article/sea/sea.webp"
                        alt="海の中"
                        sizes="(min-width: 572px) 572px, 90vw"
                        width={1144}
                        height={800}
                    />
                </div>
            </section>
            </ArticleText>
        </ArticleBase>
    )
}