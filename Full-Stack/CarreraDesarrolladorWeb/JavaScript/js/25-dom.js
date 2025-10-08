'use strict';

/*
DOM (Modelo de objeto del documento) es una interfaz de programación para documentos HTML, XML Y SVG. 
Proporciona una representación estructural del documento, permitiendo a los programas modificar la estructura, estilo y contenido del documento.
Cuando una pagina web se carga en un navegador, el navegador construye una estructura del árbol de objetos que representa la página web. Este árbol
se conoce como DOM (Document Object Model)
*/
var caja = document.getElementById('micaja');
console.log(caja);
caja.style.background = 'red';

//Otra manera de elegir ID
var caja1 = document.querySelector("#micaja");

function cambiarColor(color){
    caja1.style.background = color;
}

cambiarColor('blue');
//QuerySelector selecciona el primer elemento que coincida con el selector CSS especificado
var etiqueta = document.querySelector("h1");
etiqueta.style.background = 'green';

//InderHTML Recoge el contenido actual de un contenedor o inserta nuevo contenido dentro de un contenedor
var caja3 = document.getElementById("micaja").innerHTML;
console.log(caja3);

var caja4 = document.getElementById("micaja");
caja4.innerHTML = "El contenido de la caja fue cambiado";
console.log(caja4);

caja4.style.padding = "20px";
caja4.style.color = "white";
caja4.style.background = "green";
caja4.className = "mi-clase-caja";

console.log(caja4);

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
//getElementByIdTagName ingresa convirtiendo un array a todos los elementos que coincidan con el nombre de etiqueta
var todoslosdiv = document.getElementsByTagName("div");
console.log(todoslosdiv);

var contenido = todoslosdiv[2].textContent;
console.log(contenido);

var contenido = todoslosdiv[2]
contenido.innerHTML = "Hola soy Alexyr"

//CREAR ELEMENTOS, ETIQUETAS Y ATRIBUTOS

var seccion = document.querySelector("#miseccion");
var h1 = document.getElementById("mih1");

//CREAR createdElement
var hr = document.createElement("hr");

//AÑADIR CON append AL DOM
seccion.append("Agregando elemento");
seccion.append(hr);
//AÑADIR ELEMENTO ANTES
seccion.prepend("Agregando elemento antes");

var p = document.createElement("p");
//AÑADIR ELEMENTO ANTES DE UN ELEMENTO ESPECIFICADO
p.append("Agregando elemento antes del elemento especificado");
seccion.insertBefore(p,h1);

//ELEJIR EL ID

var seccion = document.querySelector("#miseccion");
var h1 = document.getElementById("mih1");
var hr = document.createElement("hr");

for(let valor in todoslosdiv){
    if(typeof todoslosdiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todoslosdiv[valor].textContent);
        //AGREGAR TEXTO AL PARRAFO
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);