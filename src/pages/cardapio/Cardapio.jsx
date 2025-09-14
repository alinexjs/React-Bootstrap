import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../../components/navbar/navbar.jsx";
import Card from 'react-bootstrap/Card';

// Componente auxiliar para cada card
function CardsLinha({titulo, texto, imagem }) {
  return (
    <Col sm={12} md={4}>
      <Card className="h-100">
        <Row className="g-0 h-100">
          <Col sm={12} md={4}>
            <Card.Img src={imagem} alt="" className="h-100" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{titulo}</Card.Title>
              <Card.Text>{texto}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

// Componente principal da página
function Cardapio() {
  return (
    <>
      <NavbarComponent />
      <main style={{ paddingTop: "80px" }}>
      <Container className="my-4">
        <Row className="g-3">
          <CardsLinha
            titulo="Frapê Capuccino"
            texto="Açúcar, leite integral, soro de leite, café solúvel, maltodextrina, cacau, espessante carboximetilcelulose sódica e regulador de acidez bicarbonato de sódio."
            imagem="https://www.bongusto.ind.br/wp-content/uploads/2023/06/FRAPE-CAPUCCINO14.jpg"
          />
          <CardsLinha
            titulo="Bolo de chocolate cremoso"
            texto="Este é um bolo de chocolate com creme de leite na massa, por isso a massa fica fofinha e ligeiramente úmida. É uma verdadeira tentação para todos que amam chocolate e bolos cremosos!"
            imagem="https://cdn0.tudoreceitas.com/pt/posts/2/9/9/bolo_de_chocolate_cremoso_5992_600.webp"
          />
          <CardsLinha
            titulo="Café gelado cremoso"
            texto="iguaria para aproveitar nos dias quentes"
            imagem="https://guiadacozinha.com.br/wp-content/uploads/2022/11/Cafe-gelado-cremoso.jpg"
          />
        </Row>
      </Container>
      </main>
    </>
  );

}

export default Cardapio