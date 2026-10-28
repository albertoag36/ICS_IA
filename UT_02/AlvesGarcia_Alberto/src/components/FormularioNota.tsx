// APARTADO 5 · Componente FormularioNota

import { useState } from "react";
import type { Nota } from "../tipos";

// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.
type Props = {
  alAnadir: (nota:Nota) => void
}


export function FormularioNota( {alAnadir}:Props) {
  const [modulo, setModulo] = useState('')
  const [calificacion, setCalificacion] = useState(0)
  const [observaciones, setObservaciones] = useState('')

  const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    alAnadir({
      id: Date.now(),
      modulo: modulo,
      calificacion: calificacion,
      observaciones: observaciones
    })
    setModulo('')
    setCalificacion(0)
    setObservaciones('')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Añadir nota</h2>
      <div className="campo">
        <label htmlFor="modulo">Módulo</label>
        <input id="modulo" type="text" value={modulo} onChange={(e) => setModulo(e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="calificacion">Calificación (0 a 10)</label>
        <input id="calificacion" type="number" min="0" max="10" step="0.1" value={calificacion} onChange={(e) => {
          setCalificacion(e.target.valueAsNumber)
        }}/>
      </div>
      <div className="campo">
        <label htmlFor="observaciones">Observaciones (opcional)</label>
        <input id="observaciones" type="text" value={observaciones} onChange={(e) => setObservaciones(e.target.value)}/>
      </div>
      <button type="submit" disabled={modulo.trim() !== '' && (calificacion >=0 && calificacion <=10) ? false : true}>Añadir nota</button>
    </form>
  );
}
