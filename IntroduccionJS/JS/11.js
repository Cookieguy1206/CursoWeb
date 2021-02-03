//SELECCIONAR UN VALOR DE UN OBJETO Y CONVERTIRLO EN UNA VARIABLE (FORMA ANTERIOR)
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

let precioProducto = producto.precio;
let nombre = producto.nombreProducto;

console.log(precioProducto);
console.log(nombre);

//DESTRUCTURING DE OBJETOS
//HAY QUE PONER LLAVES PARA DARLE NOMBRE A LA VARIABLE QUE SE VAYA A EXTRAER

//LO QUE HACE DESTUCTURING ES HACER ESTO:
//let precioProducto = producto.precio;

let {precio} = producto;

console.log(precio);