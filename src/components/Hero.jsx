import { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const tracks = document.querySelectorAll(".track");
      tracks.forEach((track, index) => {
        // Velocidade alternada para o efeito de "vai e vem"
        const speed = index % 2 === 0 ? 0.2 : -0.2;
        track.style.transform = `translateX(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* 1. VÍDEO DE FUNDO */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/video-desktop.mp4" type="video/mp4" />
      </video>

      {/* 2. FRASES QUE CORREM (TRACKS) */}
      <div className="tracks-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="track">
            COFFEE COEMA COFFEE COEMA COFFEE COEMA
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
