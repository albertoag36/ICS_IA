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
    setBusqueda("");
    setGenero("Todos");
  };

  const manejoSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenero(e.target.value);
  };

  const manejoTecla = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") setBusqueda("");
  };

  const manejoLista = () => {
    if (genero === "Todos") {
      return peliculas.map((pelicula) => (
        <li key={pelicula.titulo}>{pelicula.titulo}</li>
      ));
    }
    return peliculas
      .filter(
        (pelicula) =>
          pelicula.genero === genero && pelicula.titulo.includes(busqueda),
      )
      .map((pelicula) => <li key={pelicula.titulo}>{pelicula.titulo}</li>);
  };

    const resultados = peliculas.filter(
    (pelicula) =>
      (genero === "Todos" || pelicula.genero === genero) &&
      pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        onKeyDown={manejoTecla}
      ></input>
      <select value={genero} onChange={manejoSelect}>
        <option value="Todos">Todos</option>
        {peliculas.map((pelicula) => (
          <option key={pelicula.genero} value={pelicula.genero}>{pelicula.genero}</option>
        ))}
      </select>
      <button onClick={manejoBoton}>Limpiar filtros</button>
      <p>
        {resultados.length} {resultados.length === 1 ? "resultado" : "resultados"}
      </p>

      {resultados.length === 0 ? (
        <p>Sin resultados</p>
      ) : (
        <ul>
          {resultados.map((p) => (
            <li key={p.titulo}>
              {p.titulo} ({p.anio}) · {p.genero}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
