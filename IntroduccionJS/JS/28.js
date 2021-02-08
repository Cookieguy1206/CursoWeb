//FETCH API
//PERMITE ENVIAR INFORMACION AL SERVIDOR U OBTELERLA
//TAMBIEN PERMITE ACTUALIZAR LA APP SIN NECRSIDAD DE RECARGAR LA PAGINA
let archivo = "empleados.json"

let obtenerEmpleados = () => {
    fetch(archivo)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

obtenerEmpleados();