// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Funciones tipadas
// ============================================================

// ----- Sin tipar los parámetros -----
// Si no especificamos el tipo de los parámetros, TypeScript no puede
// avisarnos si les pasamos un valor incorrecto.
const sumarNumeros = (num1: any, num2: any) => {
    return num1 + num2;
};
sumarNumeros(10, 20);   // ✅ resultado correcto: 30
sumarNumeros(10, '20'); // ⚠️ sin tipos concretos, esto concatena "1020"
                         // en vez de sumar: ¡un error difícil de detectar!

// ----- Tipando los parámetros -----
const multiplicarNumeros = (num1: number, num2: number) => {
    return num1 * num2;
};
multiplicarNumeros(10, 20); // ✅ correcto

// ❌ Error: '20' es un string, se espera number
// multiplicarNumeros(10, '20');
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

// ----- Tipando también el valor de retorno -----
// Esto permite detectar errores si la función devuelve algo distinto
// de lo esperado.
const moduloNumeros = (num1: number, num2: number): number => {
    return num1 % num2;
    // Si en vez de esto devolviéramos "num1 > num2" (un boolean),
    // TypeScript marcaría un error porque el tipo de retorno es number.
};
moduloNumeros(10, 20); // ✅ correcto

// ❌ Error
// moduloNumeros(10, '20');

// ----- Funciones que no devuelven nada: void -----
const imprimirSuma = (num1: number, num2: number): void => {
    console.log(num1 + num2);
};
imprimirSuma(10, 20); // ✅ correcto

// ❌ Error
// imprimirSuma(10, '20');
