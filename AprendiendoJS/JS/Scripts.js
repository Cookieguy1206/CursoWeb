const persona = {
    nombre: 'Camilo',
    edad: 18,
    anioNacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.anioNacimiento());

//Object constructor (Forma antigua)
function tareaOld(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Forma nueva
class tareaNew {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

//Crear nuevas tareas
const tarea1 = new tareaOld("Aprender JavaScript", "Urgente");
const tarea2 = new tareaNew("Aprender nuevo JavaScript", "Reurgente");

console.log(tarea1);
console.log(tarea2);