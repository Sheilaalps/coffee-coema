import "./App.css";
import Sidebar from "./componentes/Sidebar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import Carousel from "./componentes/Carrousel";
import Banner from "./componentes/Banner";
import SmoothScroll from "./componentes/SmoothScroll";


// Importando assets
import imgLeve from "./assets/leve.svg";
import imgModerado from "./assets/moderado.svg";
import imgExpress from "./assets/express.svg";
import "@fontsource/lexend-exa/400.css";

function App() {
  const produtos = [
    {
      nome: "Torra Leve",
      cor: "#8DAF5B", // Verde Oliva
      perfil: "Frutas Cítricas, Mel e Toque Floral",
      detalhes: "Corpo: Leve | Torra: Clara",
      especificacao: "100% ARÁBICA EM GRÃOS",
      intensidade: 3,
      imagem: imgLeve,
    },  
    {
      nome: "Torra Moderada",
      cor: "#B98B2B", // Dourado/Amarelo
      perfil: "Chocolate ao Leite e Caramelo",
      detalhes: "Corpo: Médio | Torra: Média",
      especificacao: "100% ARÁBICA EM GRÃOS",
      intensidade: 4,
      imagem: imgModerado,
    },
    {
      nome: "Torra Express",
      cor: "#648D5E", // Grafite/Preto
      perfil: "Cacau, Nozes e Açúcar Mascavo",
      detalhes: "Corpo: Encorpado | Torra: Média-Escura",
      especificacao: "100% ARÁBICA EM GRÃOS",
      intensidade: 5,
      imagem: imgExpress,
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