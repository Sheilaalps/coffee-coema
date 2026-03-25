import PropTypes from 'prop-types';
import "./Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-inner">
        {/* Frente do Card */}
        <div className="card-front">
          <img src={item.imagem} alt={item.nome} />
          <h3>{item.nome}</h3>
        </div>
        {/* Verso do Card */}
        <div className="card-back">
          <p>{item.descricao}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
  }).isRequired
};

export default Card;