import './App.css'
import { ContadorLimitado } from './components/ContadorLimitado'
import { InterruptorLuz } from './components/InterruptorLuz'
import { ListaCompra } from './components/ListaCompra'

function App() {

  return (
    <>
      <InterruptorLuz />
      <ContadorLimitado />
      <ListaCompra />
    </>
  )
}

export default App
