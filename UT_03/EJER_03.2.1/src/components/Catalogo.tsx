import { catalogo } from "../datos"
import { TarjetaProducto } from "./TarjetaProducto"

export function Catalogo() {
  return (
    <section className="catalogo">
      <div className="productos-grid">
        {catalogo.map(producto => (
          <TarjetaProducto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} />
        ))}
      </div>
    </section>
  )
}