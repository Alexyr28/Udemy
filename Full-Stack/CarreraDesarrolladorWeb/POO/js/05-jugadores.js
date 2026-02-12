var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function DecoradorClase(target) {
    target.prototype.Saludar = function () {
        console.log('Hola que tal');
    };
}
//Decorador de clase se agrega justo antes de la clase
let Jugadores = class Jugadores {
    //Constructor
    constructor(nombre, posicion, goles, asistencias, valor) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.goles = goles;
        this.asistencias = asistencias;
        this.valor = valor;
    }
    setTitulo(color) {
        console.log("Titulo ganado: " + color);
    }
    getTitulo() {
    }
    //Set y Get
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    //Metodos
    getClub(nombre, club) {
        console.log(nombre, club);
    }
};
Jugadores = __decorate([
    DecoradorClase,
    __metadata("design:paramtypes", [String, String, Number, Number, Number])
], Jugadores);
export { Jugadores };
//Crear objetos
// var jugador1 = new Jugadores("Lionel Messi", "Delantero", 800, 350, 100000000);
// var jugador2 = new Jugadores("Cristiano Ronaldo", "Delantero", 800, 350, 100000000);
// console.log(jugador1, jugador2);
// jugador1.getClub(jugador1.nombre, "Inter Miami");
// var jugador1 = new Jugadores("Ronaldo Nazario", "Delantero", 800, 350, 100000000);
// jugador1.setNombre = "Lionel Messi";
// var nombre = jugador1.getNombre;
// console.log(nombre);
//Clase Hija
class Persona extends Jugadores {
    constructor(nombre, posicion, goles, asistencias, valor, edad) {
        super(nombre, posicion, goles, asistencias, valor);
        this.edad = edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
}
var persona1 = new Persona("Alexyr", "Delantero", 800, 350, 100000000, 33);
persona1.setEdad(75);
console.log(persona1, persona1.getNombre);
var jugador1 = new Jugadores("Ronaldo Nazario", "Delantero", 800, 350, 100000000);
//Sale error por que los decoradores estan en experimental
jugador1.Saludar();
