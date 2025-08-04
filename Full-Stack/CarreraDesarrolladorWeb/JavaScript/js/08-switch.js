'use strict'

//switch es una estructura de control que permite ejecutar diferentes casos segun el valor de una expresion o variable

var edad = 12;
var show = "";

switch(edad){
    case 18:
        show = "Mayor de edad";
        break;
    case 25:
        show = "Adulto";
        break;
    case 40:
        show = "Adulto mayor";
        break;
    case 75:
        show = "Anciano";
        break;
    default:
        show = "No es un caso definido";
        break;
}

console.log(show);
