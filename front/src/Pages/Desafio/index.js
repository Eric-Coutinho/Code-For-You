import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "./styles.module.scss"

export function DesafioPage() {
    return (
        <>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col>
                </Col>
                <Col lg='4' md='6' sm='12' className={styles.center}>
                    <div className={styles.title}>
                        Desafio 1
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </>
    )
}