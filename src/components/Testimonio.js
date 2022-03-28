import React from "react";
import "../hojas-de-estilo/Testimonio.css";
import ShawnImg from "../images/testimonio-shawn.png";
import SarahImg from "../images/testimonio-sarah.png";
import EmmaImg from "../images/testimonio-emma.png";

function Testimonio() {
  const personas = [
    {
      id: 1,
      image: ShawnImg,
      nombre: "Shawn Wang",
      pais: "Singapur",
      cargo: "Ingeniero de Software",
      empresa: "Amazon",
      testimonio:
        "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
    },
    {
      id: 2,
      image: SarahImg,
      nombre: "Sarah Chima",
      pais: "Nigeria",
      cargo: "Ingeniera de Software",
      empresa: "ChatDesk",
      testimonio:
        "freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.",
    },
    {
      id: 3,
      image: EmmaImg,
      nombre: "Emma Bostian",
      pais: "Suecia",
      cargo: "Ingeniera de Software",
      empresa: "Spotify",
      testimonio:
        "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.",
    },
  ];

  return (
    <>
      {personas.map((persona) => {
        return (
          <div key={persona.id} className="contenedor-testimonio">
            <img src={persona.image} alt= "Foto de " />
            <div className="contenedor-texto-testimonio">
              <p className="nombre-testimonio">
              <strong>{persona.nombre}</strong> en {persona.pais}
              </p>
              <p className="cargo-testimonio">
                {persona.cargo} en <strong>{persona.empresa}</strong>
              </p>
              <p className="texto-testimonio">"{persona.testimonio}"</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Testimonio;
