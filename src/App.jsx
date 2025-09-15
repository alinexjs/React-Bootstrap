// Importa as Rotas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
// Importa os Componentes
import NavbarComponent from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// Importa o AOS
import AOS from "aos";
import "aos/dist/aos.css"; // estilos do AOS
// Importa as páginas
import Home from "./pages/Home";
import Cardapio from "./pages/cardapio/Cardapio"; // imagens home abre cardapio
import Conheca from "./pages/Conheca"; // botão abre page conheca
import Contato from "./pages/Contato"; // botão abre page Contato

function App() {

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        {/* Rota inicial → abre Home automaticamente */}
        <Route path="/" element={<Home />} />
        {/* Rota do Cardápio */}
        <Route path="/cardapio" element={<Cardapio />} />
        {/* Rota do Conheça */}
        <Route path="/conheca" element={<Conheca />} />
        {/* Rota do Contato */}
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
