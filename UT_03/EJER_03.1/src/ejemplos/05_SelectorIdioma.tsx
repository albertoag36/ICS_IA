import { useState } from "react";

type Pais = "de" | "us" | "uk";

// Record<Pais, string> obliga a definir TODAS las claves de Pais
const idiomas: Record<Pais, string> = {
  de: "de-DE",
  us: "en-US",
  uk: "en-GB",
};

interface PropsSelectorIdioma {
  pais: Pais;
}

function SelectorIdioma({ pais }: PropsSelectorIdioma) {
  return <p>Idioma seleccionado: {idiomas[pais]}</p>;
}

export default function DemoSelectorIdioma() {
  const [pais, setPais] = useState<Pais>("de");

  return (
    <section>
      <select value={pais} onChange={(e) => setPais(e.target.value as Pais)}>
        {(Object.keys(idiomas) as Pais[]).map((codigo) => (
          <option key={codigo} value={codigo}>
            {codigo}
          </option>
        ))}
      </select>
      <SelectorIdioma pais={pais} />
    </section>
  );
}
