import styles from './recommended.module.scss'

export function Recommended(languages) {
    const linguagens = languages.languages;

    return (
        <div className={styles.grid}>
            <div className={styles.box}>
                Linguagens Recomendadas
            </div>

            <div className={styles.pills}>
                {linguagens.map((linguagem, index) => {
                    return (
                        <div className={styles.pill} key={index}>
                            {linguagem}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}