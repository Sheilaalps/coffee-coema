import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./componentes/Sidebar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import Carousel from "./componentes/Carrousel"; 

function App() {

  const produtos = [
    {
      nome: "Café Expresso",
      descricao: "Forte e encorpado",
      imagem: "/src/assets/expresso.png"
    },
    {
      nome: "Cappuccino",
      descricao: "Cremoso e suave",
      imagem: "/src/assets/cappuccino.png"
    },
    {
      nome: "Latte",
      descricao: "Suave e equilibrado, com leite cremoso e arte na superfície.",
      imagem: "/src/assets/latte.png"
    },
    {
      nome : "Mocha",
      descricao : "Café com chocolate e leite, uma combinação irresistível. ",
      imagem: "/src/assets/mocha.png"
    },
    { 
      nome: "Café Gelado",
      descricao : "Refrescante e energinzante, ideal para dias quentes. ",
      imagem: "/src/assets/gelado.png"
    },
    {
      nome: "Grãos Premium",
      descricao: "Selecionados cuidadosamente para garantir aroma e sabor únicos.",
      imagem: "/src/assets/graos.png"
    },
    {
      nome:"Croissant",
      descricao: "Leve folhado e amanteigado, perfeito para acompanhar seu café. ",
      imagem: "/src/assets/croissant.png"
    },
    {
      nome: "Pão de Queijo",
       descricao: "Clássico brasileiro, crocante por fora e macio  por dentro.",
       imagem: "/src/assets/paodequeijo.png"
    },
    {
      nome: "Bolo Caseiro",
      descricao: "Fatia macia e saborosa, perfeita para qualquer momento do dia.",
      imagem: "/src/assets/bolo.png"
     }


  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className="main">
          <Hero />
          <Carousel produtos={produtos} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;