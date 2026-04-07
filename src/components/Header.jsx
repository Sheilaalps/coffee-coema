import { Link } from 'react-router-dom'; // Importação essencial
import './Header.css';

function Header() {
  return (

    <header className="main-header">
      <div className="header-left">
        {/* Clicar no nome agora volta para a Home */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="brand-logo">COFFEE COEMA</h1>
        </Link>
        
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Pesquisar..." className="search-input" />
        </div>
      </div>

      <nav className="header-right">
        {/* Link para a Home */}
        <a href="#secao-mapa" className="nav-icon-item">
  <img src="/map.svg" alt="Map" title="Localização" />
</a>
        {/*link para o Map*/}
        <Link to="/" className="nav-icon-item">
          <img src="/home.png" alt="Home" title="Início" />
        </Link>

        {/* Link para o Cardápio */}
        <Link to="/cardapio" className="nav-icon-item">
          <img src="/coffee.png" alt="Cardápio" title="Cardápio" />
        </Link>

        <Link to="/perfil" className="nav-icon-item">
          <img src="/acess.png" alt="Profile" title="Perfil" />
        </Link>

    {/* BLOCO 2: LINKS DE TEXTO (EMBAIXO) */}
  <div className="header-row-bottom">
  {/* Trocamos o 'a href' por 'Link to' e o '#' pela rota da página */}
  <Link to="/about" className="nav-text-btn">ABOUT</Link>
  
  <span className="divider">|</span>
  
  <Link to="/contact" className="nav-text-btn">CONTACT</Link>
</div>
      </nav>
    </header>
  );
}

export default Header;