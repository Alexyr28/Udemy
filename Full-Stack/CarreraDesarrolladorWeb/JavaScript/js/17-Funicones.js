'use strict'

function saludo(){
    return "Hola, soy un saludo";
}

console.log(saludo());

function calculadora(num1, num2, mostrar=false){
    if(!mostrar){
        console.log("Suma: " + (num1+num2));
    }else{
        document.writeln("Suma: " + (num1+num2));
    }
    
}

var x = confirm("Mostrar en pantalla?");

calculadora(1,2,x);

