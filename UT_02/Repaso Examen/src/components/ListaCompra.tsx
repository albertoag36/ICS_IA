import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  comprado: boolean;
}

export const ListaCompra = () => {
  const [lista, setLista] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState<string>("");

  const manejarClick = () => {
    if (nombre === "") return;
    setLista((productos) => [
      ...productos,
      {
        id: Date.now(),
        nombre: nombre,
        comprado: false,
      },
    ]);
    setNombre("");
  };

  const toggleComprado = (id: number) => {
    setLista((productos) =>
      productos.map((producto) =>
        producto.id === id
          ? { ...producto, comprado: !producto.comprado }
          : producto,
      ),
    );
  };

  const quitar = (id: number) => {
    setLista((prev) => prev.filter((p) => p.id !== id));
  };

  const pendientes = () => lista.filter(producto => !producto.comprado).length
  

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      ></input>
      <button onClick={manejarClick}>Añadir</button>
      <ul>
        {lista.map((producto) => (
          <li
            key={producto.id}
            style={{
              textDecoration: producto.comprado ? "line-through" : "none",
            }}
          >
            {producto.nombre}
            <input
              type="checkbox"
              checked={producto.comprado}
              onChange={() => toggleComprado(producto.id)}
            />
            <button
              onClick={() => quitar(producto.id)}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      {lista.length !== 0 && <p>Pendientes: {pendientes()}</p>}
    </div>
  );
};
