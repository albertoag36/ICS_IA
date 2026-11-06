import { productos, formatearPrecio, type Producto } from "./comun/productos";

interface PropsProductoItem {
  producto: Producto;
}

function ProductoItem({ producto }: PropsProductoItem) {
  return (
    <li>
      <h2>{producto.titulo}</h2>
      <p>{formatearPrecio(producto.precio)}</p>
    </li>
  );
}

interface PropsListaProductos {
  productos: readonly Producto[]; // readonly: este componente no modifica el array
}

function ListaProductos({ productos }: PropsListaProductos) {
  if (productos.length === 0) {
    return <p>No hay productos que mostrar.</p>;
  }

  return (
    <ul>
      {productos.map((producto) => (
        <ProductoItem key={producto.id} producto={producto} />
      ))}
    </ul>
  );
}

export default function DemoListaComponente() {
  return (
    <>
      <ListaProductos productos={productos} />
      <ListaProductos productos={[]} />
    </>
  );
}
