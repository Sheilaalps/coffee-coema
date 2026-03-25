import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* O LOGO DO SOL QUE VOCÊ JÁ SUBIU */}
      <div className="sidebar-logo">
        <img src="/logo.png" alt="Logo Coema" className="logo-img-sidebar" />
      </div>

      <div className="menu">
        {/* ITEM HOME */}
        <div className="item">
          <img src="/home.png" alt="Home" className="icon-home" />
          <span className="text">Home</span>
          
          <img src="/coffee.png" alt="Coffee" className="icon-coffee" />
          <span className="text">Coffee</span>
          <img src="/acess.png" alt="Access" className="icon-access" />
          <span className="text">Access</span>
        </div>
      </div>

      {/* ÍCONES DE BAIXO (LOGOUT/CONFIG) SE TIVER */}
      <div className="menu-bottom">
        <img src="/log-out.png" alt="Sair" className="icon-logout" />
      </div>
    </div>
  );
}

export default Sidebar;