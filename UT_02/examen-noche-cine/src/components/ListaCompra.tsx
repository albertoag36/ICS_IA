import { useState } from "react";
import type { Producto } from "../tipos";
import { productosIniciales } from "../datos";

const ListaCompra = () => {
  const [lista, setLista] = useState<Producto[]>(productosIniciales);
  const [value, setValue] = useState<string>("");

  const onAniadir = () => {
    if (value.trim() !== "") {
      setLista((lista) => [
        ...lista,
        {
          id: Date.now(),
          nombre: value,
          comprado: false,
        },
      ]);
    }
    setValue("");
  };

  const onQuitar = (id: number) =>
    setLista((lista) => lista.filter((producto) => producto.id !== id));

  const onCheckBox = (id: number) =>
    setLista((lista) =>
      lista.map((producto) =>
        producto.id === id
          ? { ...producto, comprado: !producto.comprado }
          : producto,
      ),
    );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={onAniadir}>Añadir</button>
      <ul style={{ listStyleType: "none" }}>
        {lista.map((producto) => (
          <li
            key={producto.id}
            style={{
              textDecoration: producto.comprado ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              name="productos"
              value={producto.id}
              onChange={() => onCheckBox(producto.id)}
              checked={producto.comprado}
              multiple
            ></input>
            {producto.nombre}
            <button onClick={() => onQuitar(producto.id)}>Quitar</button>
          </li>
        ))}
        <br />
        <p>Pendientes: {lista.filter(producto => producto.comprado === false).length}</p>
      </ul>
    </div>
  );
};

export default ListaCompra
