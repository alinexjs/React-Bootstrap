
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navimg from "../../assets/logo-atual.png";
import './navbar.css';

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);

  // Detecta scroll da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-custom ${scroll ? "navbar-scrolled" : ""}`}>
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <div className="d-flex align-items-center">
            {/* Logo */}
            <Navbar.Brand href="#" className="me-5">
              <img
                src={Navimg}
                alt="Logo"
                className="nav-logo"
              />
            </Navbar.Brand>

            {/* Links */}
            <Nav className="nav-links" navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Conheça</Nav.Link>
              <Nav.Link href="#action2">Cardápio</Nav.Link>
              <Nav.Link href="#action2">Contato</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

