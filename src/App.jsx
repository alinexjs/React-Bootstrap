import NavbarComponent from "./components/navbar/navbar";
import CarouselComponent from "./components/carrousel/carrousel";
import Footer from "./components/footer/footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // estilos do AOS

const App = () => {
  return(
    <>
    <NavbarComponent />
    <CarouselComponent/>
    <Footer/>
   
    </>
 
  )
}

export default App