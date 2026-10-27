// TODO: implementa el buscador de películas según el enunciado.

import { useState } from "react";
import { generos, peliculas } from "../datos";

const BuscadorPeliculas = () => {
  const [busqueda, setBusqueda] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("Todos");

  const peliculasFiltradas = peliculas.filter(
    (pelicula) =>
      (generoSeleccionado === "Todos" ||
        generoSeleccionado === pelicula.genero) &&
      pelicula.titulo
        .toLocaleLowerCase("es")
        .includes(busqueda.toLocaleLowerCase("es")),
  );

  const onLimpiarFiltros = () => {
    setBusqueda("");
    setGeneroSeleccionado("Todos");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") setBusqueda("");
  };

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        onKeyDown={onKeyDown}
      ></input>
      <select
        value={generoSeleccionado}
        onChange={(e) => setGeneroSeleccionado(e.target.value)}
      >
        {generos.map((genero) => (
          <option key={genero} value={genero}>
            {genero}
          </option>
        ))}
      </select>
      <br />
      <button onClick={onLimpiarFiltros}>Limpiar filtros</button>
      <ul style={{ listStyleType: "none" }}>
        {peliculasFiltradas.map((pelicula) => (
          <li key={pelicula.titulo}>{pelicula.titulo}</li>
        ))}
      </ul>
      {peliculasFiltradas.length === 0 ? <p>Sin resultados</p> : <p>{peliculasFiltradas.length} resultados</p>}
    </div>
  );
};

export default BuscadorPeliculas;
