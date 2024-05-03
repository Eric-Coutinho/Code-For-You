import Select from "../../Components/Select"
import styles from "./styles.module.scss"

import Button from 'react-bootstrap/Button';

export default function Home() {
    let options = ["Dificuldade", "Mais Recente", "Mais Completado", "Menos Completado"]
    return(
        <div className={styles.body}>
            <div className={styles.title}>
                Desafios
            </div>
            <div className={styles.filter}>
                <Select label={"Filtrar"} options={options}/>
                <button className={styles.btn}>Criar desafio</button>
            </div>
        </div>
    )
}