import { catalogo } from "../datos";
import type { ItemCarrito } from "../tipos";

type PropsResumenCarrito = {
  carrito: ItemCarrito[];
};

const GASTOS_ENVIO = 4.95;
const ENVIO_GRATIS_DESDE = 50;

const formatoEuro = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function ResumenCarrito({ carrito }: PropsResumenCarrito) {
  const unidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const subtotal = carrito.reduce((acc, item) => {
    const producto = catalogo.find((p) => p.id === item.idProducto);
    return acc + (producto ? producto.precio * item.cantidad : 0);
  }, 0);

  const envioGratis = subtotal >= ENVIO_GRATIS_DESDE;
  const envio = envioGratis ? 0 : GASTOS_ENVIO;
  const total = subtotal + envio;

  return (
    <div className="resumen-carrito">
      <h3>Resumen</h3>

      {envioGratis ? (
        <p>¡Envío gratis!</p>
      ) : (
        <p>
          Te faltan {formatoEuro.format(ENVIO_GRATIS_DESDE - subtotal)} para el
          envío gratis
        </p>
      )}
      <progress value={Math.min(subtotal, ENVIO_GRATIS_DESDE)} max={ENVIO_GRATIS_DESDE} />

      <p>Unidades</p>
      <p>{unidades}</p>
      <p>Subtotal</p>
      <p>{formatoEuro.format(subtotal)}</p>
      <p>Envío</p>
      <p>{envioGratis ? "Gratis" : formatoEuro.format(envio)}</p>
      <p>Total</p>
      <p>{formatoEuro.format(total)}</p>

      <button>Confirmar pedido</button>
    </div>
  );
}