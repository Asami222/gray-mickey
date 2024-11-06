import styles from "./index.module.css"

export default function ArticleText({children}) {
    return (
        <div className={styles.textUnity}>
            {children}
        </div>
    )
}