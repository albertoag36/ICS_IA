import { Activity, useState } from "react";

type Pestana = "borrador" | "ayuda";

function Borrador() {
  return <textarea placeholder="Escribe aquí tu borrador…" rows={4} />;
}

// Renderizado condicional clásico: al ocultar, el componente se DESMONTA
function PestanasCondicional() {
  const [activa, setActiva] = useState<Pestana>("borrador");
  return (
    <section>
      <h3>Con renderizado condicional</h3>
      <button onClick={() => setActiva("borrador")}>Borrador</button>
      <button onClick={() => setActiva("ayuda")}>Ayuda</button>
      {activa === "borrador" && <Borrador />}
      {activa === "ayuda" && <p>Texto de ayuda</p>}
    </section>
  );
}

// <Activity>: al ocultar, React conserva el estado y el DOM
function PestanasActivity() {
  const [activa, setActiva] = useState<Pestana>("borrador");
  return (
    <section>
      <h3>Con &lt;Activity&gt;</h3>
      <button onClick={() => setActiva("borrador")}>Borrador</button>
      <button onClick={() => setActiva("ayuda")}>Ayuda</button>
      <Activity mode={activa === "borrador" ? "visible" : "hidden"}>
        <Borrador />
      </Activity>
      <Activity mode={activa === "ayuda" ? "visible" : "hidden"}>
        <p>Texto de ayuda</p>
      </Activity>
    </section>
  );
}

export default function DemoActivity() {
  return (
    <>
      <PestanasCondicional />
      <PestanasActivity />
    </>
  );
}
