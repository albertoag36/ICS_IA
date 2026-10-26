// RETOS 3, 4 y 5 · Estado, lista de tarjetas, votos y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.

import { useState } from "react";
import { candidatosIniciales } from "./datos";
import type { Candidato } from "./tipos";
import { TarjetaCandidato } from "./components/TarjetaCandidato";
import { obtenerEstado } from "./utilidades";
import { FormularioCandidato } from "./components/FormularioCandidato";

function App() {
  const [candidatos, setCandidatos] = useState<Candidato[]>(candidatosIniciales)

  const totalVotos = () => {
    return candidatos.reduce((suma, candidato) => suma + candidato.votos, 0)
  }

  const maximo = () => {
    if (candidatos.length === 0) return 0
    return candidatos.sort((a, b) => b.votos - a.votos).map(candidato => candidato.votos)[0]
  }

  const votar = (id:number) => {
    setCandidatos(candidatos.map((candidato) => candidato.id === id ? {...candidato, votos:candidato.votos + 1} : candidato))
  }

  const aniadir = (nuevoCandidato:Candidato) => {
    setCandidatos(candidatos => [...candidatos, nuevoCandidato])
  }

  return (
    <main className="contenedor">
      <h1>Elección de delegado/a</h1>
      <p className="subtitulo">Ensayo 2 · UT 01 y UT 02</p>
      <p>Votos emitidos: {totalVotos()}</p>
      {candidatos.length === 0 ? <p className="vacio">Todavía no hay candidaturas.</p> : candidatos.map(candidato =>
      <TarjetaCandidato key={candidato.id} candidato={candidato} estado={obtenerEstado(candidato.votos, maximo())} alVotar={votar} />
      )}
      <FormularioCandidato alAnadir={aniadir}/>
    </main>
  );
}

export default App;
