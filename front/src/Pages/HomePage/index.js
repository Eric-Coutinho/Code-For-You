import styles from "./styles.module.scss"

import Select from "../../Components/Select"
import Cards from "../../Components/Cards";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

const desafio1 = {
    id: 0,
    title: 'Desafio 1',
    description: 'Desafio 1 mt brabo lesgo'
}
const desafio2 = {
    id: 1,
    title: 'Desafio 2',
    description: 'Desafio 2 mt brabo lesgo'
}
const desafio3 = {
    id: 2,
    title: 'Desafio 3',
    description: 'Desafio 3 mt brabo lesgo'
}

export default function Home() {
    const navigate = useNavigate();
    const challenges = [desafio1, desafio2, desafio3, desafio1, desafio2, desafio3]; // fazer get de todos os desafios

    let options = ["Dificuldade", "Mais Recente", "Mais Completado", "Menos Completado"]
    return (
        <>
            <Row>
                <div className={styles.body}>
                    <div className={styles.title}>
                        Desafios
                    </div>
                    <div className={styles.filter}>
                        <Select options={options} />
                        <button className={styles.btn}>Criar desafio</button>
                    </div>
                </div>
            </Row>
            <Row>
                {challenges.map((challenge, key) => {
                    return (
                        <Col lg='4' md='6' sm='12' className={styles.coluna}>
                            <Cards title={`${challenge.title}`} description={`${challenge.description}`} id={`${challenge.id}`} key={challenge.id} onClick={() => navigate('/desafio')} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}