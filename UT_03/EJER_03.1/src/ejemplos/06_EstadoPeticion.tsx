import { useState } from "react";

// Unión discriminada: la propiedad "estado" decide qué otras propiedades existen
type EstadoPeticion<T> =
  | { estado: "cargando" }
  | { estado: "error"; mensaje: string }
  | { estado: "correcto"; datos: T };

interface PropsListaUsuarios {
  peticion: EstadoPeticion<string[]>;
}

function ListaUsuarios({ peticion }: PropsListaUsuarios) {
  switch (peticion.estado) {
    case "cargando":
      return <p>Cargando usuarios…</p>;
    case "error":
      // Aquí TypeScript sabe que existe peticion.mensaje
      return <p role="alert">Error: {peticion.mensaje}</p>;
    case "correcto":
      // Aquí TypeScript sabe que existe peticion.datos
      return (
        <ul>
          {peticion.datos.map((nombre) => (
            <li key={nombre}>{nombre}</li>
          ))}
        </ul>
      );
    default: {
      // Si añades un estado nuevo y olvidas tratarlo, esta línea no compila
      const _comprobacion: never = peticion;
      return _comprobacion;
    }
  }
}

export default function DemoEstadoPeticion() {
  const [peticion, setPeticion] = useState<EstadoPeticion<string[]>>({
    estado: "cargando",
  });

  return (
    <section>
      <button onClick={() => setPeticion({ estado: "cargando" })}>
        Cargando
      </button>
      <button
        onClick={() =>
          setPeticion({ estado: "error", mensaje: "No se pudo conectar" })
        }
      >
        Error
      </button>
      <button
        onClick={() =>
          setPeticion({ estado: "correcto", datos: ["Ana", "Luis", "Marta"] })
        }
      >
        Correcto
      </button>
      <ListaUsuarios peticion={peticion} />
    </section>
  );
}
