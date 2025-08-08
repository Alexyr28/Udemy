'use strict'

/* Hacer Un programa que muestre todos los numeros entre dos numeros introducidos por el usuario */

var bandera1 = false;
var bandera2 = false;

while(!bandera1){
    var num1 = parseInt(prompt("Ingrese el primer numero"));
    if(isNaN(num1)){
        alert("Error, no es un numero");
    }else{
        bandera1 = true;
    }
}

while(!bandera2){
    var num2 = parseInt(prompt("Ingrese el segundo numero"));
    if(isNaN(num2)){
        alert("Error, no es un numero");
    }else{
        bandera2 = true;
    }
}

if(num1 > num2){
    for(var i = num1; i >= num2; i--){
        document.writeln("<h1>" + i + "</h1>")
    }
}else if(num2 > num1){
    for(var i = num1; i <= num2; i++){
        document.writeln100("<h1>" + i + "</h1>");
    }
}else{
    document.writeln("<h1>" + num1 + "</h1>");
}