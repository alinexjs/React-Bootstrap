import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../../components/navbar/navbar.jsx";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

// Componente auxiliar para cada card
function CardsLinha({ titulo, texto, imagem, icon }) {
  return (
    <Col sm={12} md={4}>
      <Card style={{ border: "1px solid #f98702" }} className="h-100">
        <Row className="g-0 h-100"> {/* Adicione h-100 aqui */}
          {/* Imagem */}
          <Col xs={12} md={6}>
            <Card.Img
              src={imagem}
              alt={titulo}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0.375rem 0 0 0.375rem",
              }}
            />
          </Col>

          {/* Texto */}
          <Col xs={12} md={6} className="d-flex">
            <Card.Body className="d-flex flex-column p-3">
              <div style={{ flexGrow: 1 }}>
                <Card.Title style={{ fontFamily: "'Poppins', sans-serif" }}>{titulo}</Card.Title>
                <Card.Text style={{ fontFamily: "'Poppins', sans-serif" }}>{texto}</Card.Text>
              </div>

              {/* Button */}
              {icon && (
                <Button
                  className="mt-auto"
                  style={{
                    backgroundColor: "#f98702",
                    borderColor: "#f98702",
                    width: "70px",
                    alignSelf: "flex-end"
                  }}
                >
                  <img
                    src={icon}
                    alt="Adicione ao carrinho"
                    style={{ width: "20px", height: "20px" }}
                  />
                </Button>
              )}
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
          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Cafés</h1>
            <CardsLinha
              titulo="Café Tradicional"
              texto=""
              imagem="/src/assets/.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Capuccino"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Café Gelado"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Chás</h1>
            <CardsLinha
              titulo="Chá"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Chá Gelado"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Cha Gelado.."
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Pães</h1>
            <CardsLinha
              titulo="Pão"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Pão"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Pão"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Bolos</h1>
            <CardsLinha
              titulo="Bolo"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Bolo"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Bolo"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Doces</h1>
            <CardsLinha
              titulo="Doce"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="DOce"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Doce"
              texto=""
              imagem=""
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>
        </Container>
      </main>
    </>
  );

}

export default Cardapio