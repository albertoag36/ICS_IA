// ============================================================
// UNIDAD 1.1 - TypeScript I
// Tema: Tipos literales
// ============================================================

// Con un tipo literal indicamos EXACTAMENTE qué valores están
// permitidos, en vez de un tipo genérico como "string".
let miembroEquipo: 'Nabendu' | 'Mousam' | 'Shikha' | 'Hriday' = 'Nabendu';

miembroEquipo = 'Mousam'; // ✅ correcto
miembroEquipo = 'Shikha'; // ✅ correcto
miembroEquipo = 'Hriday'; // ✅ correcto

// ❌ Error: 'Parag' no es uno de los valores literales permitidos
// miembroEquipo = 'Parag';
// Type '"Parag"' is not assignable to type '"Nabendu" | "Mousam" | "Shikha" | "Hriday"'.ts(2322)

console.log(miembroEquipo);

// 💡 Los tipos literales son muy útiles para representar un conjunto
// cerrado de opciones, por ejemplo el estado de un pedido:
let estadoPedido: 'pendiente' | 'enviado' | 'entregado' = 'pendiente';
estadoPedido = 'enviado'; // ✅ correcto

// ❌ Error: 'cancelado' no está entre los valores permitidos
// estadoPedido = 'cancelado';
