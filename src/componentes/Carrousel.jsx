import PropTypes from 'prop-types';
import "./Carousel.css"; // Você pode renomear para Cards.css se preferir
import Card from "./Card";

function Carousel({ produtos }) {
  return (
    <div className="cards-container">
      {produtos.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
}

Carousel.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Carousel;