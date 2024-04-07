import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './styles.module.scss'
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterCard() {
    return (
        <Card>
            <Card.Body className={styles.cardContainer}>
                <RegisterForm />
            </Card.Body>
        </Card>
    )
}

export default RegisterCard;