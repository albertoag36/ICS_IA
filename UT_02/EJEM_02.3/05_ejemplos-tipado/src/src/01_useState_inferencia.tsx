import { useState } from 'react';

type Usuario = { id: number; nombre: string; correo: string };

// Inicialización perezosa: la función solo se ejecuta en el primer renderizado
function leerTemaGuardado(): 'claro' | 'oscuro' {
  return localStorage.getItem('tema') === 'oscuro' ? 'oscuro' : 'claro';
}

export function EjemplosInferencia() {
  // Inferencia a partir del valor inicial
  const [contador, setContador] = useState(0); // number
  const [nombre, setNombre] = useState(''); // string
  const [visible, setVisible] = useState(true); // boolean
  // setContador('1'); // error: string no es number

  // 1. Estado que empieza vacío (null) y luego recibe un valor
  // Sin genérico, el tipo inferido sería null y nunca podríamos guardar un usuario.
  // Un tipo genérico es un parámetro de tipo que le decimos a la función: "este estado
  // puede ser un Usuario o null". Es decir, le damos un molde flexible que se concreta
  // en el momento de invocar useState.
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // 2. Array que empieza vacío
  // const [etiquetasMal, setEtiquetasMal] = useState([]); // never[]: no se puede añadir nada
  const [etiquetas, setEtiquetas] = useState<string[]>([]);

  // 3. Estado sin valor inicial
  const [edad, setEdad] = useState<number>(); // number | undefined
  // const [edadInicial, setEdadInicial] = useState<number>(18); // number

  // Inicialización perezosa
  const [tema, setTema] = useState(leerTemaGuardado); // 'claro' | 'oscuro'

  function cargarUsuario() {
    setUsuario({ id: 1, nombre: 'Ana', correo: 'ana@correo.es' });
  }

  return (
    <section>
   
      <h2>useState: inferencia y argumento genérico</h2>

      {/* El contador se incrementa al hacer clic. La expresión dentro de llaves
          evalúa el valor del estado y lo muestra en el texto del botón */}
      <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>

      {/* Input controlado: el valor del campo viene del estado `nombre` y cada cambio
          actualiza ese estado con el texto introducido por el usuario */}
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

      {/* Alterna el valor booleano `visible` para mostrar u ocultar el saludo */}
      <button onClick={() => setVisible(!visible)}>{visible ? 'Ocultar' : 'Mostrar'}</button>

      {/* El operador && renderiza el bloque solo cuando `visible` es true */}
      {visible && <p>Hola, {nombre || 'desconocido'}</p>}

      {/* Carga un objeto `Usuario` en el estado. Como el estado puede ser null,
          necesitamos comprobarlo antes de leer sus propiedades */}
      <button onClick={cargarUsuario}>Cargar usuario</button>
      {/* Antes de usarlo hay que comprobar que no es null */}
      <p>{usuario ? usuario.correo : 'Sin usuario'}</p>
      {/* Optional chaining: si `usuario` es null, la expresión no falla */}
      <p>{usuario?.nombre}</p>

      {/* Añade un nuevo valor al array de etiquetas: copiamos el array actual
          y agregamos 'react' al final */}
      <button onClick={() => setEtiquetas([...etiquetas, 'react'])}>
        Añadir etiqueta ({etiquetas.length})
      </button>

      {/* `edad` puede ser number o undefined, por eso usamos ?? para mostrar
          un texto alternativo cuando aún no tiene valor */}
      <button onClick={() => setEdad(18)}>Edad: {edad ?? 'sin indicar'}</button>

      {/* Alterna el tema entre 'claro' y 'oscuro' usando un ternario */}
      <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
        Tema: {tema}
      </button>
    </section>
  );
}
