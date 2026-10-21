// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}

El nombre del parámetro "nombreAlumno" del componente "Saludo" en App.jsx tiene que tener el mismo nombre que en Saludo.jsx

export function Saludo({ nombreAlumno }) {
  return<p>¡Hola, {nombreAlumno}!</p>;
}
------------------------------------------------------------------------
export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}

El evento click nunca va a hacer nada porque la condición nunca se cumple

export function Interruptor() {
  const [encendido, setEncendido] = useState(verdadero);
  return (
    <button onClick={() => (encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}
------------------------------------------------------------------------
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

porque no estás importando use state y porque nunca estás llamando al handler de onClick

import { useState } from "react"

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor => valor + 1)}>Pulsado {valor} veces</button>;
}
------------------------------------------------------------------------
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}

porque no estás importando use state

import { useState } from "react"

export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor => valor + 1)}>{valor}</button>;
}
------------------------------------------------------------------------
export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />

Falta pasar el parámetro en BotonEnviar en App.jsx

<BotonEnviar onEnviar={laFuncionCreadaEnApp}>
------------------------------------------------------------------------
export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}

Porque mensajesNuevos es 0 y no un valor booleano

export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos > 0 &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
------------------------------------------------------------------------

Con la aplicación en marcha y las React Developer Tools instaladas:

1. En el panel **Components**, selecciona un `Contador`:
    - Cambia la prop `etiqueta` desde el panel. ¿Se actualiza la página?
    Si, cambia el valor

    - Cambia el valor del estado a `10`. ¿Qué ocurre Si después pulsas **Reiniciar**? Explica por qué.

    - Activa la opción de analizar nombres de Hooks (icono de la varita). ¿Qué nombre aparece ahora junto a `State`?

2. Selecciona una `PreguntaFrecuente` y alterna el estado `abierta` desde el panel.


3. En el panel **Profiler**, activa «Registrar por qué se renderizó cada componente». Graba una sesión en la que pulses +1 tres veces en **uno** de los contadores.
    - ¿Qué componentes se volvieron a renderizar?
    - ¿Se renderizó también el otro contador? ¿Por qué?
    - ¿Qué motivo indica el Profiler para el re-render?