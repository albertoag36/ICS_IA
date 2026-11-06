import { productos, formatearPrecio, type Producto } from "./comun/productos";

interface PropsListaProductos {
  productos: Producto[];
}

function ListaProductos({ productos }: PropsListaProductos) {
  return (
    <ul>
      {productos.map((producto) => (
        <li>
          <h2>{producto.titulo}</h2>
          <p>{formatearPrecio(producto.precio)}</p>
        </li>
      ))}
    </ul>
  );
}

export default function DemoListaMap() {
  return <ListaProductos productos={productos} />;
}
