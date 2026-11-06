import { useState, type ReactNode } from "react";

export default function CondicionesUso() {
  const [mostrarCondiciones, setMostrarCondiciones] = useState(false);

  function manejarMostrarResumen() {
    setMostrarCondiciones(true);
  }

  // ReactNode: cualquier cosa que React sepa pintar (JSX, texto, número, null...)
  let parrafo: ReactNode = null;
  if (mostrarCondiciones) {
    parrafo = (
      <p>
        Al continuar, aceptas que no te indemnizaremos por ningún daño o
        perjuicio causado por nuestros productos.
      </p>
    );
  }

  return (
    <section>
      <button onClick={manejarMostrarResumen}>
        Mostrar resumen de las condiciones de uso
      </button>
      {parrafo}
    </section>
  );
}
