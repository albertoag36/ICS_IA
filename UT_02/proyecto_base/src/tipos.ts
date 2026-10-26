// RETO 1 · Tipos
// Escribe aquí los tipos `Candidato` y `Estado` (consulta el enunciado).

export type Candidato = {
    id: number,
    nombre: string,
    numeroLista: number,
    votos: number,
    lema?: string
}

export type Estado = "ninguno" | "algunos" | "lider"