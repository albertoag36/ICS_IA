// RETO 5 · Componente FormularioCandidato
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.

import { useState, type FormEvent } from "react";
import type { Candidato } from "../tipos";

type Porps = {
  alAnadir: (candidato: Candidato) => void
}

export function FormularioCandidato({ alAnadir }: Porps) {
  const [nombre, setNombre] = useState<string>('')
  const [numeroLista, setNumeroLista] = useState<number>(0)
  const [lema, setLema] = useState<string>('')

  const manejarSubmit = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const nuevoCandidato:Candidato = {
      id: Date.now(),
      nombre: nombre,
      numeroLista: numeroLista,
      votos: 0,
      lema: lema
    }

    console.log(nuevoCandidato)
    alAnadir(nuevoCandidato)
    setNombre('')
    setNumeroLista(0)
    setLema('')
  }

  const manejarDisabled = () => (nombre.trim() !== '' && numeroLista >= 1 && numeroLista <= 30) ? false : true


  return (
    <form className="formulario" onSubmit={manejarSubmit}>
      <h2>Nueva candidatura</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="campo">
        <label htmlFor="numeroLista">Número de lista (1 a 30)</label>
        <input id="numeroLista" type="number" min="1" max="30" step="1" value={numeroLista} onChange={(e) => setNumeroLista(parseInt(e.target.value))} />
      </div>
      <div className="campo">
        <label htmlFor="lema">Lema (opcional)</label>
        <input id="lema" type="text" value={lema} onChange={(e) => setLema(e.target.value)} />
      </div>
      <button type="submit" disabled={manejarDisabled()}>Presentar candidatura</button>
    </form>
  );
}
