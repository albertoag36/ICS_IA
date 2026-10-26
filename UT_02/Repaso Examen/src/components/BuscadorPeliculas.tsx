import { useState } from "react";

const peliculas = [
  { titulo: "El Padrino", anio: 1972, genero: "Drama" },
  { titulo: "Pulp Fiction", anio: 1994, genero: "Crimen" },
  { titulo: "El Caballero Oscuro", anio: 2008, genero: "Acción" },
  { titulo: "Origen", anio: 2010, genero: "Ciencia ficción" },
  { titulo: "Matrix", anio: 1999, genero: "Ciencia ficción" },
  { titulo: "Parásitos", anio: 2019, genero: "Thriller" },
  { titulo: "Amélie", anio: 2001, genero: "Comedia" },
  { titulo: "El laberinto del fauno", anio: 2006, genero: "Fantasía" },
  { titulo: "Los otros", anio: 2001, genero: "Terror" },
  { titulo: "Toy Story", anio: 1995, genero: "Animación" },
];

export const BuscadorPeliculas = () => {
  const [busqueda, setBusqueda] = useState<string>("");
  const [genero, setGenero] = useState<string>("Todos");

  const manejoBoton = () => {
    setBusqueda('')
    setGenero("Todos")
  }

  return (
    <div>
      <input type="text" onChange={(e) => setBusqueda(e.target.value)}></input>
      <select>
        <option>{genero}</option>
        {peliculas.map(pelicula => <option key={pelicula.titulo}>{pelicula.genero}</option>)}
      </select>
      <button onClick={manejoBoton}>Limpiar filtros</button>
      <ol>
        {}
      </ol>
    </div>
  );
};
