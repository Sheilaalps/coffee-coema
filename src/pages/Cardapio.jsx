import React from 'react';
import './Cardapio.css';

const itensCardapio = [
  { 
    id: 1, 
    nome: "Espresso Coema", 
    preco: "R$ 8,50", 
    descricao: "Grãos selecionados com notas de chocolate amargo.",
    imagem: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
  },
  { 
    id: 2, 
    nome: "Croissant Amanteigado", 
    preco: "R$ 14,00", 
    descricao: "Massa folhada francesa, crocante e assada na hora.",
    imagem: "https://images.pexels.com/photos/3727221/pexels-photo-3727221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
  },
  { 
    id: 3, 
    nome: "Cappuccino Italiano", 
    preco: "R$ 12,00", 
    descricao: "Equilíbrio perfeito entre espresso e crema aveludada.",
    imagem: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
  },
  { 
    id: 4, 
    nome: "Bolo de Cenoura", 
    preco: "R$ 10,00", 
    descricao: "Receita caseira com cobertura de brigadeiro gourmet.",
    imagem: "https://images.pexels.com/photos/1857155/pexels-photo-1857155.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
  }
];

function Cardapio() {
  return (
    <section className="cardapio-container">
      <h1 className="titulo-sessao">Nosso Cardápio</h1>
      
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
                <button className="btn-pedir">Pedir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cardapio;