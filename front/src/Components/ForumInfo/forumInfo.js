import styles from './forumInfo.module.scss'

export function ForumInfo() {
    const likes = 100;
    const coments = 10;

    return (
        <div className={styles.grid}>
            <div className={styles.pills}>
                <div className={styles.pill}>
                    {likes} likes
                </div>
                <div className={styles.pill}>
                    {coments} comentários
                </div>
            </div>
        </div>
    )
}