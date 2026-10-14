import './App.css'
import { Cabecera } from './componentes/Cabecera.jsx'
import { Contador } from './componentes/Contador.jsx'
import { Pie } from './componentes/Pie.jsx'
import { Principal } from './componentes/Principal.jsx'
import { TarjetaModulo } from './componentes/TarjetaModulo.jsx'

function App() {
  return (
    <>
      <Cabecera />
      <Principal />
      <Pie />
      <TarjetaModulo titulo="Desarrollo Web en Entorno Cliente" horas={7} curso="2º">
        JavaScript, TypeScript y React en el navegador.
      </TarjetaModulo>
      <Contador valorInicial={4}/>
    </>
  )
}

export default App
