// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Tipos de unión (union types)
// ============================================================

// Una variable de tipo unión puede contener valores de varios tipos,
// separados por "|" (léase "o").
let numeroOCadena: number | string;
numeroOCadena = 10;     // ✅ correcto
numeroOCadena = 'Diez'; // ✅ correcto

// ❌ Error: boolean no forma parte de la unión number | string
// numeroOCadena = true;
// Type 'boolean' is not assignable to type 'string | number'.ts(2322)

// También se puede aplicar a arrays: solo admite elementos number o string
const listaMixta: (number | string)[] = [10, 'Diez', 20, 'Veinte'];

// ❌ Error: true (boolean) no está permitido en el array
// const listaMixtaMala: (number | string)[] = [10, 'Diez', true];

console.log(numeroOCadena, listaMixta);

// 💡 Ejemplo típico de uso: un identificador que a veces llega como
// número y a veces como texto (por ejemplo, desde una API):
// let idPedido: number | string;
