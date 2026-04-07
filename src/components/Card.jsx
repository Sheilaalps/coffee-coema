import PropTypes from 'prop-types';
import "./Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-inner">
        
        {/* FRENTE */}
        <div className="card-front">
          <h3 style={{ color: item.cor }}>{item.nome}</h3>
          <img src={item.imagem} alt={item.nome} />
        </div>

        {/* VERSO */}
        <div className="card-back">
          <div className="info-verso">
            <h4 style={{ color: item.cor }}>PERFIL SENSORIAL:</h4>
            <p className="perfil-texto">{item.perfil}</p>
            
            <p className="detalhes-texto">
              <strong>{item.detalhes}</strong>
            </p>
            
            <p className="especificacao-texto">{item.especificacao}</p>

            {/* Intensidade Corrigida: Usando classes para preenchimento */}
            <div className="intensidade-box">
              <span>Intensidade</span>
              <div className="dots">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`dot ${i < item.intensidade ? 'filled' : 'empty'}`}
                    style={{ 
                      backgroundColor: i < item.intensidade ? item.cor : 'transparent',
                      borderColor: item.cor 
                    }}
                  />
                ))}
              </div>
              <span className="nota">({item.intensidade}/5)</span>
            </div>

            <button className="btn-compre">Compre aqui</button>
          </div>
        </div>

      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    perfil: PropTypes.string.isRequired,
    detalhes: PropTypes.string.isRequired,
    especificacao: PropTypes.string.isRequired,
    intensidade: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired
  }).isRequired
};

export default Card;