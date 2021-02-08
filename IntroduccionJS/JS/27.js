//ASYNC / AWAIT
//SIRVE PARA EJECUTAR UNA ACCION MIENTRAS SE HACE OTRA
/*EJEMPLO: QUE JS DESCARGUE UN LISTADO DE 10K CLIENTES PERO QUE VAYA MOSTRANDO EL RESTO DEL SITIO
WEB, PORQUE ESTA TAREA VA A TOMAR UN BUEN RATO*/ 

let descargarNuevosClientes = () => {
    return new Promise(resolve => {
    console.log("Descargando clientes...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000);
    });
}

let descargarUltimosPedidos = () => {
    return new Promise(resolve => {
    console.log("Descargando pedidos...");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 3000);
    });
}

//SE LE PONE LA PALABRA RESERVADA async PARA DETERMINAR QUE ESTA ES UNA FUNCION ASINCRONA
//CON async TAMBIEN ES PARA HACER FUNCIONES QUE DEPENDAN DE UNA PROMESA PARA PODER EJECUTARSE:
//SI AUN NO SE HAN DESCARGADO LOS CLEINTES, LA APLICACION SIGUE FUNCIONANDO MIENTRAS LOS CLIENTES SE DESCARGAN
let app = async () => {
    try {
        //SE LE PONE AWAIT PORQUE NO HAY .then EN async
        //TAMBIEN SE LE PONE AWAIT ANTES DEL PROMISE
        //CUANDO SON ASYNC / AWAIT SE EJECUTA LA PRIMERA FUNCION Y CUANDO ACABE SIGUE LA OTRA
        /*let clientes = await descargarNuevosClientes();
        let pedidos = await descargarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos);*/

        //PARA TRABAJAR CON DOS CONSULTAS async / await HAY QUE USAR EL METODO .all QUE ES UN ARREGLO
        //.all RECIBE COMO PARAMETROS LAS DOS PROMESAS PARA EJECUTARLAS AL MISMO TIEMPO
        let resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();