import styles from "./forum.module.scss"

import Select from "../../Components/Select"
import Cards from "../../Components/Cards";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

const forum1 = {
    id: 0,
    title: 'Fórum 1',
    description: 'Whitespace é a melhor linguagem que existe.'
}
const forum2 = {
    id: 1,
    title: 'Fórum 2',
    description: 'Odeio Java. Tudo torto eca.'
}
const forum3 = {
    id: 2,
    title: 'Fórum 3',
    description: 'Javascript é mt legal, todo mundo deveria aprender.'
}

export function ForumsPage() {
    const navigate = useNavigate();
    const forums = [forum1, forum2, forum3, forum1, forum2, forum3]; // fazer get de todos os forums

    let options = ["Mais Recente", "Mais Visitado", "Mais Curtido"]
    return (
        <>
            <Row>
                <div className={styles.body}>
                    <div className={styles.title}>
                        Fórums
                    </div>
                    <div className={styles.filter}>
                        <Select options={options} />
                        <button className={styles.btn} onClick={() => navigate('/create/forum')}>Criar Fórum</button>
                    </div>
                </div>
            </Row>
            <Row>
                {forums.map((forum, key) => {
                    return (
                        <Col lg='4' md='6' sm='12' className={styles.coluna} key={key}>
                            <Cards title={`${forum.title}`} description={`${forum.description}`} id={`${forum.id}`} key={forum.id} onClick={() => navigate('/forum')} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}
