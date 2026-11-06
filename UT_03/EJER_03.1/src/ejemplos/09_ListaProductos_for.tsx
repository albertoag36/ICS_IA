import type { ReactElement } from "react";
import { productos, formatearPrecio, type Producto } from "./comun/productos";

interface PropsListaProductos {
  productos: Producto[];
}

function ListaProductos({ productos }: PropsListaProductos) {
  const elementos: ReactElement[] = [];

  for (const producto of productos) {
    elementos.push(
      <li>
        <h2>{producto.titulo}</h2>
        <p>{formatearPrecio(producto.precio)}</p>
      </li>,
    );
  }

  return <ul>{elementos}</ul>;
}

export default function DemoListaFor() {
  return <ListaProductos productos={productos} />;
}
