import { useState } from 'react'
import './App.css'
import { Carrito } from './components/Carrito'
import { Catalogo } from './components/Catalogo'
import { FilaCarrito } from './components/FilaCarrito'
import { ResumenCarrito } from './components/ResumenCarrito'
import { TarjetaProducto } from './components/TarjetaProducto'
import type { ItemCarrito } from './tipos'

function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>()

  return (
    <>
    <Carrito />
    <Catalogo />
    <FilaCarrito />
    <ResumenCarrito />
    <TarjetaProducto />
    </>
  )
}

export default App