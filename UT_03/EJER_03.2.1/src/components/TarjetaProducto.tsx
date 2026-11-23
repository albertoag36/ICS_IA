import type { Producto } from "../tipos";

export function TarjetaProducto({ id, nombre, precio, stock }: Producto) {
  const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });
  return (
    <div className="tarjeta-producto">
      <p>{nombre}</p>
      <p>{formatoEuro.format(precio)}</p>
      <button disabled = {stock === 0 ? true : false}>{stock === 0 ? 'Agotado' : 'Añadir'}</button>
    </div>
  );
}
