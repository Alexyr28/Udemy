'use strict'

function calculadora(num1, num2, mostrar=false){
    var resultado = num1+num2;
    if(mostrar){
        pantalla(resultado);
    }else{
        consola(resultado);
    }
}

function pantalla(resultado){
    document.writeln(resultado);
}

function consola(resultado){
    console.log(resultado);
}

calculadora(2,2,true);


// Paramateros tipo REST y SPREAD

//REST
function listadoDeAnimales(Anml1, Anml2, ...resto){
    console.log("Animal 1: " + Anml1);
    console.log("Animal 2: " + Anml2);
    console.log("Resto: " + resto);
}

listadoDeAnimales("Elefante", "León", "Perro", "Gato", "Conejo");

//SPREAD
var animales = ["Tigre", "Lobo", "Cebra"];

listadoDeAnimales(animales, "perro", "gato", "loro");