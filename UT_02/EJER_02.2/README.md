// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}

(nombre) en vez de {nombre}
------------------------------------------------------------------------
export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}

Esto va a hacer siempre lo mismo porque no estás cambiando el valor de encendido

------------------------------------------------------------------------
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}

No estás declarando ninguna función en el Contador
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>Pulsado {valor} veces</button>;
}
------------------------------------------------------------------------
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
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
------------------------------------------------------------------------
export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}

------------------------------------------------------------------------

Con la aplicación en marcha y las React Developer Tools instaladas:

1. En el panel **Components**, selecciona un `Contador`:
    - Cambia la prop `etiqueta` desde el panel. ¿Se actualiza la página?
Si, cambia el valor

    - Cambia el valor del estado a `10`. ¿Qué ocurre si después pulsas **Reiniciar**? Explica por qué.


    - Activa la opción de analizar nombres de Hooks (icono de la varita). ¿Qué nombre aparece ahora junto a `State`?
2. Selecciona una `PreguntaFrecuente` y alterna el estado `abierta` desde el panel.
3. En el panel **Profiler**, activa «Registrar por qué se renderizó cada componente». Graba una sesión en la que pulses +1 tres veces en **uno** de los contadores.
    - ¿Qué componentes se volvieron a renderizar?
    - ¿Se renderizó también el otro contador? ¿Por qué?
    - ¿Qué motivo indica el Profiler para el re-render?