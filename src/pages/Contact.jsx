import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  // Validação de e-mail mais robusta para garantir o formato correto
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o refresh da página
    setErrorMessage('');

    // 1. Validação de Nome Completo (verifica se existe pelo menos um sobrenome)
    if (!formData.name.trim().includes(' ')) {
      setErrorMessage('por favor, insira seu nome completo');
      triggerShake();
      return;
    }

    // 2. Validação de E-mail (verifica formato @ e .com)
    if (!validateEmail(formData.email)) {
      setErrorMessage('por favor, insira um e-mail válido');
      triggerShake();
      return;
    }

    // 3. Validação de Mensagem (opcional: evita mensagens vazias)
    if (formData.message.trim().length < 5) {
      setErrorMessage('por favor, escreva uma mensagem curta');
      triggerShake();
      return;
    }

    // Se tudo estiver OK: Sucesso!
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(''); 
  };

  return (
    <div className="contact-wrapper">
      <video autoPlay loop muted playsInline className="back-video">
        <source src="/video-desktop.mp4" type="video/mp4" />
      </video>

      <main className="contact-main">
        <div className="glass-card contact-card">
          <h1 className="page-title">CONTATO</h1>
          
          {/* Adicionado noValidate para permitir que o React gerencie os erros e o shake */}
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {errorMessage && <span className="error-text">{errorMessage}</span>}

            <input 
              type="text" 
              name="name" 
              placeholder="seu nome completo" 
              value={formData.name} 
              onChange={handleChange} 
              autoComplete="off"
            />
            
            <input 
              type="email" 
              name="email" 
              placeholder="seu e-mail" 
              value={formData.email} 
              onChange={handleChange} 
              autoComplete="off"
            />
            
            <textarea 
              name="message" 
              placeholder="sua mensagem" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
            ></textarea>
            
            <button 
              type="submit" 
              className={`send-btn ${isShaking ? 'shake-animation' : ''}`}
            >
              ENVIAR
            </button>
          </form>
        </div>

        <div className={`toast-notification ${showToast ? 'show' : ''}`}>
          Mensagem enviada com sucesso! ✨
        </div>
      </main>

      <div className="mobile-footer-nav">
        <Link to="/about">about</Link>
        <span className="footer-divider">|</span>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Contact;