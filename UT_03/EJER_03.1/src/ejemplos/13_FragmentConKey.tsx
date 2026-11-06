import { Fragment } from "react";

interface Termino {
  palabra: string;
  definicion: string;
}

const glosario: Termino[] = [
  {
    palabra: "JSX",
    definicion: "Sintaxis que mezcla marcado y JavaScript/TypeScript.",
  },
  {
    palabra: "key",
    definicion: "Identificador estable de cada elemento de una lista.",
  },
];

export default function Glosario() {
  return (
    <dl>
      {glosario.map((t) => (
        // <>...</> no admite `key`; <Fragment key=...> sí
        <Fragment key={t.palabra}>
          <dt>{t.palabra}</dt>
          <dd>{t.definicion}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
