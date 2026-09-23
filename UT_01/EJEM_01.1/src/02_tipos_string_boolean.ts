// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Los tipos "string" y "boolean"
// ============================================================

let miCadena: string = 'Hola';
let otraCadena = 'Mundo'; // inferido como string

// ❌ Error: no se puede asignar un boolean a una variable string
// miCadena = true;
// Type 'boolean' is not assignable to type 'string'.ts(2322)

// ❌ Error: no se puede asignar un number a una variable inferida
// como string
// otraCadena = 45;

let miBooleano: boolean = true;
let otroBooleano = false; // inferido como boolean

// ❌ Error: 'true' entre comillas es un STRING, no un boolean
// miBooleano = 'true';

// ❌ Error: no se puede asignar un number a boolean
// otroBooleano = 76;

console.log(miCadena, otraCadena, miBooleano, otroBooleano);

// 📌 Igual que con "number": si asignamos un tipo y luego uno
// incorrecto, aparece un error. Y si no indicamos el tipo, TypeScript
// lo infiere a partir del valor inicial.
