export declare enum Rol {
    ADMIN = 0,
    EDITOR = 1,
    LECTOR = 2
}
export interface Alumno {
    nombre: string;
    nota: number;
    activo?: boolean;
}
export interface Usuario {
    rol: Rol;
    estado: "activo" | "inactivo" | "pendiente";
}
//# sourceMappingURL=modelo.d.ts.map