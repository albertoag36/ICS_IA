import { Rol } from "./modelo.js";
// --- 1 ---
console.log('Hola TypeScript');
// --- 2 ---
let edad;
let nombre;
let esActivo;
let persona;
// --- 3 ---
let alumnos = [{ nombre: "Alberto", nota: 9 },
    { nombre: "Alves", nota: 3, activo: true },
    { nombre: "Garcia", nota: 0, activo: false },
    { nombre: "Pepe", nota: 3 },
];
// Revisar media
const calcularMedia = (alumnos) => alumnos.reduce((acc, alumno) => acc + alumno.nota, 0) / alumnos.length;
const mostrarResumen = (alumnos) => console.log(alumnos);
// --- 4 ---
const usuario = {
    rol: Rol.ADMIN,
    estado: "activo"
};
const describirUsuario = (usuario) => `Rol: ${usuario.rol} Estado: ${usuario.estado}`;
const usuarios = [
    {
        rol: Rol.ADMIN,
        estado: "activo"
    },
    {
        rol: Rol.ADMIN,
        estado: "inactivo"
    },
    {
        rol: Rol.ADMIN,
        estado: "pendiente"
    },
    // {
    //     rol: Rol.EDITOR,
    //     estado: "pepe"
    // },
    {
        rol: Rol.LECTOR,
        estado: "activo"
    }
];
// Revisar
console.log(describirUsuario(usuario));
console.log(calcularMedia(alumnos));
console.log(mostrarResumen(alumnos));
//# sourceMappingURL=principal.js.map