import './Header.css';

function Header() {
  return (
    <header className="main-header">
      {/* LADO ESQUERDO: Logo + Pesquisa */}
      <div className="header-left">
        <h1 className="brand-logo">COFFEE COEMA</h1>
        
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Pesquisar..." className="search-input" />
        </div>
      </div>

      {/* LADO DIREITO: Ícones de Navegação */}
      <nav className="header-right">
        <div className="nav-icon-item">
          <img src="/home.png" alt="Home" title="Início" />
        </div>
        <div className="nav-icon-item">
          <img src="/coffee.png" alt="Cardápio" title="Cardápio" />
        </div>
        <div className="nav-icon-item">
          <img src="/acess.png" alt="Profile" title="Perfil" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
