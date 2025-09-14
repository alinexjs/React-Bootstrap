import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "../components/carrousel/carrousel";
import Animate from "../components/scroll-animate/scroll";
import CardsRow from "../components/card/card";
import xicara from "../assets/xirc.png";
import Button from "react-bootstrap/Button";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //const navigate = useNavigate(); // função de navegação

  return (
    <div>
      <CarouselComponent />

      <section className="corpo1">
        <Container>
          <Row className="align-items-center" style={{ columnGap: "200px" }}>
            <Col md={4}>
              <img src={xicara} alt="Xícara Suricate" className="img-fluid" />
            </Col>

            <Col md={6}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702", fontWeight: "500" }}>
                Conheça a Suricate
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
                Sabor e cuidado em cada detalhe. Na Suricate, cada café é feito com carinho e atenção! Nossos pães,
                doces e bebidas são preparados diariamente, sempre fresquinhos, para você sentir o verdadeiro prazer de
                cada mordida. Aqui, cada xícara conta uma história de dedicação, qualidade e paixão pelo que fazemos. Venha viver essa experiência!
              </p>
              <button className="botao-suricate" > {/*onClick={() => navigate("/conheca")}*/}
                Saiba Mais
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <Animate />
      <CardsRow />
    </div>
  );
};

export default Home;
