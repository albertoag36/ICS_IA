import type { Producto } from "../comun/productos";
import TarjetaProducto from "./TarjetaProducto";

interface PropsListaProductos {
  productos: readonly Producto[];
}

export default function ListaProductos({ productos }: PropsListaProductos) {
  if (productos.length === 0) {
    return <p>No hay productos que coincidan con los filtros.</p>;
  }

  return (
    <ul>
      {productos.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} />
      ))}
    </ul>
  );
}
