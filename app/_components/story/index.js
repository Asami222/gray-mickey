import Image from "next/image";
import cx from "classnames";
import styles from "./index.module.css"

export default function Story({img,img2,width,height,width2,height2,text,id}) {

    return (
    
        <div className={cx(styles.piece,styles[`view${id}`])}>
            <div className={styles.img}>
                <Image
                src={img}
                alt=""
                width={width}
                height={height}
                loading="eager"
                unoptimized
                />
            </div>
            <p className={styles.text}>{text}</p>
            {img2 &&
            <div className={styles.img2}>
                <Image
                src={img2}
                alt=""
                width={width2}
                height={height2}
                loading="eager"
                unoptimized
                />
            </div>
            }
        </div>
        )
}