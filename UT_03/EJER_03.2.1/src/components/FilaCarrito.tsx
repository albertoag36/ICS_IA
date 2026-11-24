import { catalogo } from "../datos";
import type { ItemCarrito } from "../tipos";

type PropsFilaProducto = ItemCarrito & {
  onIncrementar: (id: string) => void;
  onDecrementar: (id: string) => void;
  onEliminar: (id: string) => void;
};

const formatoEuro = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function FilaCarrito({
  idProducto,
  cantidad,
  onIncrementar,
  onDecrementar,
  onEliminar,
}: PropsFilaProducto) {
  const producto = catalogo.find((producto) => producto.id === idProducto);
  if (!producto) return null;

  return (
    <div className="fila-carrito">
      <p>{producto.nombre}</p>
      <p>{formatoEuro.format(producto.precio)} / ud.</p>
      <p>{formatoEuro.format(producto.precio * cantidad)}</p>
      <button onClick={() => onIncrementar(producto.id)}>+</button>
      <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
      <button onClick={() => onDecrementar(producto.id)}>-</button>
    </div>
  );
}
