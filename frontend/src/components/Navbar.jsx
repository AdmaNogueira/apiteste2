import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import celestelogo2 from '../assets/celestelogo2.png'

import "./Navbar.css";

const NavbarReact = () => {
  return (
    <div>
          <Navbar className="colornav" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className="navbarimg"
            src={celestelogo2}
            alt="Celeste"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/menu">Cursos</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarReact
