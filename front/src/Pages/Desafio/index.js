import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "./styles.module.scss"
import Select from '../../Components/Select';
import { TextEditor } from '../../Components/TextEditor/textEditor';
import { Recommended } from '../../Components/Recomended/recomended';

import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export function DesafioPage() {
    const languages = ['JavaScript', 'Python', 'C', 'PHP']; // GET das linguages do desafio
    const [correct, setIscorrect] = useState(false);
    const [color, setColor] = useState('red');

    useEffect(() => {
        if (correct)
            setColor('green');
        else if (correct == false)
            setColor('red');
        else
            setColor('black');
    }, [])

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
                    <Select options={languages} />
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ marginBottom: '1em' }}>
                    <TextEditor />
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ marginBottom: '2em' }}>
                    <Button variant="primary">Compilar Código</Button>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginBottom: '2em' }}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <div className={styles.output}>
                        Resultado esperado:
                        <div className={styles.expected}>
                            "Hello World"
                        </div>
                    </div>
                    <div className={styles.output}>
                        Resultado obtido:
                        <div className={styles.obtained} style={{ color: `${color}` }}>
                            "Hi Hi"
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}