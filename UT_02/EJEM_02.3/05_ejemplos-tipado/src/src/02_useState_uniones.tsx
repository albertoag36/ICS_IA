import { useState } from 'react';

// ---------- Unión de literales ----------

export type Filtro = 'todas' | 'pendientes' | 'hechas';

export function EjemploFiltro() {
  // Sin el genérico, TypeScript inferiría string y aceptaría cualquier cadena
  const [filtro, setFiltro] = useState<Filtro>('todas');

  // setFiltro('acabadas'); // error: no forma parte de Filtro

  return (
    <div>
      <p>Filtro actual: {filtro}</p>
      <button onClick={() => setFiltro('hechas')}>Ver hechas</button>
    </div>
  );
}

// ---------- Unión discriminada para una petición asíncrona ----------

type Libro = { id: number; titulo: string };

type EstadoPeticion =
  | { estado: 'inactivo' }
  | { estado: 'cargando' }
  | { estado: 'exito'; libros: Libro[] }
  | { estado: 'error'; mensaje: string };

export function Catalogo() {
  const [peticion, setPeticion] = useState<EstadoPeticion>({ estado: 'inactivo' });

  async function cargarLibros() {
    setPeticion({ estado: 'cargando' });
    try {
      const respuesta = await fetch('/api/libros');
      // En un caso real, el JSON debería validarse con una guarda de tipo (unknown)
      const libros: Libro[] = await respuesta.json();
      setPeticion({ estado: 'exito', libros });
      // setPeticion({ estado: 'exito' }); // error: falta libros
    } catch {
      setPeticion({ estado: 'error', mensaje: 'No se pudo cargar el catálogo' });
    }
  }

  // Dentro de cada case, TypeScript estrecha el tipo de peticion
  switch (peticion.estado) {
    case 'inactivo':
      return <button onClick={cargarLibros}>Cargar libros</button>;
    case 'cargando':
      return <p>Cargando…</p>;
    case 'error':
      return <p>{peticion.mensaje}</p>; // aquí existe mensaje
    case 'exito':
      return (
        <ul>
          {peticion.libros.map((l) => (
            // aquí existe libros
            <li key={l.id}>{l.titulo}</li>
          ))}
        </ul>
      );
  }
}
