import { useState } from 'react'
import './App.css'
import { Cabecera } from './componentes/Cabecera.jsx'
import { Contador } from './componentes/Contador.jsx'
import { Pie } from './componentes/Pie.jsx'
import { Principal } from './componentes/Principal.jsx'
import { TarjetaModulo } from './componentes/TarjetaModulo.jsx'
import { AvisoCookies } from './componentes/AvisoCookies.jsx'

function App() {
  const [decision, setDecision] = useState('')

      const alAceptar = () => {
        console.log("Cookies aceptadas")
        setDecision("Has aceptado las cookies")
    }

    const alRechazar = () => {
        console.log("Cookies rechazadas")
        setDecision("Has rechazado las cookies")
    }
  return (
    <>
      <Cabecera />
      <Principal />
      <Pie />
      <TarjetaModulo titulo="Desarrollo Web en Entorno Cliente" horas={7} curso="2º">
        JavaScript, TypeScript y React en el navegador.
      </TarjetaModulo>
      <Contador etiqueta="Asistentes a la charla" valorInicial={4}/>
      <AvisoCookies onAceptar={alAceptar} onRechazar={alRechazar}>Usamos cookies para mejorar tu experiencia</AvisoCookies>
      {decision && <p>{decision}</p>}
    </>
  )
}

export default App
