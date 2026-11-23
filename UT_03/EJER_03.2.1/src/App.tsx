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
    const producto = carrito.find((producto) => producto.idProducto === id);
    if (!producto) return;

    
  };

  const decrementarCantidad = () => {};

  const eliminarCarrito = () => {};

  const vaciar = () => setCarrito([]);
  return (
    <div className="app-layout">
      <Catalogo />
      <Carrito />
      <ResumenCarrito />
    </div>
  );
}

export default App;
