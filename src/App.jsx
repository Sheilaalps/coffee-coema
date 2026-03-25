import './App.css'
import Sidebar from "./componentes/Sidebar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import Carousel from "./componentes/Carrousel"; 

// 1. IMPORTAR AS IMAGENS DO ASSETS
import imgExpresso from './assets/expresso.png';
import imgCappuccino from './assets/cappuccino.png';
import imgLatte from './assets/latte.png';

function App() {
  const produtos = [
    {
      nome: "Café Expresso",
      descricao: "Forte e encorpado",
      imagem: imgExpresso // Use a variável sem aspas
    },
    {
      nome: "Cappuccino",
      descricao: "Cremoso e suave",
      imagem: imgCappuccino
    },
    {
      nome: "Latte",
      descricao: "Suave e equilibrado, com leite cremoso e arte na superfície.",
      imagem: imgLatte
    },
  ];

  return (
    <div className="app-layout"> 
      <Sidebar />
      <main className="main-content">
        <Hero />
        {/* Aqui é a sua vitrine de cards fixos que limpamos antes */}
        <Carousel produtos={produtos} />
        {/* O Footer deve ficar DENTRO da main-content para o layout flex funcionar */}
        <Footer />
      </main>
    </div>
  );
}

export default App;