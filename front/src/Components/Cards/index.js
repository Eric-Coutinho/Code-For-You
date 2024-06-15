import styles from "./styles.module.scss"

export default function Cards({ title, description, onClick, likes, coments, postID }) {
    return (
        <div className={styles.cardBody} onClick={onClick}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}

