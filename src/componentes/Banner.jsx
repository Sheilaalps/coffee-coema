import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <h1 className="banner-title">COFFEE COEMA</h1>
        <p className="banner-subtitle">
          A experiência do café artesanal em cada detalhe.
        </p>
        
        {/* REGRAS: 
            1. Removi o <button> de volta, o Link já faz o papel de botão.
            2. Troquei o <a> por <Link> para funcionar o Router.
            3. O 'to="/cardapio"' envia para a página que criamos no App.js. 
        */}
        <Link to="/cardapio" className="banner-btn">
          CONHEÇA NOSSOS GRÃOS
        </Link>
      </div>
    </section>
  );
};

export default Banner;