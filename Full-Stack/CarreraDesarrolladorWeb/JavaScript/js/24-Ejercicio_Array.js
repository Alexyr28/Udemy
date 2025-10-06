'use strict';

/*
1. Pedir 6 numeros por pantalla y guardarlos en un array.
2. Mostrar el array en pantalla.
3. Invertir su orden y mostrarlo.
4. Ordenarlo y mostrarlo.
5. Cuantos elementos tiene el array
6. Buscar un valor introducido por el usuario que diga si lo encuentra o no. y su indice.
*/

var numeros = [];
var count = 0;

function pedirNumeros(){
    while(count < 6){
        var numero = prompt('Ingrese un numero');
        var valor = Number(numero);
        if(numero !== null && numero !== '' && !isNaN(valor)){
            numeros.push(valor);
            count++;
        } else {
            alert('Por favor ingresa un número válido');
        }
    }
}

function mostrarArray(lista){
    console.log(lista);
    document.writeln('<h1>Contenido del array</h1>');
    document.writeln("<ul>");
    for(var i = 0; i < lista.length; i++){
        document.writeln("<li>" + lista[i] + "</li>");
    }
    document.writeln("</ul>");
}

function invertirArray(lista){
    lista.reverse();
    console.log(lista);
    document.writeln('<h1>Contenido del array invertido</h1>');
    document.writeln("<ul>");
    for(var i = 0; i < lista.length; i++){
        document.writeln("<li>" + lista[i] + "</li>");
    }
    document.writeln("</ul>");
}

function ordenarArray(lista){
    lista.sort(function(a, b){
        return a - b; // orden ascendente numérico
    });
    console.log(lista);
    document.writeln('<h1>Contenido del array ordenado</h1>');
    document.writeln("<ul>");
    for(var i = 0; i < lista.length; i++){
        document.writeln("<li>" + lista[i] + "</li>");
    }
    document.writeln("</ul>");
}

function buscarElemento(lista){
    var busqueda = parseInt(prompt("Busca un numero"));
    var indice = lista.indexOf(busqueda);
    if(indice !== -1){
        document.writeln("<h1>Elemento " + busqueda + " encontrado en el indice " + indice + "</h1>");
    }else{
        document.writeln("<h1>Elemento " + busqueda + " no encontrado en el array</h1>");
    }
}

pedirNumeros();
mostrarArray(numeros);
invertirArray(numeros);
ordenarArray(numeros);
document.writeln("<h1>El array tiene: " + numeros.length + " elementos</h1>");
buscarElemento(numeros);