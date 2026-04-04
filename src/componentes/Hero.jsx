import { useEffect, useState } from "react"; // Adicionado useState
import "./Hero.css";

function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const tracks = document.querySelectorAll(".track");
      tracks.forEach((track, index) => {
        const speed = index % 2 === 0 ? 0.3 : -0.3;
        track.style.transform = `translateX(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <header className="hero-header-overlay">
        <div className="hero-brand-group">
          <img src="/coema.svg" alt="Logo Coema" className="logo-coema" />
        </div>

        {/* Classe dinâmica "active" para abrir no mobile */}
        <div className={`search-container ${isSearchOpen ? "active" : ""}`}>
          <div className="search-box">
            {/* O ícone agora funciona como botão no mobile */}
            <svg 
              className="search-icon" 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Pesquisar..." className="search-input" />
          </div>
        </div>

        <div className="about-section">
          <img src="/about.svg" alt="Sobre" className="about-icon" />
        </div>
        <div className="contact-section">
          <img src="/contact.svg" alt="Contato" className="contact-icon" />
        </div>
      </header>

      <div className="tracks-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="track">COFFEE COEMA COFFEE COEMA</div>
        ))}
      </div>

  
    </section>
  );
}

export default Hero;
