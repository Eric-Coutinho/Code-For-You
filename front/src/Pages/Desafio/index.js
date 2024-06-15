import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "./styles.module.scss"
import { Recommended } from '../../Components/Recomended/recomended';
import Select from '../../Components/Select';
import { TextEditor } from '../../Components/TextEditor/textEditor';

export function DesafioPage() {
    const languages = ['JavaScript', 'Python', 'C', 'PHP']; // GET das linguages do desafio

    return (
        <>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='4' md='6' sm='12' className={styles.center}>
                    <div className={styles.title}>
                        Desafio 1
                    </div>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='8' md='8' sm='12' className={styles.center}>
                    <div className={styles.description}>
                        Desafio 1 mt brabo lesgo. Mostra ai no console o "Hello word".
                    </div>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='8' md='8' sm='12' className={styles.center}>
                    <Recommended languages={languages} />
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='3' md='6' sm='6' className={styles.languages}>
                    <Select options={languages}/>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
            <Col lg='6' md='8' sm='12' className={styles.center}>
                <TextEditor />
            </Col>
            </Row>
        </>
    )
}