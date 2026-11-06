import { useState } from "react";

interface PropsAvisos {
  mensajes: string[];
}

// ❌ Si mensajes.length vale 0, React pinta un "0" en pantalla
function AvisosConError({ mensajes }: PropsAvisos) {
  return <div>{mensajes.length && <p>Tienes {mensajes.length} avisos</p>}</div>;
}

// ✅ La condición es SIEMPRE un booleano
function AvisosCorrecto({ mensajes }: PropsAvisos) {
  return (
    <div>{mensajes.length > 0 && <p>Tienes {mensajes.length} avisos</p>}</div>
  );
}

// ✅ Alternativa: "salida temprana" (early return)
function AvisosSalidaTemprana({ mensajes }: PropsAvisos) {
  if (mensajes.length === 0) {
    return null;
  }
  return <p>Tienes {mensajes.length} avisos</p>;
}

export default function TrampaDelCero() {
  const [mensajes, setMensajes] = useState<string[]>([]);

  return (
    <section>
      <button onClick={() => setMensajes((ant) => [...ant, "Nuevo aviso"])}>
        Añadir aviso
      </button>
      <button onClick={() => setMensajes([])}>Vaciar</button>
      <h3>Con error</h3>
      <AvisosConError mensajes={mensajes} />
      <h3>Correcto</h3>
      <AvisosCorrecto mensajes={mensajes} />
      <h3>Salida temprana</h3>
      <AvisosSalidaTemprana mensajes={mensajes} />
    </section>
  );
}
