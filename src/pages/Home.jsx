import React from 'react';
import Header from "../components/Header"; // Importante: não esqueça do Header aqui!
import Hero from "../components/Hero";
import Carousel from "../components/Carrousel";
import Banner from "../components/Banner";
import Mapa from "../components/Mapa";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import imgLeve from "../assets/leve.svg";
import imgModerado from "../assets/moderado.svg";
import imgExpress from "../assets/express.svg";

const Home = () => {
  const produtos = [
   {
    nome: "Torra Leve",
    cor: "#8DAF5B",
    perfil: "Notas de Frutas Cítricas, Mel e Toque Floral",
    detalhes: "Corpo: Médio | Torra: Clara",
    especificacao: "100% ARÁBICA EM GRÃOS",
    intensidade: 4,
    imagem: imgLeve
  }, // <--- VERIFIQUE SE ESSA VÍRGULA EXISTE!
  {
    nome: "Torra Moderada",
    cor: "#B98B2B", 
    perfil: "Notas de Chocolate ao Leite e Caramelo",
    detalhes: "Corpo: Médio | Torra: Média",
    especificacao: "100% ARÁBICA EM GRÃOS",
    intensidade: 3,
    imagem: imgModerado
  },
  {
    nome: "Torra Gourmet",
    cor: "#69795d", 
    perfil: "Notas de Cacau, Nozes e Açúcar Mascavo",
    detalhes: "Corpo: Médio | Torra: Média-Escura",
    especificacao: "100% ARÁBICA EM GRÃOS",
    intensidade: 5,
    imagem: imgExpress
  }
  ];

  return (
    <SmoothScroll>
      <div className="sticky-wrapper">
        <Header />
        <Hero /> 
      </div>
      
      <div className="reveal-content">
        <Banner />
        {/* AGORA combinando: a lista se chama produtos e passamos produtos */}
        <Carousel produtos={produtos} /> 
        <Mapa />
      </div>
    </SmoothScroll>
  );
}; // <--- ESSA CHAVE FECHA A FUNÇÃO HOME

export default Home;