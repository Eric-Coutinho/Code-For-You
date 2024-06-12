import styles from "./styles.module.scss"

import Container from 'react-bootstrap/Container';

export default function Cards({ title, description, onClick }) {
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

