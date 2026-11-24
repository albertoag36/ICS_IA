import { useState } from "react";
import "./App.css";
import { Catalogo } from "./components/Catalogo";
import type { ItemCarrito } from "./tipos";
import { Carrito } from "./components/Carrito";
import { ResumenCarrito } from "./components/ResumenCarrito";
import { catalogo } from "./datos";

function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  const aniadirCarrito = (id: string) => {
    const producto = catalogo.find((producto) => producto.id === id);
    if (!producto) return;

    setCarrito((anterior) => {
      const existente = anterior.find(
        (productoAnterior) => productoAnterior.idProducto === id,
      );

      if (existente) {
        return anterior.map((productoAnterior) =>
          productoAnterior.idProducto === id
            ? {
                ...productoAnterior,
                cantidad: Math.min(
                  productoAnterior.cantidad + 1,
                  producto.stock,
                ),
              }
            : productoAnterior,
        );
      }
      return [...anterior, { idProducto: producto.id, cantidad: 1 }];
    });
  };

  const incrementarCantidad = (id: string) => {
    const productoCatalogo = catalogo.find((p) => p.id === id);
    if (!productoCatalogo) return;

    setCarrito((anterior) =>
      anterior.map((producto) =>
        producto.idProducto === id && producto.cantidad < productoCatalogo.stock
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto,
      ),
    );
  };

  const decrementarCantidad = (id: string) => {
    setCarrito((anterior) =>
      anterior
        .map((producto) =>
          producto.idProducto === id
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto,
        )
        .filter((producto) => producto.cantidad > 0),
    );
  };

  const eliminarCarrito = (id: string) =>
    setCarrito(carrito.filter((producto) => producto.idProducto !== id))

  const vaciar = () => setCarrito([]);
  return (
    <div className="app-layout">
      <Catalogo carrito={carrito} onAniadir={aniadirCarrito} />
      <Carrito
        carrito={carrito}
        onIncrementar={incrementarCantidad}
        onDecrementar={decrementarCantidad}
        onEliminar={eliminarCarrito}
        onVaciar={vaciar}
      />
      <ResumenCarrito carrito={carrito} onVaciar={vaciar}/>
    </div>
  );
}

export default App;
