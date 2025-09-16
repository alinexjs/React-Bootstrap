import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//import de components
import CardCardapio from "../components/card-cardapio/card-cardapio";
import CarouselComponent from "../components/carrousel/carrousel";
import Animate from "../components/scroll-animate/scroll";
import CardsRow from "../components/card/card";
//import de imgs
import xicara from "../assets/xirc.png";
import logo from "../assets/logo-atual.png";
import brown from "../assets/logo-marrom.png";
//CSS
import "../App.css";
// imagens dos devs
import Aline from "../assets/Aliine.jpg";
import Fernanda from "../assets/Fernanda.jpg";
import Lais from "../assets/Lais.jpg";
import Kaique from "../assets/Kaique.jpg";
import Paula from "../assets/Paula.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CarouselComponent />

      <section className="corpo1">
        <Container >

          <Row className="align-items-center corpo1-row">
            <Col xs={12} md={4} className="text-center text-md-start">
              <img
                src={xicara}
                alt="Xícara Suricate"
                className="img-fluid xicara-img"
              />
            </Col>

            <Col xs={12} md={8}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", 
                  alignItems: "center",    
                  justifyContent: "center", 
                }}
              >
                <h2 className="home-title">
                  <img
                    src={logo}
                    alt="Logo-Suricate"
                    className="home-title-logo"
                  />
                  Conheça a Suricate
                </h2>

                <p className="home-text">
                  Sabor e cuidado em cada detalhe. Na Suricate, cada café é feito
                  com carinho e atenção! Nossos pães, doces e bebidas são
                  preparados diariamente, sempre fresquinhos, para você sentir o
                  verdadeiro prazer de cada mordida. Aqui, cada xícara conta uma
                  história de dedicação, qualidade e paixão pelo que fazemos.
                  Venha viver essa experiência!
                </p>

                <button
                  className="botao-suricate"
                  onClick={() => navigate("/conheca")} //cria navegação de rota ao clicar no botao
                >
                  Saiba Mais
                </button>
              </div>
            </Col>
          </Row>

        </Container>
      </section>

     
      <Animate /> {/* animação*/}

      <CardCardapio /> {/* card-cardapio*/}
      <br />
      <Container>
        <h2 className="team-title">
          <img
            src={brown}
            alt="Logo-Suricate"
            className="team-title-logo"
          />
          Acesse Nosso Cardápio
        </h2>
      </Container>
      <CardsRow /> {/* cads infinitos*/}

      {/* Seção Desenvolvedores */}
      <section className="team-section my-5">
        <Container>
          <div className="team-container">
            <h2 className="team-title">
              <img
                src={brown}
                alt="Logo-Suricate"
                className="team-title-logo"
              />
              Desenvolvedores
            </h2>

            <Row className="text-center justify-content-center g-4">
              <Col xs={6} sm={4} md={2}>
                <a
                  href="https://github.com/alinexjs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Aline}
                    alt="Aline Garcia"
                    className="rounded-circle img-fluid card-hover"
                  />
                </a>
                <h6 className="team-name">Aline Garcia</h6>
              </Col>

              <Col xs={6} sm={4} md={2}>
                <a
                  href="https://github.com/paulanatali"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Paula}
                    alt="Paula Natali"
                    className="rounded-circle img-fluid card-hover"
                  />
                </a>
                <h6 className="team-name">Paula Natali</h6>
              </Col>

              <Col xs={6} sm={4} md={2}>
                <a
                  href="https://github.com/MariaLays11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Lais}
                    alt="Maria Lais"
                    className="rounded-circle img-fluid card-hover"
                  />
                </a>
                <h6 className="team-name">Maria Lais</h6>
              </Col>

              <Col xs={6} sm={4} md={2}>
                <a
                  href="https://github.com/mfernandasf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Fernanda}
                    alt="Maria Fernanda"
                    className="rounded-circle img-fluid card-hover"
                  />
                </a>
                <h6 className="team-name">Maria Fernanda</h6>
              </Col>

              <Col xs={6} sm={4} md={2}>
                <a
                  href="https://github.com/Kaiquesf11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Kaique}
                    alt="Kaique"
                    className="rounded-circle img-fluid card-hover"
                  />
                </a>
                <h6 className="team-name">Kaique</h6>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <button
                className="botao-suricate"
                onClick={() => navigate("/Contato")} //cria navegação de rota ao clicar no botao
              >
                Entre em Contato
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
