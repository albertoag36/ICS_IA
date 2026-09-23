"use strict";
// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: El tipo "number"
// ============================================================
//
// TypeScript añade TIPADO ESTÁTICO a JavaScript: le decimos qué tipo
// de dato puede contener una variable y el compilador nos avisa si
// intentamos asignarle un valor de otro tipo.
// Sin indicar el tipo explícitamente, TypeScript lo INFIERE a partir
// del valor inicial. Aquí infiere que "miNumero" es de tipo number.
let miNumero = 10;
// Aquí indicamos el tipo explícitamente con ": number"
let otroNumero = 20;
// ✅ Correcto: 12 es un número
miNumero = 12;
// ❌ Error de TypeScript: no se puede asignar un string a una variable
// de tipo number.
// miNumero = '12';
// Type 'string' is not assignable to type 'number'.ts(2322)
// ✅ Correcto
otroNumero = 30;
// ❌ Error de TypeScript: no se puede asignar un boolean a number
// otroNumero = false;
// Type 'boolean' is not assignable to type 'number'.ts(2322)
console.log(miNumero, otroNumero);
// 💡 Para probarlo en clase:
// 1. Descomenta una de las líneas marcadas con ❌
// 2. Observa el subrayado rojo en el editor (VS Code)
// 3. Pasa el ratón por encima para leer el mensaje de error
// 4. Ejecuta "npx tsc --noEmit" en la terminal para verlo también
//    desde la línea de comandos
