import "../componentes/Footer.css";
import footerImg from "../assets/logo.png";

function Footer() {
    return (
       <footer className="footer">
  <div className="footer-left">
    <img src={footerImg} alt="Logo Café Coema" className="logo-footer" />
  </div>

  <div className="footer-center">
    <p>
      Café Coema <br />
      Desperte seus sentidos no Café Coema
    </p>
    <p>© 2026 Café Coema. Todos os direitos reservados.</p>
    <p>Rua Sargento de Milícias, 171 - Pavuna, Rio de Janeiro, RJ</p>
  </div>
  
</footer>
    );
}

export default Footer;