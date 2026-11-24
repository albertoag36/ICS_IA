import type { Producto } from "../tipos";

type PropsTarjetaProducto = Producto & {
  enCarrito: number;
  onAniadir: (id: string) => void;
};

const formatoEuro = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function TarjetaProducto({
  id,
  nombre,
  precio,
  stock,
  enCarrito,
  onAniadir,
}: PropsTarjetaProducto) {
  const agotado = stock === 0;
  const sinMas = !agotado && enCarrito >= stock;

  let texto = "Añadir";
  if (agotado) texto = "Agotado";
  else if (sinMas) texto = "Sin más unidades";

  return (
    <div className="tarjeta-producto">
      <p>{nombre}</p>
      <p>{formatoEuro.format(precio)}</p>
      <button disabled={agotado || sinMas} onClick={() => onAniadir(id)}>
        {texto}
      </button>
    </div>
  );
}
