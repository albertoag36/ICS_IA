// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Propiedades opcionales
// ============================================================

// ----- Enfoque poco recomendable -----
// Si un campo puede no tener valor, una opción es tipificarlo con
// "| undefined" y dejarlo en undefined cuando no se conozca. El
// problema es que siempre hay que escribir esa propiedad, aunque sea
// vacía.
let objetoOpcional: { nombre: string; edad: number | undefined } = {
    nombre: 'Nabendu',
    edad: undefined
};

// ----- Enfoque recomendado: el operador "?" -----
// Con "?" indicamos que la propiedad es OPCIONAL: si se proporciona,
// debe ser del tipo indicado, pero no es obligatorio incluirla.
let mejorObjetoOpcional: { nombre: string; edad?: number } = {
    nombre: 'Nabendu'
    // "edad" no aparece y no da ningún error
};

mejorObjetoOpcional.edad = 40; // ✅ correcto, si se asigna debe ser number

// ❌ Error
// mejorObjetoOpcional.edad = 'cuarenta';
// Type 'string' is not assignable to type 'number | undefined'.ts(2322)

console.log(objetoOpcional, mejorObjetoOpcional);
