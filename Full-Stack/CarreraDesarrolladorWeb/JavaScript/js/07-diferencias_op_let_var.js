'use strict'
//CONDICION ESTRICTA === !==

var numero = 12;

if(numero === 12){
    console.log("Pasa");    
}

if(numero !== "12"){
    console.log("Pasa 2");    
}

//PRUEBAS CON LET Y VAR

//VAR
var numero2 = 40;

if(true){
    var numero2 = 50;
    console.log(numero2);    
}

//LET
var texto = "Curso js"

console.log(texto);

//La diferencia es que con var definimos una variable global, mientras que con let la variable es local a la función.

if(true){
    let texto = "Master js"
    console.log(texto);    
}

console.log(texto);


