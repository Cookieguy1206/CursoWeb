//POO
//OBJECT CONSTRUNCTOR Y OBJET LITERAL
//OBJECT LITERAL
//ES MAS COMUN
let Cookie = {
    nickname: "WaW|Cookie",
    brawlers: 43
}

//OBJECT CONSTRUCTOR
//ES COMO EL CONSTRUCTOR DE JAVA: class name(){}
//EL NOMBRE DE LA CLASE TIENE QUE INICIAR EN MAYUSCULA
//AQUI SE VAN A ALMACENAR TODOS LOS OBJETOS DE LA CLASE
//NO ES MUY COMUN HACERLO DE ESTA FORMA YA QUE EXISTE LA PALABRA RESERVADA class
function Producto(nombreProducto, precioProducto) {
    this.nombreProducto = nombreProducto;
    this.precioProducto = precioProducto;
}

//ES COMO EN JAVA, ESTAMOS CREANDO UNA INSTANCIA DEL CONSTRUCTOR
//PARA DESPUES PASARLE UNO DE ESTOS VALORES AL CONSTRUCTOR
let producto2 = new Producto("Monitor 50p", 10000);

//PROTOTYPES
//PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN CONSTRUCTOR EN ESPECIFICO
//TENER UN CODIGO MAS ORGANZADO

//"Poducto" ES EL CONSTRUCTOR SEGUDO DE UN "." PARA ASIGNARLE EL "protorype" LUEGO EL NOMBRE DE LA FUNCION
//SEGUIDO DE UN "=" Y LA PABRA RESERVADA "function"
Producto.prototype.formatearProducto = function() {
    return `El ${this.nombreProducto} cuesta ${this.precioProducto}`;
}

//COMO USAR UN PROTOTYPE
//USAR LA INSTANCIA DE LA CLASE (O SEA EL OBJETO DE LA CLASE) QUE QUEREMOS PASARLE A LA FUNCION
console.log(producto2.formatearProducto());