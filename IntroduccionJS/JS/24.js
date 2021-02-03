//CLASES
//CREAR UNA CLASE EN JS (ES COMO EN JAVA)
//NOMBRES DE LAS CLASES SIEMPRE VAN EN MAYUSCULAS
class Producto {
    //PARA PASAR PARAMETROS SE USA UN CONSTRUCTOR
    //EL RESTO ES COMO JAVA
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    //ESTA ES UNA FUNCION QUE PERTENECE A LA CLASE PRODUCTO
    formatearProducto() {
        return `El producto ${this.nombre} cuesta ${this.precio}`;
    }
}

//CREAR UN OBJETO DE LA CLASE O INSTANCIARLA
let producto = new Producto("Monitor pequeño", 10000);

//HERENCIA
//PODER HEREDAR FUNCIONES Y ATRIBUTOS (O SEA EL CONSTRUCTOR) DE OTRA CLASE
class Libro extends Producto {
    constructor(nombre, precio, isbnLibro) {
        //LO QUE HACE super ES IR AL CONSTRUCTOR QUE SE ESTA HEREDANDO Y VA A BUSCAR LOS VALORES QUE SE LE PASEN POR ARGUMENTOS
        //TIENEN QUE TENER EL MISMO NOMBRE LAS VARIABLES QUE TIENE LA CLASE PADRE A super()
        super(nombre, precio);
        this.isbnLibro = isbnLibro;
    }

    formatearProducto() {
        //SE PONE LA FUNCION HEREDADA PARA EVITAR CODIGO DUPLICADO Y QUE ASÍ SE PONGA 
        //TAMBIÉN EL ENUNCIADO QUE HAY EN ESA FUNCION
        return `${super.formatearProducto()} y su isbn es ${this.isbnLibro}`;
    }
}

let libro = new Libro("La revolucion de JS", 120000, "10384710398");

console.log(libro.formatearProducto());