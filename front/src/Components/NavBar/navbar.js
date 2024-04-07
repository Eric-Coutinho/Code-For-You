import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Link, Outlet, useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navContainer}>
            <Container className={styles.container} style={{ margin: '0' }}>
                <Navbar.Brand>
                    <Link
                        to="/"
                        className={styles.link}
                    >
                        Code For You
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/desafios" className={styles.link}>
                            <Nav.Link href='/desafios' style={{ color: 'white' }}>
                                Desafios
                            </Nav.Link>
                        </Link>
                        <Link to="/forums" className={styles.link} >
                            <Nav.Link href='/forums' style={{ color: 'white' }}>
                                Fórums
                            </Nav.Link>
                        </Link>
                        <Link to="/about" className={styles.link} >
                            <Nav.Link href='/about' style={{ color: 'white' }}>
                                Sobre Nós
                            </Nav.Link>
                        </Link>
                        <Link to="/login" className={styles.link}>
                            <Nav.Link href='/login' style={{ color: 'white' }}>
                                Login
                            </Nav.Link>
                        </Link>
                        <Link to="/register" className={styles.link}>
                            <Nav.Link href='/register' style={{ color: 'white' }}>
                                Registro
                            </Nav.Link>
                        </Link>
                        <Link to="/login" className={styles.link}>
                            <Nav.Link href='/login' style={{ color: 'white' }}>
                                {/* chamar funcao de remover token  */}
                                Sair
                            </Nav.Link>
                        </Link>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
