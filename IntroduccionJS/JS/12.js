//USAR UN EJECUTADO ESTRICTO PARA SEGUIR BUENAS PRACTICAS
"use strict";

//OBJETOS
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//OBJECT METHODS
//1: PARA EVITAR MODIFICAR OBJETOS
Object.freeze(producto);

//2: PARA SABER SI UN OBJETO ESTÁ SELLADO
console.log(Object.isFrozen(producto));

console.log(producto);