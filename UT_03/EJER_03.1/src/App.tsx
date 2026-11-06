import { useState, type ComponentType } from "react";
import CondicionesUsoVacio from "./ejemplos/01a_CondicionesUso_parrafoVacio";
import CondicionesUsoJSX from "./ejemplos/01b_CondicionesUso_variableJSX";
import CondicionesUsoTernario from "./ejemplos/02_CondicionesUso_ternario";
import CondicionesUsoAnd from "./ejemplos/03_CondicionesUso_and";
import TrampaDelCero from "./ejemplos/04_TrampaDelCero";
import SelectorIdioma from "./ejemplos/05_SelectorIdioma";
import EstadoPeticion from "./ejemplos/06_EstadoPeticion";
import BotonOEnlace from "./ejemplos/07_BotonOEnlace";
import DemoActivity from "./ejemplos/08_Activity";
import ListaFor from "./ejemplos/09_ListaProductos_for";
import ListaMap from "./ejemplos/10a_ListaProductos_map";
import ListaComponente from "./ejemplos/10b_ListaProductos_componente";
import FragmentConKey from "./ejemplos/13_FragmentConKey";
import AgruparPorCategoria from "./ejemplos/11_AgruparPorCategoria";
import Catalogo from "./ejemplos/14_catalogo/Catalogo";

interface Ejemplo {
  titulo: string;
  Componente: ComponentType;
}

const ejemplos: Ejemplo[] = [
  { titulo: "01a · <p> vacío en el DOM", Componente: CondicionesUsoVacio },
  { titulo: "01b · Variable con JSX", Componente: CondicionesUsoJSX },
  { titulo: "02 · Ternario", Componente: CondicionesUsoTernario },
  { titulo: "03 · Operador &&", Componente: CondicionesUsoAnd },
  { titulo: "04 · La trampa del 0", Componente: TrampaDelCero },
  { titulo: "05 · Mapa de valores (Record)", Componente: SelectorIdioma },
  { titulo: "06 · Unión discriminada", Componente: EstadoPeticion },
  { titulo: "07 · Botón o enlace", Componente: BotonOEnlace },
  { titulo: "08 · Activity (React 19.2)", Componente: DemoActivity },
  { titulo: "09 · Lista con for…of", Componente: ListaFor },
  { titulo: "10a · Lista con map", Componente: ListaMap },
  { titulo: "10b · Lista con componente", Componente: ListaComponente },
  { titulo: "13 · Fragment con key", Componente: FragmentConKey },
  { titulo: "11 · Object.groupBy", Componente: AgruparPorCategoria },
  { titulo: "14 · Catálogo (ejemplo integrador)", Componente: Catalogo },
];

export default function App() {
  const [indice, setIndice] = useState(0);
  const { Componente } = ejemplos[indice];

  return (
    <main style={{ textAlign: "left", padding: "1rem" }}>
      <h1>UT 03.1 · Renderizado condicional y listas</h1>
      <select
        value={indice}
        onChange={(e) => setIndice(Number(e.target.value))}
      >
        {ejemplos.map((ej, i) => (
          <option key={ej.titulo} value={i}>
            {ej.titulo}
          </option>
        ))}
      </select>
      <hr />
      {/* key: al cambiar de ejemplo se reinicia todo su estado */}
      <Componente key={indice} />
    </main>
  );
}
