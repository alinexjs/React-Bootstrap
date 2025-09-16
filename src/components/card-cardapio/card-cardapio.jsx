import { Card, Button } from "react-bootstrap";
import card2Img from "../../assets/2.png";
import card1Img from "../../assets/1.png";
import "./card-cardapio.css";

function CardCardapio() {
    return(
   <div className="card-cardapio-container">
      {/* Card Bebidas */}
      <Card className="custom-card-cardapio">
        <Card.Img src={card1Img} />
        <div className="overlay-text">BEBIDAS</div>
      </Card>

      {/* Card Doces */}
      <Card className="custom-card-cardapio">
        <Card.Img src={card1Img} />
        <div className="overlay-text">DOCES</div>
      </Card>

      {/* Card Marrom */}
      <Card className="custom-card-cardapio card-marrom">
        <Card.Body>
          <h3>E MUITO MAIS...</h3>
          <button className="botao-suricate">VEJA NOSSO CARDÁPIO</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCardapio;
