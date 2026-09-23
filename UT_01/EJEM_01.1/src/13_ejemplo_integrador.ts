// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Ejemplo integrador — poniéndolo todo en práctica
// ============================================================
//
// Este archivo está pensado para compilarse y ejecutarse de verdad.
// Compílalo con:   npx tsc src/13_ejemplo_integrador.ts --outDir dist
// Y ejecútalo con: node dist/13_ejemplo_integrador.js
// (o enlázalo desde index.html y ábrelo con la extensión Live Server)

type DesarrolladorNuevo = {
    nombre: string;
    edad: number;
    esDev: boolean;
};

const persona5: DesarrolladorNuevo = {
    nombre: 'Nabendu',
    edad: 40,
    esDev: true
};

console.log(
    `${persona5.nombre} es ${persona5.esDev ? 'desarrollador' : 'no desarrollador'} ` +
    `y tiene ${persona5.edad} años`
);

// 💡 Nota importante para el aula:
// Para interpolar variables dentro de un string hay que usar
// PLANTILLAS DE TEXTO (template literals), delimitadas con comillas
// invertidas (`), como se ha hecho arriba. Si se usan comillas
// simples o dobles, ${...} NO se interpreta y aparece tal cual en
// el texto:
console.log('${persona5.nombre} usando comillas simples (no interpola)');
