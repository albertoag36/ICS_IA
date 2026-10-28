// APARTADOS 4 y 5 · Estado, lista de notas y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.

import { useState } from "react";
import { notasIniciales } from "./datos";
import type { Nota } from "./tipos";
import { ResumenNotas } from "./components/ResumenNotas";
import { calcularResultado } from "./utilidades";
import { FormularioNota } from "./components/FormularioNota";

function App() {
  const [notas, setNotas] = useState<Nota[]>(notasIniciales)

  const totalNotas = notas.reduce((accumulador, nota) => accumulador + nota.calificacion, 0)

  const aprobadas = notas.filter(nota => nota.calificacion >= 5).length

  const media = notas.length !== 0 ? (totalNotas / notas.length).toFixed(2) : 0

  const aniadirNota = (nota: Nota) => {
    setNotas([...notas, nota])
  }

  return (
    <main className="contenedor">
      <h1>Registro de notas</h1>
      <p className="subtitulo">2.º DAW · Evaluación final</p>
      {notas.length === 0 ? <p className="vacio">Todavía no hay notas registradas</p> : <ResumenNotas media={media} aprobados={aprobadas} total={notas.length} />}
      <ul className="lista-notas">
        {notas.map(nota => (<li key={nota.id}>
          <span className="nota">
            <span className="nota_modulo">{nota.modulo}</span>
            <span className="nota__calificacion">{nota.calificacion} · {calcularResultado(nota.calificacion)}</span>
            {nota.observaciones !== undefined ? <span className="observaciones">{nota.observaciones}</span> : null}
          </span>
        </li>))}
      </ul>
      <FormularioNota alAnadir={aniadirNota} />
    </main>
  );
}

export default App;
