import React from 'react';
import Hero from "../componentes/Hero";
import Carousel from "../componentes/Carrousel";
import Banner from "../componentes/Banner";
import Mapa from "../componentes/Mapa";
import Footer from "../componentes/Footer";
import SmoothScroll from "../componentes/SmoothScroll";

// Importe as imagens que estavam no App.js
import imgLeve from "../assets/leve.svg";
import imgModerado from "../assets/moderado.svg";
import imgExpress from "../assets/express.svg";

const Home = () => {
  // Movemos a array de produtos para cá
  const produtos = [
    {
      nome: "Torra Leve",
      cor: "#8DAF5B",
      perfil: "Frutas Cítricas, Mel e Toque Floral",
      detalhes: "Corpo: Leve | Torra: Clara",
      especificacao: "100% ARÁBICA EM GRÃOS",
      intensidade: 3,
      imagem: imgLeve,
    },  
    {
      nome: "Torra Moderada",
      cor: "#B98B2B",
      perfil: "Chocolate ao Leite e Caramelo",
      detalhes: "Corpo: Médio | Torra: Média",
      especificacao: "100% ARÁBICA EM GRÃOS",
      intensidade: 4,
      imagem: imgModerado,
    },
    {
      nome: "Torra Express",
      cor: "#648D5E",
      perfil: "Cacau, Nozes e Açúcar Mascavo",
      detalhes: "Corpo: Encorpado | Torra: Média-Escura",
      especificacao: "100% ARÁBICA EM GRÃOS",
      intensidade: 5,
      imagem: imgExpress,
    },
  ];

  return (
    <SmoothScroll>
      {/* CAMADA 1: VÍDEO (FUNDO) */}
      <div className="sticky-wrapper">
        <Hero />
      </div>

      {/* CAMADA 2: CONTEÚDO (GAVETA QUE SOBE) */}
      <div className="reveal-content">
        <Banner />
        <Carousel produtos={produtos} />
        <Mapa />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Home;