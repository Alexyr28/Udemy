'use strict'

var año = 2024;

while(año <= 2050) {
    console.log("Año: " + año);
    año++;    
}

while(año != 1991){
    console.log("Año: " + año);
    año--;

    if(año === 2000){
        console.log("Año 2000");
        break;
    }
}

//DO WHILE
var años = 20;

do{
    console.log("Mientras sea menor a 25");
    console.log(años);    
    años++;
}while(años < 25)