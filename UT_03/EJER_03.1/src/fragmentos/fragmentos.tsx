// Fragmentos de código del tema UT 03.1 (los que contienen errores intencionados
// llevan `@ts-expect-error`, así que el proyecto sigue compilando).
import type { ReactNode } from "react";

declare const mostrar: boolean;
declare const otraCondicion: boolean;

// #region ternarioAnidado
export const parrafoAnidado = !mostrar ? null : otraCondicion ? (
  <p>Condiciones de uso…</p>
) : null;
// #endregion

// #region sinAnidar
export function textoCondiciones(): ReactNode {
  if (!mostrar || !otraCondicion) {
    return null;
  }
  return <p>Condiciones de uso…</p>;
}
// #endregion

// #region errorJSXGlobal
// ❌ Con @types/react 19 ya no existe el espacio de nombres global JSX
// @ts-expect-error TS2503: Cannot find namespace 'JSX'.
export const elementoMal: JSX.Element = <p>Hola</p>;

// ✅ Usa ReactElement (un elemento) o ReactNode (cualquier cosa renderizable)
import type { ReactElement } from "react";
export const elementoBien: ReactElement = <p>Hola</p>;
// #endregion

// #region errorIndiceString
const idiomasBasico = { de: "de-DE", us: "en-US", uk: "en-GB" };

export function SelectorMal({ pais }: { pais: string }) {
  // @ts-expect-error TS7053: Element implicitly has an 'any' type (un string no sirve de índice)
  return <p>Idioma seleccionado: {idiomasBasico[pais]}</p>;
}
// #endregion

// #region mapBasico
const usuarios = [
  { id: "u1", nombre: "Max", edad: 35 },
  { id: "u2", nombre: "Ana", edad: 32 },
];

// TypeScript infiere que nombres es string[]
export const nombres = usuarios.map((usuario) => usuario.nombre);
// #endregion

// #region elementosNoMutan
export const aficiones = ["Deporte", "Cocina"];

export const invertidas = aficiones.toReversed(); // ["Cocina", "Deporte"]
// aficiones sigue siendo ["Deporte", "Cocina"]: no se ha modificado
// #endregion
