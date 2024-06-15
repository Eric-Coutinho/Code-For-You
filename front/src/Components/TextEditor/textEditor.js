import styles from './textEditor.module.scss'

export function TextEditor() {
    return (
        <div className={styles.outsideBox}>
            <div className={styles.insideBox}> 
            {/* // EDITOR DE TEXTO AQUI*/}
                Text Editor 
            </div>
        </div>
    )
}