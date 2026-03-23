import "./Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.imagem} />
          <h3>{item.nome}</h3>
        </div>

        <div className="card-back">
          <p>{item.descricao}</p>
        </div>
      </div>
    </div>
    
  );
}
export default Card;