import { Alumno, Usuario, Rol } from "./modelo.js"

// --- 1 ---
console.log('Hola TypeScript')

// --- 2 ---
let edad: number
let nombre: string
let esActivo: boolean

let persona: { nombre: string, edad: number, esSocio: boolean }

// --- 3 ---
let alumnos: Alumno[] = [{ nombre: "Alberto", nota: 9 },
{ nombre: "Alves", nota: 3, activo: true },
{ nombre: "Garcia", nota: 0, activo: false },
{ nombre: "Pepe", nota: 3 },
]

// Revisar media
const calcularMedia = (alumnos: Alumno[]): number => alumnos.reduce((acc: number, alumno: Alumno) => acc + alumno.nota, 0) / alumnos.length

const mostrarResumen = (alumnos: Alumno[]): void => console.log(alumnos)

// --- 4 ---

const usuario: Usuario = {
    rol: Rol.ADMIN,
    estado: "activo"
}

const describirUsuario = (usuario: Usuario): string => `Rol: ${usuario.rol} Estado: ${usuario.estado}`

const usuarios: Usuario[] = [
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
]

// Revisar
console.log(describirUsuario(usuario))
console.log(calcularMedia(alumnos))
console.log(mostrarResumen(alumnos))