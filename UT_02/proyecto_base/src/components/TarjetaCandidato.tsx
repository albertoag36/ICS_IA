// RETO 2 · Componente TarjetaCandidato
// Ahora muestra datos fijos y el botón no hace nada. Hay que hacerlo configurable mediante props.

import type { Candidato, Estado } from "../tipos";

type Props = {
  candidato: Candidato,
  estado: Estado,
  textoBoton?: string,
  alVotar: (id: number) => void
}

export function TarjetaCandidato( {candidato, estado, textoBoton, alVotar}:Props) {

  if (textoBoton === undefined) textoBoton = 'Votar'
  return (
    <article className="tarjeta">
      <h3>
        {candidato.nombre} <span className="numero">Nº {candidato.numeroLista}</span>
      </h3>
      <p>
        Votos: <strong>{candidato.votos}</strong>
      </p>
      {estado === 'lider' ? <p>👑 Va en cabeza</p> : null} 
      {estado === 'ninguno' ? <p>Todavía sin votos</p> : null} 
      {candidato.lema !== null ? <p>{candidato.lema}</p> : null} 
      <button onClick={() => alVotar(candidato.id)}>{textoBoton}</button>
    </article>
  );
}
