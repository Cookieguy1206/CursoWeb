//FETCH API
//PERMITE ENVIAR INFORMACION AL SERVIDOR U OBTELERLA
//TAMBIEN PERMITE ACTUALIZAR LA APP SIN NECRSIDAD DE RECARGAR LA PAGINA
let archivo = "empleados.json";

let obtenerEmpleados = () => {
    //fetch() RECIBE COMO PARAMETRO UNA URL
    fetch(archivo)
    .then((result) => {
        return result.json();
    })
    .then(datos => {
        const {empleados} = datos;
        console.log(empleados);

        empleados.forEach(empleado => {
            console.log(empleado);
        });
    });
}

console.log("LOL");
obtenerEmpleados();