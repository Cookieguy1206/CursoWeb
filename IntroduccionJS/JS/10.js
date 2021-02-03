//OBJETOS

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

//UN OBJETO SIRVE PARA PODER TENER EN UN OBJETO MÚLTIPLES VARIABLES
const producto = {
    //LO QUE VA DENTRO DEL OBJETO SE LE CONOCE COMO PROPIEDAD O LLAVE DEL OBJETO
    //EN LUGAR DE UN SIGNO DE IGUAL SE ULTILIZAN DOS PUNTOS
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//PARA ACCEDER A UNA PROPIEDAD DE UN OBJETO SE USA EL "."
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

//TAMBIEN SE PUEDEN PONER OBJETOS DENTRO DE OBJETOS
const objeto1 = {
    numero1: 1,
    letra1: "A",
    objeto2: {
        numero2: 2,
        letra2: "B",        
    }
}

console.log("\nEl segundo objeto: " + objeto1.objeto2.letra2);

//MODIFICAR OBJETOS: AÑADIR
producto.imagen = "imagen.jpg"

//MODIFICAR OBJETOS: ELIMINAR
delete producto.imagen;

console.log(producto);