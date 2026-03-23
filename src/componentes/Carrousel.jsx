import { useEffect, useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ produtos }) {
  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % produtos.length);
    }, 2000);

    return () => clearInterval(intervalo);
  }, [pausado, produtos.length]);

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
        }}
      >
        {produtos.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;