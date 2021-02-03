//FUNCIONES CON PARAMETROS Y ARGUMENTOS
/*function sumar(numero1, numero2) { //LO QUE VA EN EL CUERPO DE LA FUNCION ES PARAMETROS
    console.log(numero1 + numero2);
}*/

let numero1 = 10;
let numero2 = 10;
/*sumar(numero1, numero2);//LO QUE VA EN LA DECLARACION DE LA FUNCION SON ARGUMENTOS*/

//FUNCIONES CON RETURN
/*function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}*/

/*console.log(sumar(numero1, numero2));*/

let total = 0;

function agregarCarrito(precio) {
    total += precio; //+= QUIERE DECIR QUE VA A AUMENTAR SEGUN EL NUMERO QUE SE PONGA
    return total; //SE RETORNA UNA VARIABLE PORQUE SE QUIERE HACER ALGO MAS A FUTURO CON ESE VALOR
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(500);

console.log(total);