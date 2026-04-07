import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Vídeo de fundo */}
      <video autoPlay loop muted playsInline className="back-video">
        <source src="/video-desktop.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* O Card Grande com textura de Vidro */}
      <main className="about-main">
        <div className="glass-card">
          <h1 className="page-title">Nossa História</h1>
          
          <div className="content-box">
            <p>
              A <span className="highlight-green">Coffee Coema</span> nasceu do desejo de transformar o simples ato de beber café 
              em uma experiência sensorial completa. Localizada no coração da Pavuna, 
              selecionamos grãos especiais de produtores locais para garantir que cada 
              xícara entregue o máximo de aroma e sabor.
            </p>
            <p>
              Nossa missão é ser o seu refúgio diário, unindo a sofisticação do design 
              minimalista com o acolhimento de uma cafeteria artesanal.
            </p>
          </div>
        </div>
      </main>

      {/* --- BOTÕES DO RODAPÉ (MOBILE) --- */}
      <div className="mobile-footer-nav">
        <a href="#about">about</a>
        <span className="footer-divider">|</span>
        <a href="#contact">contact</a>
      </div>
    </div>
  );
};

export default About;