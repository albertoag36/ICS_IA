import { useState } from "react";

export default function CondicionesUso() {
  const [mostrarCondiciones, setMostrarCondiciones] = useState(false);

  return (
    <section>
      <button
        onClick={() => setMostrarCondiciones((anterior) => !anterior)}
        aria-expanded={mostrarCondiciones}
      >
        {mostrarCondiciones ? "Ocultar" : "Mostrar"} resumen de las condiciones
        de uso
      </button>

      {mostrarCondiciones && (
        <p>
          Al continuar, aceptas que no te indemnizaremos por ningún daño o
          perjuicio causado por nuestros productos.
        </p>
      )}
    </section>
  );
}
