'use strict'

//Transformación de texto

var numero = 25;
var texto = "Texto en JavaScript entre otras cosas JavaScript";
var texto2 = " EN EL CURSO";

var dato = numero.toString();
console.log(typeof dato);

dato = texto.toUpperCase();
console.log(dato);

dato = texto2.toLowerCase();
console.log(dato);

//CALCULAR LONGITUD
var nombre1 = "Juan";
var nombre2 = ["romina","malaspina"];
console.log(nombre1.length);
console.log(nombre2.length);

//CONCATENAR Y UNIR TEXTOS
var textotal = texto.concat(texto2);
console.log(textotal);

textotal = texto.concat(texto2 + " ok");
console.log(textotal);

//INDEXOF BUSCA EN QUE NUMERO DE CARACTER SE ENCUENTRA
var busqueda = texto.indexOf("Java");
console.log(busqueda);
//LASTINDEXOF
busqueda = texto.lastIndexOf("Java");
console.log(busqueda);
//SI NO ENCUENTRA EL VALOR DEVUELVE UN VALOR NEGATIVO
busqueda = texto.indexOf("JavaScript2");
console.log(busqueda);

busqueda = texto.search("otras");
console.log(busqueda);

//MATCH BUSCA LA PALABRA Y DETALLA CON UN ARRAY CON EL NUMERO EN EL QUE SE ENCUENTRA LA PALABRA
busqueda = texto.match("otras");
console.log(busqueda);
//PARA CUANDO HAY MAS DE DOS PALABRAS
busqueda = texto.match(/JavaScript/g);
console.log(busqueda);

//SUBSRT CUANDO LLEGUE AL CARACTER QUE QUIERO MUESTRA LOS SIGUIENTES N CARACTERES.
busqueda = texto.substr(9, 6);
console.log(busqueda);

//CHARAT MUESTRA LA LETRA EN EL NUMERO QUE LE INDICO
