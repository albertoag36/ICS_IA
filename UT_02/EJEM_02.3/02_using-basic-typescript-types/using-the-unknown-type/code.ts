// Hace una petición HTTP a la API de Star Wars para obtener datos de una persona.
fetch("https://swapi.dev/api/people/1")
  // Cuando llega la respuesta, la convierte a un objeto JavaScript usando JSON.
  .then((response) => response.json())
  // `data` tiene tipo `unknown`, por lo que antes de usarlo hay que verificar su forma.
  .then((data: unknown) => {
    // Comprueba si `data` es un personaje válido con la propiedad `name`.
    if (isCharacter(data)) {
      // Si la comprobación es correcta, entonces TypeScript sabe que `data.name` existe.
      console.log("name", data.name);
    }
  });

// Función de validación: si devuelve `true`, TypeScript interpreta que `character`
// tiene la forma `{ name: string }`.
//Qué significa?
// La función devuelve un booleano.
// Pero además le dice a TypeScript: “si esta función devuelve true,
// entonces el valor que estoy comprobando se comporta como este tipo, es decir, `{ name: string }` ”.
function isCharacter(character: any): character is { name: string } {
  // Verifica si la propiedad `name` está presente dentro de `character`.
  return "name" in character;
}
