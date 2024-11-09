import Image from "next/image";
import { ButtonArticle } from "@/app/_components/Button";
import ArrowArticle from "@/app/_components/arrowArticle";
import Footer from "../Footer";
import cx from "classnames";
import styles from "./index.module.css"
import { BlurImage3 } from "../blurImage";

export default function ArticleBase({children,id,link,arrow,top,color = 'initial'}) {
 
    return (
        <main className={cx(styles.default, styles[`${id}`])}>
            <div className={styles.container} style={{'--back-color': color}}>
                    { id === 'fashion' &&
                        <div className={styles.mainImgContainer}>
                            <div className={styles.mainImg}>
                                <BlurImage3 src="/article/fashion/main.webp" alt="" sizes="100vw"/>
                            </div>
                        </div>
                    }    
                <div className={styles.topWrapper}>
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
                        { id === 'sea' &&
                        <p>
                            <Image
                                src="/article/sea/backImg.svg"
                                alt=""
                                width={510}
                                height={230}
                            />
                        </p>
                        }
                    </div>
                    { id === 'land' &&
                        <div className={styles.ice}>
                        <Image 
                            src="/article/land/ice.png"
                            alt=""
                            width={546}
                            height={324}
                        />
                        </div>
                    }
                    { id === 'poverty' &&
                        <>
                        <div className={styles.povertyImgContainer}>
                            <div className={styles.povertyImg}>
                                <BlurImage3 src="/article/poverty/mainImg.webp" alt="貧困" sizes="(min-width: 576px) 576px, 100vw" />
                            </div>
                        </div>
                        <div className={styles.povertyIllust}>
                            <Image
                                src="/article/poverty/illust.svg"
                                alt=""
                                width={510}
                                height={230}
                            />
                        </div>
                        </>
                    }
                </div>
                <article>
                {children}
                </article>
                <div className={styles.footer}>
                <Footer />
                </div>
            </div>
        </main> 
    )
}