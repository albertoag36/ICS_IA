// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Objetos
// ============================================================

// ----- Objeto sin tipar explícitamente -----
// TypeScript infiere el tipo de cada propiedad a partir de su valor.
const desarrollador = {
    nombre: 'Nabendu',
    apellidos: 'Biswas',
    edad: 40,
    esFormador: true
};
// Si pasas el ratón por encima de "desarrollador" en VS Code verás:
// { nombre: string; apellidos: string; edad: number; esFormador: boolean }

// ----- Objeto con tipo explícito -----
const nuevoDesarrollador: { nombre: string; edad: number; esDev: boolean } = {
    nombre: 'Mousam',
    edad: 39,
    esDev: true
};

// ✅ Correcto: mismo tipo que el declarado
nuevoDesarrollador.nombre = 'Mousam Mishra';

// ❌ Error: 'Cuarenta' es un string, "edad" espera number
// nuevoDesarrollador.edad = 'Cuarenta';
// Type 'string' is not assignable to type 'number'.ts(2322)

// ❌ Error: "primerNombre" no existe en el tipo declarado
// nuevoDesarrollador.primerNombre = 'Mousam';
// Property 'primerNombre' does not exist on type '{ nombre: string; edad: number; esDev: boolean; }'.ts(2339)

console.log(desarrollador, nuevoDesarrollador);
