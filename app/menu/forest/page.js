import Image from "next/image";
import { ButtonArticle } from "@/app/_components/Button";
import ArrowArticle from "@/app/_components/arrowArticle";
import Footer from "@/app/_components/Footer";
import data from '@/app/_components/dataBase'
import cx from "classnames";
import styles from "./page.module.css"
import { BlurImage3, BlurImage4 } from "@/app/_components/blurImage";

export default function Forest() {

    const z = data.contents
    const stories = z.filter(content => content.id == "forest")
    const{id,link,arrow,top,color} = {...stories[0]}

    return (
        <main className={styles.default}>
            <article className={styles.container} style={{'--back-color': color}}>
                <section className={styles.topWrapper}>
                    <div className={styles.mainImgContainer}>
                        <div className={styles.mainImg}>
                            <BlurImage3 src="/article/forest/mainImg.webp" alt="森林破壊" sizes="(min-width: 320px) 320px, 40vw"/>
                        </div>
                    </div>
                    <header>
                        <ButtonArticle img={link.img} imgHover={link.imgHover} title={link.title}/>
                    </header>
                    <div className={styles.arrow}>
                        <ArrowArticle title1={arrow.title1} title2={arrow.title2} id={id}/>
                    </div>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            {top.title}
                            <span>{top.subtitle}</span>
                        </h1>
                    </div>
                    <div className={styles.backImg1}>
                        <Image
                            src="/article/forest/backImg.svg"
                            alt=""
                            width={487}
                            height={150}
                        />
                    </div>
                    <div className={styles.textUnity}>
                        <h3>あなたも森林破壊の原因を作っているかもしれません</h3>
                        <p>企業が森林を伐採しているのは、私たちが普段の生活で、当たり前のように食べたり使ったりしているもの例えばチョコレートや石鹸やシャンプーの原料を生産するためです。
                            チョコレートの成分表を見てみると、多くの場合表示されている「植物油脂」。森林破壊の原因となっている「パーム油」を含む総称です。
                            植物油脂、植物油、ショートニング、界面活性剤、さまざまな名称で表記されているこのパーム油こそ、森林破壊の原因となっている原料の一つです。
                            他の植物油と比べて酸化しにくく熱に強く、コストも低いことから、食品や日用品の原料として大量に消費されています。
                            チョコレートをはじめ、マーガリンやポテトチップス、カレールー、シャンプーや洗剤口紅などの化粧品などに使われています。
                        </p>
                    </div>
                    <div className={styles.middleImgContainer}>
                        <div className={styles.middleImg}>
                            <BlurImage4 src="/article/forest/middle.webp" alt="オラウータン" sizes="(min-width: 576px) 576px, 50vw" />
                        </div>
                    </div>
                    <p className={styles.forestMiddleCap1}>左：<br/>生息地をおびやかされるオラウータン</p>
                    <h4 className={styles.forestMiddleCap2}>世界で増え続ける需要に応えるために、インドネシアやマレーシアの熱帯雨林が伐採されています。</h4>
                </section>
                <section className={styles.bottomContent}>
                        <div className={cx(styles.textUnity,styles.text2)}>
                            <h3>減少する世界の森林面積</h3>
                            <p>1990~2020年までの30年間に、世界の森林面積は1億7800万ヘクタール減少しました。これはアラスカ州に匹敵する広さです。今も年間平均1015万ヘクタールずつ減少し続けています。<br/>
                                森林、特に熱帯雨林は生命の宝庫として知られています。陸上生物の8割ほどが熱帯雨林をすみかにしていると言われます。
                                森林は、光合成によってCO2を吸収して酸素にかえ、大量のCO2を地中にとどめて気候変動を抑制しているだけでなく、人編にとっても地球全体にとっても重要な幾つもの役割を担っています。
                                失われてしまえば、社会と地球が崩壊しかねない存在です。森林破壊は、動植物の正措置を奪い、生態系のバランスを崩し、希少な動植物を絶滅の危機に晒しています。
                            </p>
                        </div>
                        <div className={cx(styles.textUnity,styles.text3)}>
                            <h3>森林破壊は私たちの生活と強く結びついています</h3>
                            <p>世界で肉の消費量が増え続ける中、肉の需要を満たすために行われる工業型畜産は、森林破壊の原因を作っています。
                                過剰な肉や乳製品の消費を減らし、野菜や果物中心の食生活を実践することは、森林破壊を食い止め、私たち自身にとっても健康な体を手に入れることにつながります。<br/>
                                日本における木材輸入は6割以上であり、その中には違法伐採によるものもあります。神パルプも同様です。
                                こうした違法伐採や森林破壊に加担しないために、FSCやPEFCなど森林認証を取得している商品であることを確かめて購入しましょう。
                                また、使い捨ての紙コップや容器などを減らし、洗って繰り返し使える容器や布袋などを使うことも重要です。<br/>
                                パーム油問題のことを知り、持続可能なパーム油しか使わないことを宣言する企業を調べ、その企業の製品を購入しましょう。
                                暮らしに欠かせない日用品に含まれているからこそ、森林を壊すことにつながる商品は使いたくない、という声を企業に届けることもとても大切です。<br/>
                                銀行の中には森林破壊に携わる企業が含まれている場合があります。森林破壊を促進しない投融資を行う企業を選びましょう。
                                方針を出していない銀行の口座を解約することも、森林破壊に加担しない重要な行動です。
                                自分がお金を預けている銀行が、どのような投融資の方針を持っているのかを知ることです。
                            </p>
                        </div>
                        <div className={styles.illust}>
                            <Image
                            src="/article/forest/illust.svg"
                            alt="ヤシの木"
                            width={320}
                            height={414}
                            />
                        </div>
                        <div className={styles.backImg2}>
                            <Image
                                src="/article/forest/backImg2.svg"
                                alt=""
                                width={623}
                                height={342}
                            />
                        </div>
                        <div className={styles.backImg3}>
                            <Image
                                src="/article/forest/backImg3.svg"
                                alt=""
                                width={309}
                                height={222}
                            />
                        </div>
                    </section>
                    <Footer />
            </article>
        </main> 
    )
}