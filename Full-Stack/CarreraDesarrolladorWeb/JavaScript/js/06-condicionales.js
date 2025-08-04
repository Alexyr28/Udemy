'use strict'

//CONDICIONAL IF
var edad = 19;
var nombre = "Juan";
var año = 1999;

// NO. 1
if (edad == 11)
{
    console.log("La edad es igual a 11");
}else if(edad == 12)
{
    console.log("La edad es igual a 12");
}else if(edad == 13)
{
    console.log("Es mayor a 12");
}else{
    console.log("No es ni 11 ni 12 ni 13");
}

// NO. 2
if(edad >=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

// NO. 3
if(edad>=18 && edad <=54){
    console.log("Es mayor de edad y menor de 55");
}else if(edad>=55){
    console.log("Es adulto mayor");
}else{
    console.log("Eres Menor");    
}

// NO. 4
if(año == 1981 || año >= 1981){
    console.log("Generación Milenial");    
}else{
    console.log("No Generación Milenial");    
}

//NO. 5 MEJOR PRACTICA
if(año == 1981 || (año >=1981 && año <= 1993)){
    console.log("Generación Milenial");
}else{
    console.log("No Generación Milenial");
}

//NO. 6
if(año == 1994 || año >= 1994 && año <= 2000){
    console.log("Generación Z");
}else{
    console.log("No Generación Z");
}