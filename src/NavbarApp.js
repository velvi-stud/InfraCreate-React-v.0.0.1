import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/logo/infra64.png'

const NavbarApp = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: "2.5em", }} className="justify-content-left text-left">
                    <img src={logo} className="d-inline-block align-top" alt="" />
                    <h1 className='d-inline' style={{ color: "#0d6efd", }}>
                        &nbsp;Infra
                    </h1>
                    <h1 className='d-inline'>
                        Create
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        {/* NOTA as={Link} per le react-root */}
                        <Nav.Link as={Link} to="/home" className="mt-auto mb-auto" style={{ fontSize: "2em", textAlign: 'right', marginLeft: '30px' }}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className="mt-auto mb-auto" style={{ fontSize: "2em", textAlign: 'right', marginLeft: '30px' }}>
                            About us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/how-to-use" className="mt-auto mb-auto" style={{ fontSize: "2em", textAlign: 'right', marginLeft: '30px' }}>
                            How to use
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarApp;