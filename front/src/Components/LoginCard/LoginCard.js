import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './styles.module.scss'
import LoginForm from '../LoginForm/loginForm';

function LoginCard() {
    return (
        <Card>
            <Card.Body className={styles.cardContainer}>
                <LoginForm />
            </Card.Body>
        </Card>
    )
}

export default LoginCard;