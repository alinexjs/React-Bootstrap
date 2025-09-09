import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../navbar/index.css"

const NavbarComponent = () => {
    return (
         <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light'>Meu Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="#home">Início</Nav.Link>
            <Nav.Link className='text-light' href="#sobre">Sobre</Nav.Link>
            <Nav.Link className='text-light' href="#contato">Contato</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar..."
              className="me-2"
              aria-label="Pesquisar"
            />
            <Button variant="primary">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavbarComponent;
