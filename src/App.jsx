import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
// Importa os Componentes
import NavbarComponent from "./components/navbar/navbar";
import CarouselComponent from "./components/carrousel/carrousel";
import Footer from "./components/footer/footer";
// Importa o AOS
import AOS from "aos";
import "aos/dist/aos.css"; // estilos do AOS
// Importa as páginas
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init(); // inicia a lib de animação
  }, []);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        {/* Rota inicial → abre Home automaticamente */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
