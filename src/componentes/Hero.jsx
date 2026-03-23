import { useEffect } from "react";
import "./Hero.css";

function Hero() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const tracks = document.querySelectorAll(".track");

      tracks.forEach((track, index) => {
        const speed = index % 2 === 0 ? 0.3 : -0.3; // alterna direção

        track.style.transform = `translateX(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>
      <div className="track">COFFEE COEMA COFFEE COEMA</div>

      <img
      src="/src/assets/cafe1.png"
      alt="Café"
      className="cafe1"
      ></img>
    </section>
  );
}

export default Hero;