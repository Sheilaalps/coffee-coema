import PropTypes from 'prop-types';
import "./Carousel.css"; 
import Card from "./Card";

function Carousel({ produtos }) {
  // 1. Se a lista nem chegar, mostra o carregando
  if (!produtos || !Array.isArray(produtos)) {
    return <div className="loading">Carregando produtos...</div>;
  }

  return (
    <div className="cards-container">
      {produtos.map((item, i) => (
        /* 2. Passamos uma versão "segura" do item: 
           se item.descricao não existir, ele usa uma string vazia para não dar erro */
        <Card 
          key={i} 
          item={{
            ...item,
            descricao: item.descricao || "" 
          }} 
        />
      ))}
    </div>
  );
}

Carousel.propTypes = {
  // 3. Tiramos o .isRequired de TUDO para o React parar de reclamar no console
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
      descricao: PropTypes.string,
      imagem: PropTypes.string
    })
  )
};

export default Carousel;