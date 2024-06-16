import styles from './createForum.module.scss'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";
import { Recommended } from '../../Components/Recomended/recomended';
import Select from '../../Components/Select';

export function CreateForumPage() {
    const languages = ['Javascript', 'Python', 'C', 'PHP', 'C#', 'Java', 'Dart', 'Typescript']
    return (
        <>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='4' md='6' sm='12' className={styles.center}>
                    <div className={styles.title}>
                        Criar Fórum
                    </div>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='4' md='6' sm='12' className={styles.center}>
                    <Form className={styles.form}>
                        <div className={styles.challengeForm}>
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Control type="text" placeholder="Título do Fórum" className={styles.insideBox} style={{ fontSize: '1.6em', borderRadius: '0px' }} />
                            </Form.Group>
                        </div>
                        <div className={styles.challengeForm} style={{ height: '30em' }}>
                            <textarea type="text" placeholder="Descrição do Fórum" className={styles.insideBox} style={{ fontSize: '1.4em', borderRadius: '0px' }} />
                        </div>
                    </Form>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='4' md='6' sm='12' className={styles.center}>
                    <Button className={styles.btn}>Publicar Fórum</Button>
                </Col>
            </Row>
        </>
    )
}