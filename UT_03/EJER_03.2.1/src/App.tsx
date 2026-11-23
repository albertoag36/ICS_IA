import { useState } from 'react'
import './App.css'
import { Catalogo } from './components/Catalogo'
import type { ItemCarrito } from './tipos'

function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>()

  return (
    <div className="app-layout">
      <Catalogo/>
    </div>
  )
}

export default App