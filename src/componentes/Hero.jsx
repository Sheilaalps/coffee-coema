import { useEffect } from "react";
import "./Hero.css";
// Importar a imagem garante que o Vite a encontre na build
import cafeImg from "../assets/cafe1.png"; 

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const tracks = document.querySelectorAll(".track");
      tracks.forEach((track, index) => {
        // Velocidade alternada para o efeito de parallax lateral
        const speed = index % 2 === 0 ? 0.3 : -0.3;
        track.style.transform = `translateX(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* VÍDEO DE FUNDO */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* HEADER / NAV OVERLAY */}
      <header className="hero-header-overlay">
        <div className="hero-brand-group">
          <img src="/coema.svg" alt="Logo Coema" className="logo-coema" />
        </div>

        <div className="search-container">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Pesquisar..." className="search-input" />
          </div>
        </div>
      </header>

      {/* TEXTOS EM MOVIMENTO (MARQUEE) */}
      <div className="tracks-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="track">COFFEE COEMA COFFEE COEMA</div>
        ))}
      </div>

      {/* IMAGEM PRINCIPAL (MOCKUP) */}
      <img src={cafeImg} alt="Café" className="cafe1" />
    </section>
  );
}

export default Hero;