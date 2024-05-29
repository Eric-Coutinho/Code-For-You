import styles from "./styles.module.scss"

import Select from "../../Components/Select"
import Cards from "../../Components/Cards";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
    let options = ["Dificuldade", "Mais Recente", "Mais Completado", "Menos Completado"]
    return (
        <>
            <Row>
                <div className={styles.body}>
                    <div className={styles.title}>
                        Desafios
                    </div>
                    <div className={styles.filter}>
                        <Select label={"Filtrar"} options={options} />
                        <button className={styles.btn}>Criar desafio</button>
                    </div>
                </div>
            </Row>
            <Row>
                <Col lg='4' md='6' sm='12' className={styles.coluna}>
                    <Cards title={'Desafio 1'} description={'Desafio mt brabo lesgo'} />
                </Col>
                <Col lg='4' md='6' sm='12' className={styles.coluna}>
                    <Cards title={'Desafio 2'} description={'Desafio 2 mt brabo lesgo'} />
                </Col>
                <Col lg='4' md='6' sm='12' className={styles.coluna}>
                    <Cards title={'Desafio 3'} description={'Desafio 3 mt brabo lesgo'} />
                </Col>
            </Row>
        </>
    )
}