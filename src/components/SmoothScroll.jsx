import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import PropTypes from 'prop-types'; // 1. Importe

//Foi usado um lenis para o Scroll mais suave. Instalei pelo npm, usando: npm install @studio-freight/lenis//
//Usei PropsTpes para validar o tipo de children que o componente recebe, garantindo que seja um nó React válido. Isso ajuda a evitar erros e torna o código mais robusto.

// eslint-disable-next-line react/prop-types
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Inicializa o Lenis com as configurações de suavidade
   const lenis = new Lenis({
  duration: 1.8,       // Aumentei de 1.2 para 1.8 (rola mais devagar)
  lerp: 0.05,          // Adicionei o lerp baixo (gera aquela "inércia" elegante)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smoothWheel: true,
  wheelMultiplier: 0.8, // Diminui a força da rodinha do mouse (estava 1.0 padrão)
  touchMultiplier: 1.5, // Baixei de 2 para 1.5 para não voar no celular
})

    // O loop de animação (RAF) que estava no seu código original
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup: Destrói a instância ao desmontar o componente
    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
//  Define a validação
SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SmoothScroll