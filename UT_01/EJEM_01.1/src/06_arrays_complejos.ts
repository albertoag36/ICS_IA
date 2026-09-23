// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Arrays complejos (arrays de objetos y arrays de arrays)
// ============================================================

// ----- Array de objetos con tipo -----
const listaDesarrolladores: { nombre: string; edad: number }[] = [
    { nombre: 'Nabendu', edad: 40 },
    { nombre: 'Mousam', edad: 39 }
];

listaDesarrolladores.push({ nombre: 'Shikha', edad: 39 }); // ✅ correcto

// ❌ Error: "edad" debe ser number, no string
// listaDesarrolladores.push({ nombre: 'Hriday', edad: 'Ocho' });
// Type 'string' is not assignable to type 'number'.ts(2322)

// ----- Array de arrays -----
// Para tipar un array de arrays de números se usan dos corchetes: number[][]
const matrizDeNumeros: number[][] = [
    [11, 32, 43],
    [34, 75, 64]
];

matrizDeNumeros.push([21, 32, 13]); // ✅ correcto

// ❌ Error: los elementos internos deben ser todos number
// matrizDeNumeros.push([21, '32', 13]);

console.log(listaDesarrolladores, matrizDeNumeros);
