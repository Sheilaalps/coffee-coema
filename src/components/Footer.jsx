import React from 'react';
import "../components/Footer.css";
import footerImg from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Lado Esquerdo: Logo */}
        <div className="footer-left">
          <img src={footerImg} alt="Logo Café Coema" className="logo-footer" />
        </div>

        {/* Centro/Direita: Informações */}
        <div className="footer-right-content">
          <div className="footer-text-group">
            <h3 className="footer-title">Café Coema</h3>
            <p className="footer-address">Rua Sargento de Milícias, 171 - Pavuna, RJ</p>
            <p className="footer-copy">© 2026 Todos os direitos reservados.</p>
          </div>

          {/* Redes Sociais - Agora com texto para não dar erro */}
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;