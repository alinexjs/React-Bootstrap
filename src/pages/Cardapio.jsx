import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/navbar/navbar.jsx";
import Card from 'react-bootstrap/Card';

// Componente auxiliar para cada card
function CardsLinha({texto, imagem }) {
  return (
    <Col sm={12} md={4}>
      <Card className="h-100">
        <Row className="g-0 h-100">
          <Col sm={12} md={4}>
            <Card.Img src={imagem} alt="" className="h-100" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
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
      <Container className="my-4">
        <Row className="g-4">
          <CardsLinha
            titulo="Card 1"
            texto="Texto ao lado da imagem do card 1."
            imagem="https://via.placeholder.com/150"
          />
          <CardsLinha
            titulo="Card 2"
            texto="Texto ao lado da imagem do card 2."
            imagem="https://via.placeholder.com/150"
          />
          <CardsLinha
            titulo="Card 3"
            texto="Texto ao lado da imagem do card 3."
            imagem="https://via.placeholder.com/150"
          />
        </Row>
      </Container>
    </>
  );
  
}

export default Cardapio