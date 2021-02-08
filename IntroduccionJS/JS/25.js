//PROMESAS
//REFLEJA UN VALOR QUE PODRA ESTAR DISPONIBLE AHORA, LUEGO O NUNCA
//DEFINIR UNA PROMESA
//CUANDO SE EJECUTA UNA PROSE SE PASAN DOS VALORES AUTOMATICAMENTE: resolve, reject
//resolve SE VA A EJECUTAR CUANDO LA PROMESA SE CUMPLA
//LOS PARAMETROS DE UNA PROMESA SON DOS Y SE ESCRIBEN COMO UNA FUNCION
let usuarioAutenticado = new Promise((resolve, reject) => {
    let auth = true;

    if (auth) {
        resolve("Usuario autenticado"); //resolve SE VA A EJECUTAR CUANDO LA PROMESA SE CUMPLA
    } else {
        reject("No se pudo iniciar sesion"); //reject SE EJECUTA SI LA PPROMESA NO SE CUMPLE
    }
});

//VER EL RESULTADO DEL PROMISE
usuarioAutenticado
    //VER EL RESULTADO DEL resolve
    .then((autenticado) => {
        console.log(autenticado);
    })
    //VER EL RESULTADO DEL reject
    .catch((error) => {
        console.log(error);
    });

//EN LOS PROMISES EXISTEN 3 VALORES:
//Pending: NO SE HA CUMPLIDO PERO TAMPOCO SE HA RECHAZADO
//Fulfielled: YA SE COMPLIO LA PROMESA
//Rejected: SE HA RECHAZADO O NO SE PUDO COMPLIR