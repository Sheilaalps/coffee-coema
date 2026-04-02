
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <h1 className="banner-title">COFFEE COEMA</h1>
        <p className="banner-subtitle">
          A experiência do café artesanal em cada detalhe.
        </p>
        <button className="banner-btn">
          Conheça Nossos Grãos
        </button>
      </div>
    </section>
  );
};

export default Banner;