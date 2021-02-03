//SELECCIONAR ELEMENTO HTML EN JS
let boton = document.getElementById("boton");

//AÑADIR UN OYENTE DE EVENTOS 
//SE LE TIENEN QUE PASAR DOS PARAMETROS:
//EL PRIMERO ES EL EVENTO
//EL SEGUNDO ES UNA FUNCION

boton.addEventListener("click", click = () => {
    console.log("Diste click");
});