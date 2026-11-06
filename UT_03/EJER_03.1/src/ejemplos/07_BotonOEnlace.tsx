import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// ── Versión 1: con `if` y unión discriminada (la más segura) ──
type PropsComoBoton = {
  esBoton: true;
  config?: ComponentPropsWithoutRef<"button">;
  children: ReactNode;
};

type PropsComoEnlace = {
  esBoton: false;
  config: ComponentPropsWithoutRef<"a">; // href, target, rel...
  children: ReactNode;
};

function BotonOEnlace(props: PropsComoBoton | PropsComoEnlace) {
  if (props.esBoton) {
    return <button {...props.config}>{props.children}</button>;
  }
  return <a {...props.config}>{props.children}</a>;
}

// ── Versión 2: etiqueta dinámica (menos código, menos tipado) ──
interface PropsEtiqueta {
  esBoton: boolean;
  config?: Record<string, unknown>;
  children: ReactNode;
}

function BotonOEnlaceCorto({ esBoton, config, children }: PropsEtiqueta) {
  // ElementType = "cualquier etiqueta o componente"; empieza por mayúscula
  const Etiqueta: ElementType = esBoton ? "button" : "a";
  return <Etiqueta {...config}>{children}</Etiqueta>;
}

export default function DemoBotonOEnlace() {
  return (
    <section>
      <BotonOEnlace esBoton config={{ onClick: () => alert("¡Hola!") }}>
        Soy un botón
      </BotonOEnlace>{" "}
      <BotonOEnlace esBoton={false} config={{ href: "https://react.dev" }}>
        Soy un enlace
      </BotonOEnlace>{" "}
      <BotonOEnlaceCorto esBoton={false} config={{ href: "https://react.dev" }}>
        Enlace (versión corta)
      </BotonOEnlaceCorto>
    </section>
  );
}
