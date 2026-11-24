import type { ItemCarrito } from "../tipos";
import { FilaCarrito } from "./FilaCarrito";

type PropsCarrito = {
  carrito: ItemCarrito[];
  onIncrementar: (id: string) => void;
  onDecrementar: (id: string) => void;
  onEliminar: (id: string) => void;
  onVaciar: () => void;
};

export function Carrito({
  carrito,
  onIncrementar,
  onDecrementar,
  onEliminar,
  onVaciar,
}: PropsCarrito) {
  return (
    <div className="carrito">
      {carrito.map((producto) => (
        <FilaCarrito
          key={producto.idProducto}
          {...producto}
          onIncrementar={onIncrementar}
          onDecrementar={onDecrementar}
          onEliminar={onEliminar}
        />
      ))}
      {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío</p>
      ) : (
        <button onClick={onVaciar}>Vaciar carrito</button>
      )}
    </div>
  );
}
