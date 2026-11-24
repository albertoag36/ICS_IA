import { catalogo } from "../datos";
import type { ItemCarrito } from "../tipos";
import { TarjetaProducto } from "./TarjetaProducto";

type PropsCatalogo = {
  carrito: ItemCarrito[];
  onAniadir: (id: string) => void;
};

export function Catalogo({ carrito, onAniadir }: PropsCatalogo) {
  return (
    <section className="catalogo">
      <div className="productos-grid">
        {catalogo.map((producto) => {
          const enCarrito =
            carrito.find((i) => i.idProducto === producto.id)?.cantidad ?? 0;

          return (
            <TarjetaProducto
              key={producto.id}
              {...producto}
              enCarrito={enCarrito}
              onAniadir={onAniadir}
            />
          );
        })}
      </div>
    </section>
  );
}
