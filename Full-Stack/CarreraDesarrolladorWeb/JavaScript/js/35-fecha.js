'use strict'

var fecha = new Date();

console.log(fecha);

var year = fecha.getFullYear();
var month = fecha.getMonth() + 1;
var day = fecha.getDay();
var hora = fecha.getHours();
var minute = fecha.getMinutes();
var seg = fecha.getSeconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hora);
console.log(minute);
console.log(seg);

var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
    La hora es: ${hora}
    Los minutos son: ${minute}
    Los segundos son: ${seg}
`;

console.log(textoHora);

console.log(Math.ceil(Math.random() * 1000));







