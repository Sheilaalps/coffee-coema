import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão Hambúrguer - Só aparece no Mobile */}
      <button className="mobile-burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar com classe dinâmica 'active' */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="sidebar-logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="menu">
          <div className="item">
            <div className="icon-wrapper">
              <img src="/home.png" className="icon-sidebar" alt="Início" />
            </div>
            <span className="item-name">Home</span>
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
            <span className="item-name">Profile</span>
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

      {/* Overlay para fechar o menu ao clicar fora (Mobile) */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
