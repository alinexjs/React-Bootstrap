import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"; 
import imgFooter from "../../assets/footer-img.png";

const Footer = () => {
  return (
    <footer className="footer text-white py-4">
      {/* Imagem da xícara no topo do footer */}
      <div className="cup-image text-center mb-3">
        <img src={imgFooter} alt="Xícara" className="img-fluid" />
      </div>

      <Container>
        {/* Links do Navbar */}
        <Row>
          <Col className="text-center">
            <ul className="list-inline footer-links">
              <li className="list-inline-item"><a href="#">HOME</a></li>
              <li className="list-inline-item"><a href="#">CONHEÇA</a></li>
              <li className="list-inline-item"><a href="#">CARDÁPIO</a></li>
              <li className="list-inline-item"><a href="#">CONTATO</a></li>
              </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} | Todos os direitos reservados.</p>
          </Col>
        </Row>

        {/* Redes sociais */}
        <Row className="mt-3">
          <Col className="text-center">
            <div className="d-flex justify-content-center gap-3">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-tiktok"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </Col>
        </Row>

        {/* Botão WhatsApp */}
        <Row className="mt-3">
          <Col className="text-center">
            <a href="#" className="btn btn-outline-light rounded-pill px-4">
              <i className="bi bi-whatsapp"></i> WHATSAPP
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
