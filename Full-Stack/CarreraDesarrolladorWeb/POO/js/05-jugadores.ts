interface Titulos{
    setTitulo(color: string): void;
    getTitulo() : void;
}

function DecoradorClase(target: Function){
    target.prototype.Saludar = function(){
        console.log('Hola que tal');
        
    }
}

//Decorador de clase se agrega justo antes de la clase
export interface Jugadores {
    Saludar(): void;
}

@DecoradorClase
export class Jugadores implements Titulos{
    //Propiedades
    private nombre: string;
    private posicion: string;
    private goles: number;
    private asistencias: number;
    private valor: number;

    //Constructor
    constructor(nombre: string, posicion: string, goles: number, asistencias: number, valor: number){
        this.nombre = nombre;
        this.posicion = posicion;
        this.goles = goles;
        this.asistencias = asistencias;
        this.valor = valor;
    }

    setTitulo(color: string): void {
        console.log("Titulo ganado: " + color);
    }

    getTitulo(): void {
        
    }

    //Set y Get
    public set setNombre(nombre: string){
        this.nombre = nombre;
    }

    public get getNombre(){
        return this.nombre;
    }

    //Metodos
    public getClub(nombre:string, club:string){
        console.log(nombre, club);        
    }
}

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
class Persona extends Jugadores{
    public edad: number;

    constructor(nombre: string, posicion: string, goles: number, asistencias: number, valor: number, edad: number){
        super(nombre, posicion, goles, asistencias, valor);
        this.edad = edad;
    }

    setEdad(edad: number){
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }
}

var persona1 = new Persona("Alexyr", "Delantero", 800, 350, 100000000, 33);
persona1.setEdad(75);
console.log(persona1, persona1.getNombre);

var jugador1 = new Jugadores("Ronaldo Nazario", "Delantero", 800, 350, 100000000);
//Sale error por que los decoradores estan en experimental
jugador1.Saludar();


