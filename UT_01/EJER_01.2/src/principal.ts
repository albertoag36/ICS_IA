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
{ nombre: "Garcia", nota: 1, activo: false },
{ nombre: "Pepe", nota: 3 },
]

const calcularMedia = (alumnos: Alumno[]): number => alumnos.reduce((acc: number, alumno: Alumno) => acc + alumno.nota, 0) / alumnos.length

const mostrarResumen = (alumnos: Alumno[]): void => console.log(alumnos)

// --- 4 ---

const usuario: Usuario = {
    rol: Rol.LECTOR,
    estado: "inactivo"
}

const describirUsuario = (usuario: Usuario): string => `Rol: ${Rol[usuario.rol]} Estado: ${usuario.estado}`

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
        rol: Rol.EDITOR,
        estado: "pendiente"
    },
    {
        rol: Rol.LECTOR,
        estado: "activo"
    }
]

const describirUsuarios = (usuarios: Usuario[]): string => {
    let mensaje: string = ""
    usuarios.forEach(usuario => {
        mensaje += `Rol: ${Rol[usuario.rol]} Estado: ${usuario.estado}\n`
    })

    return mensaje
}


console.log(describirUsuario(usuario))
console.log(calcularMedia(alumnos))
mostrarResumen(alumnos)
console.log(describirUsuarios(usuarios))