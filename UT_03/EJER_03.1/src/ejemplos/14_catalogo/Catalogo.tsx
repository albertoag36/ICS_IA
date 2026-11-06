import { useState } from "react";
import { productos } from "../comun/productos";
import Filtros, { type FiltroCategoria } from "./Filtros";
import ListaProductos from "./ListaProductos";
import { comparadores, type Orden } from "./ordenar";

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState<FiltroCategoria>("todas");
  const [orden, setOrden] = useState<Orden>("titulo");

  // Se calcula en cada render a partir del estado: NO es otro useState
  const texto = busqueda.trim().toLowerCase();
  const visibles = productos
    .filter((p) => categoria === "todas" || p.categoria === categoria)
    .filter((p) => p.titulo.toLowerCase().includes(texto))
    .toSorted(comparadores[orden]);

  return (
    <section>
      <Filtros
        busqueda={busqueda}
        categoria={categoria}
        orden={orden}
        alCambiarBusqueda={setBusqueda}
        alCambiarCategoria={setCategoria}
        alCambiarOrden={setOrden}
      />
      <p>
        Mostrando {visibles.length} de {productos.length} productos
      </p>
      <ListaProductos productos={visibles} />
    </section>
  );
}
