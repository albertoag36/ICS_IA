import { categorias, productos } from "./comun/productos";

export default function AgruparPorCategoria() {
  // Object.groupBy (ES2024) → Partial<Record<Categoria, Producto[]>>
  const grupos = Object.groupBy(productos, (p) => p.categoria);

  return (
    <>
      {categorias.map((categoria) => {
        const delGrupo = grupos[categoria];
        if (!delGrupo) return null; // categoría sin productos
        return (
          <section key={categoria}>
            <h2>{categoria}</h2>
            <ul>
              {delGrupo.map((p) => (
                <li key={p.id}>{p.titulo}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
