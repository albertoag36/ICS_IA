import { formatearPrecio, type Producto } from "../comun/productos";

interface PropsTarjetaProducto {
  producto: Producto;
}

export default function TarjetaProducto({ producto }: PropsTarjetaProducto) {
  const esEconomico = producto.precio < 30;

  return (
    <li>
      <h3>
        {producto.titulo}{" "}
        {esEconomico && <small style={{ color: "green" }}>¡Económico!</small>}
      </h3>
      <p>
        {formatearPrecio(producto.precio)} · {producto.categoria}
      </p>
    </li>
  );
}
