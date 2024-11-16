import Image from "next/image";
import ArticleBase from "@/app/_components/articleBase"
import ArticleText from "@/app/_components/articleText";
import data from '@/app/_components/dataBase'
import cx from "classnames";
import styles from "./page.module.css"

export default function Fashion() {

    const z = data.contents
    const stories = z.filter(content => content.id == "fashion")

    return (
        <ArticleBase {...stories[0]}>
            <ArticleText>
            <section className={cx(styles.flexBasic, styles.topContents)}>
                <h3>服の使い捨てはやめましょう</h3>
                <div className={styles.text}>
                    <p>
                        日本でも世界の流れと同様、2000年代に入る頃からファストファッションブームが拡大し、ファッションのあり方は大きく様変わりしました。<br/>
                        「服は使い捨てるもの」という前提のもと、メーカーは次々にトレンドに合わせた服を大量に生産します。
                        そしてその後、供給された衣料品のうち約４割は売れ残り、処分されていると推定されています。<br/>                       
                        洋服を購入する私たちも、以下に流行の服をコストパフォーマンスよく手に入れるかに目を向けがちです。
                        一方で、断捨離と称してたくさん服を捨て、また新しい服を購入する、そんなことを繰り返しています。
                        過剰生産で過剰消費・過剰廃棄というサイクルが、現代におけるファッションの当たり前となっているのです。
                    </p>
                </div>
                <div className={styles.girl2}>
                        <Image
                            src="/article/fashion/girl.svg"
                            alt="洋服を購入した女性のイラスト"
                            width={209}
                            height={366}
                        />
                </div>
            </section>
            <section className={styles.middleContents}>
                    <div className={styles.girl}>
                        <Image
                            src="/article/fashion/illust.png"
                            alt="洋服を購入した女性のイラスト"
                            width={209}
                            height={366}
                        />
                    </div>
                    <h3 className={styles.middleCap}>
                        砂漠に積み重なる<br/>
                        「服の山」。<br/>
                        化学繊維の衣料は<br/>
                        焼却ができない。
                    </h3>
                    <div className={styles.garbageContainer}>
                    <div className={styles.garbage}>
                        <Image
                            src="/article/fashion/garbage.webp"
                            alt="ごみの山"
                            fill
                            sizes="(min-width: 272px) 272px, 50vw"
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h3>服を作る過程で起きる深刻な環境問題</h3>
                        <p>紡績や製織には、大量の水とエネルギーが使われます。<br/>
                            アパレルが急速に拡大すれば、大量の水の汚染やエネルギー消費によるCO2が発生します。
                            中でも最もエネルギーを使うのが、ナイロン、ポリエステル、アクリルなどの合成繊維です。
                            合成繊維は石油が原料として使われ、その採取や生成過程において電気が使われます。合成繊維のポリエステルに関するCO2排出量は綿の3倍です。<br/>
                            医療の製造過程では、水と共に有害物質が使用され、その一部は河川に放出され水質汚染を引き起こします。
                        </p>
                        <h3>マイクロファイバーによる河川や海洋汚染</h3>
                        <p>今やアパレル業界は、合成繊維から染料・加工剤に至るまで、化学製品に依存しています。その多くは難分解性。
                            つまり、自然に分解されることなく環境中に残留し問題となっています。<br/>
                            近年世界で大きな問題として考えられているのが、ポリエステルやアクリルといった合成繊維から発生するマイクロファイバーによる海洋汚染です。
                            合成繊維の服からは、たくさんの微細な繊維のマイクロファイバーが抜け落ちることが複数の研究でわかっています。
                            洗濯によって抜け落ちたマイクロファイバーが海洋生物に飲み込まれて備蓄していくことで、海洋生態系に何らかの影響を及ぼす可能性が指摘されています。
                        </p>
                    </div>  
            </section>
            <section className={cx(styles.flexBasic,styles.bottomContents)}>
                <div className={styles.text}>
                    <h3>大量消費から抜け出し、長く使う生活へ</h3>
                    <p>今現在世界規模で見れば、衣料品の生産量と消費量は拡大を続けており、ファッション業界は持続「不可能」な成長を続けています。<br/>
                        ファッション業界の成長を支えているのは、ファストファッションに多用される安価な合成繊維です。
                        生産時に大きな負担をかけ、廃棄する時にも分解されないこれらの素材は自然界に対する負担になります。
                        供給する側も、使い手である私たちも、「使い捨てが当たり前」の文化を根本から見直さなければ、問題の解決にはつながりません。<br/>
                        使ってリサイクルすれば良いと思うかもしれないですが、現時点ではどの技術も採算が取れるものではなく、行う企業はほんの数社です。<br/>
                        耐久性があり、修理やリユースができて、長年愛用できる。そして寿命を終えたら完全にリサイクルできる。
                        そんな洋服と仕組みを企業が作り、私たちは選んでいく必要があります。
                        半永久的に循環する仕組みこそ、これからの社会にふさわしい唯一のファッションのあり方と言えるのではないでしょうか。
                    </p>
                </div>
                <div className={styles.bottomImg}>
                    <Image
                        src="/article/fashion/bottomImg.webp"
                        alt="ファッションブランドショップ"
                        sizes="(min-width: 576px) 576px, 50vw"
                        width={1152}
                        height={800}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}  
                    />
                </div>
            </section>
            </ArticleText>
        </ArticleBase>
    )
}