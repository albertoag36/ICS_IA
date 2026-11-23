import type { Producto } from "../tipos";

export function TarjetaProducto( {id, nombre, precio, stock}: Producto ) {
  return (
    <div className="tarjeta-producto">
      <p>{nombre}</p>
      <p>{precio}</p>
      <button>Añadir</button>
    </div>
  )
}
