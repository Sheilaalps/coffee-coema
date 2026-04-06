import React from 'react';

const Cardapio = () => {
  return (

    return (
  <div className="cardapio-container">
    <h1 className="cardapio-titulo">Nosso Cardápio</h1>
    <div className="cardapio-grid">
      <div className="cardapio-item">
        <h3>Expresso Coema</h3>
        <p className="preco">R$ 8,00</p>
        <button className="btn-zap">Pedir no WhatsApp</button>
      </div>
      {/* ... outros itens */}
    </div>
  </div>
);
    <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '100vh' }}>
      <h1 style={{ color: '#4b2c20' }}>Nosso Cardápio</h1>
      <p>Em breve, delícias fresquinhas aqui!</p>
    </div>
  );
};

export default Cardapio;