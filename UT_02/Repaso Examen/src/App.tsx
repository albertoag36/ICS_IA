import './App.css'
import { BuscadorPeliculas } from './components/BuscadorPeliculas'
import { ContadorLimitado } from './components/ContadorLimitado'
import { InterruptorLuz } from './components/InterruptorLuz'
import { ListaCompra } from './components/ListaCompra'


function App() {

  return (
    <>
      <InterruptorLuz />
      <ContadorLimitado />
      <ListaCompra />
      <BuscadorPeliculas />
    </>
  )
}

export default App
