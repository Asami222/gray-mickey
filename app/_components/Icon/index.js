
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import styles from "./index.module.css"

export default function Icon({title,img,width,height,name}) {

    return (
        <div className={cx(styles.container,styles[`${name}`])}>
            <Link href={`/menu/${name}`} className={name === 'sea' && styles.turtle}>
                <Image
                    src={img}
                    alt={title}
                    width={width}
                    height={height}
                />
            </Link>
            <h4>{title}</h4>
        </div>
    )
}