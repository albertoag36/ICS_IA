// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Tipos enumerados (enum)
// ============================================================

// Un "enum" combina la idea de tipo unión y tipo literal: define un
// conjunto cerrado de valores CON NOMBRE, fácil de leer y reutilizar.
enum Rol {
    ADMIN,
    LECTOR,
    AUTOR
}

const miRol = Rol.ADMIN;
const rolDeHriday: Rol = Rol.AUTOR;

console.log(miRol, rolDeHriday);
// Por defecto, cada valor del enum es un número: ADMIN = 0, LECTOR = 1,
// AUTOR = 2.

// ----- Enum de strings -----
// También se pueden asignar valores de tipo string, lo que hace que el
// código sea más legible al depurar (en vez de ver un 0, 1 o 2).
enum Estado {
    PENDIENTE = 'PENDIENTE',
    ENVIADO = 'ENVIADO',
    ENTREGADO = 'ENTREGADO'
}

const estadoActual: Estado = Estado.ENVIADO;
console.log(estadoActual);

// ❌ Error: 'CANCELADO' no es un miembro del enum Estado
// const estadoMalo: Estado = 'CANCELADO';
