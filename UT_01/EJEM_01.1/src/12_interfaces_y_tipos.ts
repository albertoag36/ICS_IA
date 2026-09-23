// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Interfaces y alias de tipo (type)
// ============================================================

// ----- Interfaces -----
// Una interfaz define la "forma" que debe tener un objeto: qué
// propiedades tiene y de qué tipo es cada una.
interface Desarrollador {
    nombre: string;
    edad: number;
    esDev: boolean;
}

const persona1: Desarrollador = {
    nombre: 'Nabendu',
    edad: 40,
    esDev: true
};

const persona2: Desarrollador = {
    nombre: 'Mousam',
    edad: 39,
    esDev: true
};

// ----- Alias de tipo (type) -----
// "type" cumple una función parecida a interface, pero es más
// flexible: se puede usar también con strings, uniones, arrays, etc.
// (no solo con objetos).
type DesarrolladorType = {
    nombre: string;
    edad: number;
    esDev: boolean;
};

const persona3: DesarrolladorType = {
    nombre: 'Nabendu',
    edad: 40,
    esDev: true
};

// Alias sobre un tipo primitivo
type NombrePersona = string;
const persona4: NombrePersona = 'Nabendu';

// Alias sobre un array de objetos que usa una unión de literales
type ProgramadorType = {
    nombre: string;
    categoria: 'frontend' | 'backend' | 'mobile';
    edad: number;
}[];

const equipo: ProgramadorType = [
    { nombre: 'Nabendu', categoria: 'frontend', edad: 40 },
    { nombre: 'Mousam', categoria: 'backend', edad: 39 }
];

console.log(persona1, persona2, persona3, persona4, equipo);

// 📌 Diferencia clave para el aula:
// - Las INTERFACES solo se usan con objetos, y se pueden "extender"
//   fácilmente entre sí (herencia).
// - Los TYPE se pueden usar con cualquier tipo de dato (strings,
//   uniones, arrays, objetos...), pero no se "extienden" del mismo modo.
