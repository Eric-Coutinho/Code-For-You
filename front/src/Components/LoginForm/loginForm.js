import { Link, Outlet, useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './styles.module.scss'

function LoginForm() {
    return (
        <Form className={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Endereço de email..." style={{ padding: '1em' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha.." style={{ padding: '1em' }} />
            </Form.Group>
            <Button variant="primary" style={{ backgroundColor: '#3A4CED', fontSize: '1.15em' }}>
                <Link to="/" className={styles.link}>
                    Entrar
                </Link>
            </Button>
            <Button variant="danger" style={{ marginBlock: '0.5em', fontSize: '1.15em' }}>
                <Link to="/register" className={styles.link}>
                    Registrar
                </Link>
            </Button>
        </Form>
    )
}

export default LoginForm;