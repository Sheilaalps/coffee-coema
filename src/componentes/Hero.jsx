import { useEffect } from "react";
import "./Hero.css";

function Hero() {
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
      {/* --- O HEADER FLUTUANTE (TOP BAR) --- */}
      <header className="hero-header-overlay">
        {/* Container que alinha Logo + Título */}
        <div className="hero-brand-group">
       <img src="/coema.svg" alt="Logo Coema" className="logo-coema" />
        </div>

        {/* No seu Sidebar.jsx ou Hero.jsx */}
<div className="search-container">
  <img src="/source.svg" alt="Source" className="icon-s" />
</div>

        </header>

      {/* TRACKS DE FUNDO */}
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
            <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
            <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
             <div className="track">COFFEE COEMA COFFEE COEMA</div>

      {/* 2. IMAGEM PRINCIPAL (MOCKUP DO CAFÉ) */}
      <img
        src="/src/assets/cafe1.png"
        alt="Café"
        className="cafe1"
      />
    </section>
  );
}

export default Hero;