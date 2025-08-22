'use strict'

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");

/* var text = "Mi nombre es " + nombre + " y mi apellido es " + apellido;

console.log(text); */

/* INTERPOLACION DE VARIABLES ES UNA TECNICA PARA COMBINAR CADENAS DE TEXTO CON VALORES DE VARIABLES DE MANERA ELEGANTE SIN NECESIDAD DE CONCATENARLAS UTILIZANDO PLANTILLAS LITERALES */

var text = `<h1>Hola que tal</h1>
<h3>Mi nombre es ${nombre}</h3>
<h3>Mi apellido es ${apellido}</h3>
`;

document.writeln(text);