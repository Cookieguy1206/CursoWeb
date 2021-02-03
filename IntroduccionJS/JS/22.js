//THIS
//SIRVE PARA QUE UNA FUNCION QUE ESTÁ DENTRO DE UN OBJETO ACCEDA A UN VALOR DE ESTE OBJETO
//SI USA ARROW FUNCTION EK THIS HARÁ REFENRENCIA A LA VENTANA GLOBAR Y NO AL OBJETO, POR ESO ES MEJOR USAR FUNCTION()
let reservacion = {
    nombre: "Cookie",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();