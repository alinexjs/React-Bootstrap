import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../carrousel/carrousel.css"
import bn3 from "../../assets/3.png";
import bn2 from "../../assets/2.png";
import bn1 from "../../assets/1.png";

const CarouselComponent = () => {
    return (
         <Carousel>
      <Carousel.Item>
    <img
                    src={bn1} 
                    alt="banner 3"
                    className="d-block w-100"
                  />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
                    src={bn2} 
                    alt="banner 3"
                    className="d-block w-100"
                  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
                    src={bn3} 
                    alt="banner 3"
                    className="d-block w-100"
                  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    )
}

export default CarouselComponent;