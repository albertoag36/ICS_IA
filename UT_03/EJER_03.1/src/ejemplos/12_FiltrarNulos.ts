interface Usuario {
  nombre: string;
}

const respuesta: (Usuario | null)[] = [
  { nombre: "Ana" },
  null,
  { nombre: "Luis" },
];

// Desde TypeScript 5.5 el compilador INFIERE el predicado de tipo:
// `conNombre` es Usuario[] (sin null) sin escribir `(u): u is Usuario => ...`
export const conNombre = respuesta.filter((u) => u !== null);

export const nombres: string[] = conNombre.map((u) => u.nombre);
