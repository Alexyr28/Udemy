'use strict'

//ALERTAS
alert("Alerta En JavaScript");
alert("Esta es ventana de Alerta");

//CONFIRMACION
confirm("Estas Seguro que quieres continuar");

var respuesta = confirm("Estas Seguro que quieres continuar 2");

console.log(respuesta);

//INGRESAR DATOS
var resultado2 = prompt("Ingrese su nombre", "Nombre"); // PROMPT DEVUELVE STRING
console.log(resultado2);

var resultado3 = parseInt(prompt("Ingrese su Edad", 23));
console.log(resultado3);
