import { useState } from "react";

export default function CondicionesUso() {
  const [mostrarCondiciones, setMostrarCondiciones] = useState(false);

  function manejarMostrarResumen() {
    setMostrarCondiciones(true);
  }

  let textoParrafo = "";
  if (mostrarCondiciones) {
    textoParrafo =
      "Al continuar, aceptas que no te indemnizaremos por ningún daño " +
      "o perjuicio causado por nuestros productos.";
  }

  return (
    <section>
      <button onClick={manejarMostrarResumen}>
        Mostrar resumen de las condiciones de uso
      </button>
      {/* ¡Este <p> existe siempre en el DOM, incluso vacío! */}
      <p>{textoParrafo}</p>
    </section>
  );
}
