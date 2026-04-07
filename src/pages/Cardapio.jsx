import React from 'react';
import './Cardapio.css';

// 1. Defina os dados AQUI (antes da função)
const itensCardapio = [
  { 
    id: 1, 
    nome: "Espresso Coema", 
    preco: "R$ 8,50", 
    descricao: "Grãos selecionados com notas de chocolate amargo.",
    imagem: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500" 
  },
  { 
    id: 2, 
    nome: "Croissant Amanteigado", 
    preco: "R$ 14,00", 
    descricao: "Massa folhada francesa, crocante e assada na hora.",
    imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500" 
  },
  { 
    id: 3, 
    nome: "Cappuccino Italiano", 
    preco: "R$ 12,00", 
    descricao: "Equilíbrio perfeito entre espresso e crema aveludada.",
    imagem: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500" 
  }
];

// 2. A função que renderiza a tela
function Cardapio() {
  return (
    <div className="cardapio-grid">
      {itensCardapio.map((item) => (
        <div key={item.id} className="card-item">
          <div className="card-img-container">
            <img src={item.imagem} alt={item.nome} className="card-img" />
          </div>
          
          <div className="card-info">
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <div className="card-footer-item">
              <span className="card-preco">{item.preco}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardapio;