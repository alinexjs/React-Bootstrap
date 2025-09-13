import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../carrousel/carrousel.css";
import bn3 from "../../assets/bn3.png";
import bn2 from "../../assets/bn2.png";
import bn1 from "../../assets/bn1.png";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            src={bn1} 
            alt="banner 1"
            className="d-block w-100"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={bn2} 
            alt="banner 2"
            className="d-block w-100"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={bn3} 
            alt="banner 3"
            className="d-block w-100"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent;
