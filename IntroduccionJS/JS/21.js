//FOREACH
//SOLO SE PUEDE USAR EN UN ARREGLO
//SE EJECUTA UNA VEZ POR CADA ELEMENTO DEL ARREGLO
let carrito = [
    {producto: "Monitor", precio: 500},
    {producto: "TV", precio: 100},
    {producto: "PC", precio: 50},
    {producto: "Laptop", precio: 13}
];

carrito.forEach(carrito => {
    console.table(carrito);
});

//MAP
//SOLO SE PUEDE USAR EN UN ARREGLO
let nuevoCarrito = carrito.map(carrito =>
    //replace: PRIMERO VA EL VALOR A REEMPLAZAR, LUEGO POR EL CUAL LO QUIERES SUSTITUIR 
    //SOLO FUNCIONA CON STRINGS
    `${carrito.producto.replace("Monitor", "Monitor 50p")}`
);

console.table(nuevoCarrito);

//DIFERENCIAS ENTRE FOREACH Y MAP:
/*EL FOREACH ESTÁ ESPECIAMENTE DISEÑADO PARA ITERAR EN ARREGLOS Y MOSTRAR ELEMENTOS EN PANTALLA*/
/*EL MAP ESTÁ ESPECIFICAMENTE DISEÑADO PARA CREAR O EDITAR ARREGLOS*/