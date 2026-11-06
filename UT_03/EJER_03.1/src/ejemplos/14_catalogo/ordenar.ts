import type { Producto } from "../comun/productos";

export type Orden = "titulo" | "precio-asc" | "precio-desc";

// Record<Orden, ...> garantiza que existe un comparador para cada criterio
export const comparadores: Record<Orden, (a: Producto, b: Producto) => number> =
  {
    titulo: (a, b) => a.titulo.localeCompare(b.titulo, "es"),
    "precio-asc": (a, b) => a.precio - b.precio,
    "precio-desc": (a, b) => b.precio - a.precio,
  };
