import { useEffect, useState, useRef } from "react"; // Adicionado useRef
import "./Hero.css";

function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const videoRef = useRef(null); // Referência para controlar o vídeo

  useEffect(() => {
    // 1. FORÇAR PLAY NO MOBILE
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay impedido, tentando novamente...", error);
      });
    }

    // 2. LÓGICA DAS TRILHAS (SCROLL)
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
      {/* VÍDEO COM REF E ATRIBUTOS DE SEGURANÇA */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <header className="hero-header-overlay">
        <div className="hero-brand-group">
          <img src="/coema.svg" alt="Logo Coema" className="logo-coema" />
        </div>

        <div className={`search-container ${isSearchOpen ? "active" : ""}`}>
          <div className="search-box">
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

        {/* Note: Os botões About e Contact serão movidos via CSS no Mobile */}
        <div className="about-section">
          <img src="/about.svg" alt="Sobre" className="about-icon" />
          <span className="mobile-label">About Us</span>
        </div>
        <div className="contact-section">
          <img src="/contact.svg" alt="Contato" className="contact-icon" />
          <span className="mobile-label">Contact</span>
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