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
import Cardapio from "./pages/Cardapio"; // imagens home abre cardapio
{/*import Conheca from "./pages/Conheca"; // boatao abre page conheca*/}

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
        {/* Rota do Cardápio */}
        <Route path="/cardapio" element={<Cardapio />} />
        {/*Rota do Conheca*/}
       {/*} <Route path="/conheca" element={<Conheca />} />{/* Página do botão */}
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
