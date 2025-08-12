'use strict'

/* Muestre todos los numeros divisores de un numero ingresado en prompt */

var band1 = false;

while(!band1){
    var numero = parseInt(prompt("Ingrese un numero"));
    if(isNaN(numero)){
        alert("Por favor ingrese un numero");
    }else if(numero == 0){
        alert("No hay divisores para el cero");
    }else{
        band1 = true;
    }
}
document.writeln("<h1>Números Divisores</h1>");
for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        document.writeln("<h1>"+i+"</h1>");
    }
}