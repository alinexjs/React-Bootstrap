import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../carrousel/index.css"

const CarouselComponent = () => {
    return (
         <Carousel>
      <Carousel.Item>
        <img 
        className="d-block w-100"
        src="https://img.freepik.com/fotos-gratis/montanhas-vestrahorn-em-stokksnes-islandia_335224-667.jpg?semt=ais_hybrid&w=740&q=80" alt="Montanhas na Islândia" />
        <Carousel.Caption>
          <h3>Montanhas da Islândia</h3>
          <p>Picos imponentes ao entardecer criam um cenário único e inspirador.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className="d-block w-100"
        src="https://images3.alphacoders.com/272/thumb-1920-272415.gif" alt="Cachoeira animada" />
        <Carousel.Caption>
          <h3>Força da Natureza</h3>
          <p>Águas em movimento que transmitem energia e vitalidade.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
        src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhardgross-443446.jpg&fm=jpg" alt="Lago e montanhas" />
        <Carousel.Caption>
          <h3>Reflexo da Tranquilidade</h3>
          <p>Um lago sereno em meio às montanhas, perfeito para contemplar a paz.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default CarouselComponent;
