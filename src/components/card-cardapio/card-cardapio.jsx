import { Card, Button } from "react-bootstrap";
import card2Img from "../../assets/cafes.png";
import card1Img from "../../assets/doce.png";
import "./card-cardapio.css";


function CardCardapio() {
    return(
   <div className="card-cardapio-container">
      {/* Card Bebidas */}
      <Card className="custom-card-cardapio">
        <Card.Img src={card2Img} />
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
          <div className="overlay-text"> E MUITO MAIS...</div>
         <div className="overlay-button"> <button className="botao-suricate">Ver Cardápio</button></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCardapio;
