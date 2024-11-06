import Image from "next/image";
import cx from "classnames";
import styles from "./index.module.css"

export default function ArrowArticle({title1,title2,id}) {


    return (
        <div className={cx(styles.container, id === "poverty" && styles.poverty)}>
            <h2>{title1}<br/><span>と</span><br/>{title2}</h2>
            <p className={styles.arrow}>
                { id === "poverty" ?
                    <Image
                        src="/article/poverty/arrow.svg"
                        alt=""
                        width={156}
                        height={156}
                    />
                    :
                    <Image
                        src="/article/arrow.svg"
                        alt=""
                        width={156}
                        height={156}
                    />
                }
            </p>
        </div>
    )
}