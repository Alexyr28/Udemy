'use strict'

/* Mostrar todos los numeris impares introducidos por el usuario */

var band1 = false;
var band2 = false;

while(!band1){
    var num1 = parseInt(prompt("Introduce un número"));
    if(isNaN(num1)){
        alert("Debes introducir un número");
    }else{
        band1 = true;
    }
}

while(!band2){
    var num2 = parseInt(prompt("Introduce un número"));
    if(isNaN(num2)){
        alert("Debes introducir otro número");
    }else{
        band2 = true;
    }
}

if(num1 > num2){
    for(var i = num1; i >= num2; i--){
        if(i % 2 != 0){
            document.writeln("<h1>" + i + " </h1>");
        }
    }
}else if(num1 < num2){
    for(var i = num1; i <= num2; i++){
        if(i % 2 != 0){
            document.writeln("<h1>" + i + " </h1>");
        }
    }
}else{
    alert("Los números introducidos son iguales");
    if(num1 % 2 != 0){
        document.writeln("<h1>" + num1 + " Es impar</h1>");
    }else{
        document.writeln("<h1>El numero introducido es par</h1>");
    }
}