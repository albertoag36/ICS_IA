import { catalogo } from "../datos"
import { TarjetaProducto } from "./TarjetaProducto"

export function Catalogo() {
  return (
    <div>
      {catalogo.forEach(producto => {
        <TarjetaProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} />
      })}
    </div>
  )
}