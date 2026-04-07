import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner-section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="banner-container">
        <h1 className="banner-title">COFFEE COEMA</h1>
        <p className="banner-subtitle">
          A experiência do café artesanal em cada detalhe.
        </p>
        
        {/* O Link agora tem um z-index alto e cursor de pointer forçado */}
        <Link 
          to="/cardapio" 
          className="banner-btn" 
          style={{ position: 'relative', zIndex: 20, cursor: 'pointer', display: 'inline-block' }}
        >
          CONHEÇA NOSSOS GRÃOS
        </Link>
      </div>
    </section>
  );
};

export default Banner;