'use strict'

/* Utilizar un bucle para calcular la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado */

var suma = 0;
var media = 0;
var numero = 0;
var contador = 0;
var bandera = true;

while(numero >= 0 && bandera == true){
    numero = parseInt(prompt("Introduce un numero: "));
    if(numero < 0){
        bandera = false;
    }else if(isNaN(numero)){
        numero = 0;
    }else{
        suma = suma + numero;
        contador++;
    }
}
media = suma / contador;
alert("Resultado Suma: " + suma);
alert("Resultado Media: " + media);