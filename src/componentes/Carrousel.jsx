import { useEffect, useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ produtos }) {
  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);

  // 🔁 lista duplicada (loop infinito)
  const listaInfinita = [...produtos, ...produtos];

  // 🔄 movimento automático
  useEffect(() => {
    if (pausado) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(intervalo);
  }, [pausado]);

  // 👻 reset invisível
  useEffect(() => {
    if (index >= produtos.length) {
      setTimeout(() => {
        setIndex(0);
      }, 500); // mesmo tempo do transition
    }
  }, [index, produtos.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${index * 200}px)`,
          transition: "transform 0.5s ease",
        }}
      >
        {listaInfinita.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;