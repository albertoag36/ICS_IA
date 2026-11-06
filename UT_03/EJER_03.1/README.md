# UT 03.1 · ejemplos (React + TypeScript)

Requisitos: Node.js 20+.

```bash
npm install
npm run dev      # menú para elegir cada ejemplo
npm run build    # comprueba los tipos (tsc) y compila
npm run lint     # oxlint
```

- `src/ejemplos/`: un archivo por ejemplo (los números coinciden con el documento).
- `src/fragmentos/`: fragmentos del documento, incluidos los que contienen errores de tipos intencionados (`@ts-expect-error`).
- React 19.2 · TypeScript 6.0 · `lib: ES2024`.
- El aviso de `oxlint` sobre la `key` del ejemplo 10a es intencionado (se explica en la UT 03.2).
