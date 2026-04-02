import "./App.css";
import Sidebar from "./componentes/Sidebar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import Carousel from "./componentes/Carrousel";
import Banner from "./componentes/Banner";
import SmoothScroll from "./componentes/SmoothScroll";

// Importando assets
import imgExpresso from "./assets/expresso.png";
import imgCappuccino from "./assets/cappuccino.png";
import imgLatte from "./assets/latte.png";

function App() {
  const produtos = [
    {
      nome: "Café Expresso",
      descricao: "Forte e encorpado",
      imagem: imgExpresso,
    },
    {
      nome: "Cappuccino",
      descricao: "Cremoso e suave",
      imagem: imgCappuccino,
    },
    {
      nome: "Latte",
      descricao: "Suave e equilibrado, com leite cremoso e arte na superfície.",
      imagem: imgLatte,
    },
  ];

  return (
    <div className="app-layout">
      {/* O Sidebar fica fora do SmoothScroll para ser fixo e independente */}
      <Sidebar />

      <main className="main-content">
        <SmoothScroll>
          {/* CAMADA 1: O Hero com o vídeo (fica parado no fundo) */}
          <div className="sticky-wrapper">
            <Hero />
          </div>

          {/* CAMADA 2: O resto do site que "engole" o Hero ao subir */}
          <div className="reveal-content">
            <Banner />
            <Carousel produtos={produtos} />
            <Footer />
          </div>
        </SmoothScroll>
      </main>
    </div>
  );
}

export default App;