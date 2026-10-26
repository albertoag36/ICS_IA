// RETO 1 · Función obtenerEstado
// Escribe aquí la función `obtenerEstado` (consulta el enunciado).

import type { Estado } from "./tipos";


export const obtenerEstado = (votos: number, maximo: number):Estado => {
    if (votos !== 0 && votos === maximo) return "lider"
    if (votos !== 0 && votos < maximo) return "algunos"
    return "ninguno"
}