'use strict'

//CONDICIONAL IF
var edad = 19;
var nombre = "Juan";
var año = 2023;

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