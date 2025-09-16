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

       
      </Container>
    </footer>
  );
};

export default Footer;
