import { categorias, type Categoria } from "../comun/productos";
import type { Orden } from "./ordenar";

export type FiltroCategoria = Categoria | "todas";

interface PropsFiltros {
  busqueda: string;
  categoria: FiltroCategoria;
  orden: Orden;
  alCambiarBusqueda: (valor: string) => void;
  alCambiarCategoria: (valor: FiltroCategoria) => void;
  alCambiarOrden: (valor: Orden) => void;
}

export default function Filtros({
  busqueda,
  categoria,
  orden,
  alCambiarBusqueda,
  alCambiarCategoria,
  alCambiarOrden,
}: PropsFiltros) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        value={busqueda}
        onChange={(e) => alCambiarBusqueda(e.target.value)}
        placeholder="Buscar…"
      />

      <select
        value={categoria}
        onChange={(e) => alCambiarCategoria(e.target.value as FiltroCategoria)}
      >
        <option value="todas">Todas</option>
        {categorias.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={orden}
        onChange={(e) => alCambiarOrden(e.target.value as Orden)}
      >
        <option value="titulo">Título</option>
        <option value="precio-asc">Precio ↑</option>
        <option value="precio-desc">Precio ↓</option>
      </select>
    </form>
  );
}
