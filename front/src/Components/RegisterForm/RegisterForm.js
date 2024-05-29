import { Link, useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './styles.module.scss'

function RegisterForm() {
    const navigate = useNavigate();

    return (
        <Form className={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="email" placeholder="Insira seu nome..." style={{ padding: '1em' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Endereço de email..." style={{ padding: '1em' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha..." style={{ padding: '1em' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar Senha</Form.Label>
                <Form.Control type="password" placeholder="Confirmar senha..." style={{ padding: '1em' }} />
            </Form.Group>
            <Button variant="primary" style={{ backgroundColor: '#3A4CED', fontSize: '1.15em' }}>
                <Link to="/login" className={styles.link}>
                    Registrar
                </Link>
            </Button>
            <Button variant="danger" style={{ marginBlock: '0.5em', fontSize: '1.15em' }} onClick={() => navigate('/login')}>
                    Cancelar
            </Button>
        </Form>
    )
}

export default RegisterForm;