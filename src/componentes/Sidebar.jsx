import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu">
        
       {/* Lembbra de importar no app */}

        <div className="item">
          <span>🏠</span>
          <span className="text">Home</span>
        </div>

        <div className="item">
          <span>☕</span>
          <span className="text">Cardápio</span>
        </div>

        <div className="item">
          <span>👤</span>
          <span className="text">Perfil</span>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;