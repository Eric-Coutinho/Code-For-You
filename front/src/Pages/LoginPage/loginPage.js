import LoginCard from "../../Components/LoginCard/LoginCard";

import Container from 'react-bootstrap/Container';

import styles from './styles.module.scss'

function LoginPage() {
    return (
        <Container fluid className={styles.container}>
            <h1 className={styles.title}>Login</h1>
          <LoginCard />  
        </Container>
        
    )
}

export default LoginPage;
