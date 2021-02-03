//SELECCIONAR ELEMENTO HTML EN JS
let boton = document.getElementById("boton");

//AÑADIR UN OYENTE DE EVENTOS 
//SE LE TIENEN QUE PASAR DOS PARAMETROS:
//SE LE TIENEN QUE PASAR DOS PARAMETROS:
//SE LE TIENEN QUE PASAR DOS PARAMETROS:c
//EL PRIMERO ES EL EVENTO
//EL SEGUNDO ES UNA FUNCION
boton.addEventListener("click", click = () => {
    //PREGUNTAR SI QUIERE RECIBIR NOTIFICACIONES
    Notification.requestPermission()
    .then((result) => {
        console.log("El resultado es: " + result);
    }).catch((err) => {
        console.log("El resultado es: " + err);
    });

    if (Notification.permission == "granted") {
        //CREAMOS LA NOTIFICACION
        //RECIBE DOIS PARAMETROS: EL TITULO Y UN OBJETO CON LA IMAGEN Y EL CUERPO DE LA NOTIFICACION
        new Notification("Esta es una notificacion", {
            icon: "img/icon.png",
            body: "Hola guapo"
        });
    }
});