// APARTADO 2 · Función calcularResultado
// Escribe aquí la función `calcularResultado` (consulta el enunciado).

import type { Resultado } from "./tipos";

export const calcularResultado = (calificacion:number):Resultado => {
    if (calificacion >= 5 && calificacion < 7) return 'aprobado'
    if (calificacion >= 7 && calificacion < 9) return 'notable'
    if (calificacion >= 9)  return 'sobresaliente'
    return 'suspenso'
}