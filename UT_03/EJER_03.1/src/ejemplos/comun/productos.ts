export const categorias = ["libros", "hogar", "oficina", "cursos"] as const;

export type Categoria = (typeof categorias)[number];

export interface Producto {
  id: string;
  titulo: string;
  precio: number;
  categoria: Categoria;
}

export const productos: Producto[] = [
  { id: "p1", titulo: "Un libro", precio: 59.99, categoria: "libros" },
  { id: "p2", titulo: "Una alfombra", precio: 129.49, categoria: "hogar" },
  { id: "p3", titulo: "Otro libro", precio: 39.99, categoria: "libros" },
  { id: "p4", titulo: "Lámpara de mesa", precio: 24.9, categoria: "hogar" },
  {
    id: "p5",
    titulo: "Manual de TypeScript",
    precio: 34.5,
    categoria: "libros",
  },
  {
    id: "p6",
    titulo: "Silla ergonómica",
    precio: 269.99,
    categoria: "oficina",
  },
  {
    id: "p7",
    titulo: "Escritorio elevable",
    precio: 349,
    categoria: "oficina",
  },
  { id: "p8", titulo: "Curso de React", precio: 19.99, categoria: "cursos" },
];

const formateadorEuros = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
});

export function formatearPrecio(valor: number): string {
  return formateadorEuros.format(valor);
}
