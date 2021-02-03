//ARRAYS (MI MAYOR PESADILLA)
//SINTAXIS
/*let numeros = [1, 2, 0, 6];*/

/*let nombres = new Array("WaW|GzGean", "WaW|Cookie", "WaW|Quick", "WaW|Darcyd", "WaW|Edwin", "WaW|Sebas", "WaW|Jupeter");*/

//ACCEDER A LOS VALORES
/*console.table(nombres[1]);*/

//CONOCER LA LONGITUD DE UN ARREGLO
/*console.table(nombres.length);*/

//ACCEDER A TODOS LOS INDICES DE UN ARREGLO MUY EXTENSO
/*nombres.forEach(function(nombre) {
    console.table(nombre);
});*/

//METODOS PARA ARREGLOS: PRIMERA PARTE
//AGREGAR
/*let nombres = new Array("WaW|GzGean", "WaW|Cookie", "WaW|Quick", "WaW|Darcyd", "WaW|Edwin", "WaW|Sebas", "WaW|Jupeter");*/

//ESTRUCTURAS DE DATOS
//AGREGA AL FINAL
/*nombres.push(60);*/
//AGREGA AL INICIO
/*nombres.unshift(20);*/

//ELIMINAR
//ELIMINA EL ULTIMO ELEMENTO
/*nombres.pop();*/

//ELIMINA EN PRIMER ELEMENTO
/*nombres.shift();*/

//ELIMINAR CUAL DESEE
//DOS PARAMETROS: EL PRIMERO ES CUAL ELEMTO SE VA A ELIMINAR
//EL SEGUNDO ES CUANTOS SE QUIEREN ELIMINAR DE AHI EN ADELANTE (1 COMO NINGUNO)
/*nombres.splice(2, 1);

console.table(nombres);*/

//REST OPERATOR (MANTENER LOS DATOS ORIGINALES Y CREAR UNA COPIA DE UN ARREGLO PARA EVITAR CONFLICTOS)
//SE USA PARA CREAR O ELIMINAR ELEMENTOS DE UN MISMO ARREGLO SIN MODIFICAR EL ORIGINAL

//SIMULA PUSH
/*let nuevoArreglo = [...nombres, "Wannabe"];*/
//SIMULA UNSHIFT
/*let nuevoArreglo = ["Wannabe", ...nombres];*/

/*console.table(nuevoArreglo);*/


//METODOS PARA ARREGLOS: SEGUNDA (Y ULTIMA) PARTE
let nombres = new Array("WaW|GzGean", "WaW|Cookie", "WaW|Quick", "WaW|Darcyd", "WaW|Edwin", "WaW|Sebas", "WaW|Jupeter");

//EN LOS ARREGLOS TAMBIÉN PUEDEN IR OBJETOS
let carrito = [
    {producto: "Monitor", precio: 500},
    {producto: "TV", precio: 100},
    {producto: "PC", precio: 50},
    {producto: "Laptop", precio: 13}
];

//FOREACH
/*nombres.forEach(nombre => {
    console.log(nombre);
});*/

//INCLUDES
//SI EXISTE UN ELEMTNO EN UN ARREGLO
/*let resultado = nombres.includes("WaW|Cookie");*/
/*console.log(resultado);*/

//CUANDO HAY UN ARREGLO DE OBJETOS SE UNSA SOME
//SI EXISTE UN ELEMTNO EN UN ARREGLO
/*let resultado = carrito.some((producto) => {
    return producto.nombre == "TV"
});*/

//CON ARROW FUNCTION
/*resultado = carrito.some(producto => {
    producto.nombre == "TV"
});*/

//REDUCE
//CALCULAR UN RESULTADO CON LOS NUMEROS DE UN ARREGLO
/*let resultado = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0); */

/*console.log(resultado);*/

//FILTER
//OBTENER UN ELEMENTO DE UN ARREGLO (EJEMPLO: TODOS MENOS UNO, MAYORES A, ETC)
/*let resultado = carrito.filter((producto) => {
    return producto.precio < 500
});*/

let resultado = carrito.filter((producto) => {
    return producto.producto != "TV"
});

console.table(resultado);