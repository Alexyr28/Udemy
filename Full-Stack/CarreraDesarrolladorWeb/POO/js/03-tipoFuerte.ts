let cadena2: string | number  = "Hola puedo ser string o number";
console.log(cadena2);

type alfanumerico = string | number;

//String
let cadena: alfanumerico = "Alexyr";
cadena = 44;

//Number
let numero: number = 12;

//Booleano
let verdadero_falso: boolean = true;

//Any
let cualquier_cosa: any = "Alexyr";
cualquier_cosa = 12;
cualquier_cosa = true;

//Array
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let year: any[] = [2020, 2021, 2022, "Alexyr", true];

//let y var
var numero1: number = 12;
var numero2: number = 12;

if(numero1 == 10){
    let numero1 = 44;
    let numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);