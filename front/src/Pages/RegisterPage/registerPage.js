import RegisterCard from "../../Components/RegisterCard/RegisterCard";

import Container from 'react-bootstrap/Container';

import styles from './styles.module.scss'

export function RegisterPage() {
    return (
        <Container fluid className={styles.container}>
            <h1 className={styles.title}>Registro</h1>
          <RegisterCard />  
        </Container>
        
    )
}
