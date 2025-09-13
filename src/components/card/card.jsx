import React from "react";
import { Link } from "react-router-dom"; // Importa o Link
import card1 from "../../assets/1.png";
import card2 from "../../assets/2.png";
import card3 from "../../assets/3.png";
import card4 from "../../assets/4.png";
import card5 from "../../assets/5.png";
import card6 from "../../assets/6.png";
import "./card.css";//css

const cards = [card1, card2, card3, card4, card5, card6]; //define constante de cards

function AutoCarousel() {
  // duplica para criar a esteira infinita
  const loopCards = [...cards, ...cards];

  return (
    <div className="carousel-wrapper">
      <div className="cards-container">
        {loopCards.map((img, idx) => (
          <div className="card-item" key={idx}>
            <Link to="/cardapio">
              <img src={img} alt={`card ${idx + 1}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoCarousel;
