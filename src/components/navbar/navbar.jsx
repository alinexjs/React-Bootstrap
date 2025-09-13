import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Navimg from "../../assets/logo-atual.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);

  // Detecta scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scroll ? "navbar-scrolled" : ""}`}
    >
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-center"
        >
          <div className="d-flex align-items-center">
            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="me-5">
              <img src={Navimg} alt="Logo" className="nav-logo" />
            </Navbar.Brand>

            {/* Links */}
            <Nav className="nav-links" navbarScroll>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/conheca">Conheça</Nav.Link>
              <Nav.Link as={Link} to="/cardapio">Cardápio</Nav.Link>
              <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
