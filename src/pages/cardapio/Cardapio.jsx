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
              texto="O café de todo dia, preparado de forma simples e artesanal, com aroma intenso e sabor marcante que aquece o coração."
              imagem="/src/assets/cf-tradicional.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Capuccino"
              texto="Cremoso e equilibrado, feito com café espresso, leite vaporizado e espuma aveludada, finalizado com um leve toque de canela."
              imagem="/src/assets/capuccino.png"
              icon="/src/assets/carrinho-icon.png"
            />  
            <CardsLinha
              titulo="Café Gelado"
              texto="Refrescante e suave, servido com gelo e um toque leve de doçura, ideal para dias quentes sem abrir mão do sabor do café."
              imagem="/src/assets/cf-gelado.png"
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Chás</h1>
            <CardsLinha
              titulo="Chá de Camomila"
              texto="Leve, delicado e calmante, ideal para momentos de relaxamento e tranquilidade."
              imagem="/src/assets/cha-camomila.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Chá Gelado de Pêssego"
              texto="Refrescante e adocicado na medida certa, feito com chá preto e suco natural de pêssego."
              imagem="/src/assets/cha-gelado.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Chá Verde com Hortelã"
              texto="Refrescante e revitalizante, une a energia do chá verde com a leveza e frescor da hortelã."
              imagem="/src/assets/cha-hortela.png"
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Pães</h1>
            <CardsLinha
              titulo="Pão de Queijo"
              texto="Crocante por fora, macio e elástico por dentro, feito com polvilho e queijo de verdade, irresistível a qualquer hora do dia."
              imagem="/src/assets/pao de queijo.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Pão Integral"
              texto="Rico em fibras e feito com grãos selecionados (linhaça, chia e gergelim), é saboroso, leve e uma opção nutritiva."
              imagem="/src/assets/pao integral.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Croissant Manteigado"
              texto="Massa folhada dourada e delicada, com camadas amanteigadas que derretem na boca."
              imagem="/src/assets/croissant.png"
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Bolos</h1>
            <CardsLinha
              titulo="Bolo de Laranja"
              texto="Leve e perfumado, feito com suco natural, trazendo um sabor cítrico suave que combina perfeitamente com o café."
              imagem="/src/assets/bolo-laranja.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Bolo de Chocolate"
              texto="Clássico irresistível, macio e úmido, coberto com ganache cremosa de chocolate meio amargo."
              imagem="/src/assets/bolo-chocolate.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Bolo Red Velvet"
              texto="Sofisticado e aveludado, de coloração vibrante e recheio suave de cream cheese levemente adocicado."
              imagem="/src/assets/bolo-red-velvet.png"
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>

          <Row className="g-3 mt-4">
            <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#f98702" }}>Doces</h1>
            <CardsLinha
              titulo="Brigadeiro Gourmet"
              texto="Cremoso e macio, feito com chocolate belga e finalizado com granulados de chocolate meio amargo."
              imagem="/src/assets/brigadeiro-gourmet.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Torta de Limão"
              texto="Equilíbrio perfeito entre o azedinho do limão e a doçura do creme, com base crocante e cobertura de merengue dourado."
              imagem="/src/assets/torta-limao.png"
              icon="/src/assets/carrinho-icon.png"
            />
            <CardsLinha
              titulo="Sorvete de Chocolate"
              texto="Intenso e envolvente, preparado com cacau de qualidade, perfeito para os amantes do chocolate."
              imagem="/src/assets/sorvete.png"
              icon="/src/assets/carrinho-icon.png"
            />
          </Row>
        </Container>
      </main>
    </>
  );

}

export default Cardapio