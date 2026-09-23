// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Inferencia de tipos — ¿cuándo tipar y cuándo dejar que
// TypeScript infiera?
// ============================================================

// ----- Ejemplo problemático -----
// Si declaramos una variable SIN tipo ni valor inicial, TypeScript le
// asigna el tipo "any" (cualquier cosa), y a partir de ahí perdemos
// toda la protección del tipado estático.
let salario;
salario = 12000;   // ✅ no da error
salario = '12000'; // ✅ tampoco da error... ¡pero no debería dejarnos!
salario = true;    // ✅ tampoco da error... ¡mala señal!

// ----- Solución: declarar el tipo explícitamente -----
let salarioBueno: number;
salarioBueno = 12000; // ✅ correcto

// ❌ Error: ahora sí, TypeScript nos avisa
// salarioBueno = '12000';
// Type 'string' is not assignable to type 'number'.ts(2322)

// ❌ Error
// salarioBueno = true;

console.log(salario, salarioBueno);

// 📌 Regla general:
// - Si das un valor inicial, deja que TypeScript infiera el tipo
//   (let miNumero = 10; ya es de tipo number).
// - Si la variable empieza sin valor y se lo vas a asignar más tarde,
//   decláralo explícitamente (let salarioBueno: number;).
