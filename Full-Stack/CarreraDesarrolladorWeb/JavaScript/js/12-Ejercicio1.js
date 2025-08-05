'use strict'

/* Programa que pida dos numeros y que diga cual es mayor y cual es menor y si son iguales; si los numeros no son numero o son negativos o son iguales a 0, volver a pedir los numeros */


//Ingreso Primer Número
var bandera1 = true;
while(bandera1){
    var numero1 = parseInt(prompt("Ingrese un Número", 0));
    if(numero1<=0){
        bandera1 = true;
    }else if(isNaN(numero1)){
        bandera1 = true;
    }else{
        bandera1 = false;
    }
}

//Ingreso Segundo Número
var bandera2 = true;

while(bandera2){
    var numero2 = parseInt(prompt("Ingrese otro Número", 0));
    if(numero2<=0){
        bandera2 = true;
    }else if(isNaN(numero2)){
        bandera2 = true;
    }else{
        bandera2 = false;
    }
}

//Validación

