//ESTRUCTURAS DE CONTROL
//IF
/*let puntaje = 1000;

if (puntaje !== 1000) {
    console.log("Has perdido");
} else {
    console.log("Has ganado");
}*/

//SWITCH
let metodoPago = prompt("Dime tu forma de pago");

switch (metodoPago.toLocaleLowerCase()) {
    case "tarjeta":
        console.log("Pago con tarjeta");
        break;
    case "efectivo":
        console.log("Pago con efectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}