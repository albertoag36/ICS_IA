export enum Rol { ADMIN, EDITOR, LECTOR }

export interface Alumno {
    nombre: string,
    nota: number,
    activo?: boolean
}

export interface Usuario {
    rol: Rol.ADMIN | Rol.EDITOR | Rol.LECTOR
    estado: "activo" | "inactivo" | "pendiente"
}