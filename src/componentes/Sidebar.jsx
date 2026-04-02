import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
  <div className="sidebar-logo">
    <img src="/logo.png" alt="Logo" />
  </div>

  <div className="menu">
    <div className="item">
      <div className="icon-wrapper">
        <img src="/home.png" className="icon-sidebar" alt="Início" />
      </div>
      <span className="item-name">Início</span>
    </div>

    <div className="item">
      <div className="icon-wrapper">
        <img src="/coffee.png" className="icon-sidebar" alt="Cardápio" />
      </div>
      <span className="item-name">Cardápio</span>
    </div>

    <div className="item">
      <div className="icon-wrapper">
        <img src="/acess.png" className="icon-sidebar" alt="Perfil" />
      </div>
      <span className="item-name">Perfil</span>
    </div>
  </div>

  <div className="item-logout">
    <div className="item">
      <div className="icon-wrapper">
        <img src="/log-out.png" className="icon-sidebar" alt="Sair" />
      </div>
      <span className="item-name">Sair</span>
    </div>
  </div>
</div>
  );
}

export default Sidebar;