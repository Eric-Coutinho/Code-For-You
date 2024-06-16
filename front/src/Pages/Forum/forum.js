import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "./forum.module.scss"
import Button from 'react-bootstrap/Button';

import { ForumInfo } from '../../Components/ForumInfo/forumInfo';
import { TextEditor } from '../../Components/TextEditor/textEditor';

import User from '../../Img/DefaultUser.webp'

export function ForumPage() {
    const likes = 100;
    const coments = 10;

    return (
        <>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='4' md='6' sm='12' className={styles.center}>
                    <div className={styles.title}>
                        Fórum 1
                    </div>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='8' md='8' sm='12' className={styles.center}>
                    <div className={styles.description}>
                        Whitespace é a melhor linguagem que existe.
                    </div>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='8' md='8' sm='12' className={styles.center}>
                    <ForumInfo />
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='3' md='6' sm='6' className={styles.languages}>
                    <div className={styles.buttons}>
                        <Button variant="primary" className={styles.btn}>
                            Curtir
                        </Button>
                        <Button variant="danger" className={styles.btn}>
                            Não curti
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ marginBottom: '1em' }}>
                    <TextEditor language={'markdown'} />
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginTop: '2em' }}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ marginBottom: '2em' }}>
                    <Button variant="primary">Comentar</Button>
                </Col>
            </Row>
            <Row className={styles.center} style={{ marginBottom: '0.5em' }}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ flexDirection: 'column', alignItems: 'center', paddingInline: '2em' }}>
                    <div className={styles.output}>
                        <div className={styles.insideBox}>
                            <div className={styles.userInfo}>
                                <img src={User} className={styles.userPicture}></img>
                                <div className={styles.userName}>Nome do Usuário</div>
                            </div>
                            <div className={styles.comment}>
                                Comentário mt legal aqui. Eu concordo com vc :D
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={styles.center}>
                <Col lg='6' md='8' sm='12' className={styles.center} style={{ flexDirection: 'column', alignItems: 'center', paddingInline: '2em' }}>
                    <div className={styles.infoArea}>
                        <div className={styles.info}>
                            {likes} likes
                        </div>
                        <div className={styles.info}>
                            {coments} comentários
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}