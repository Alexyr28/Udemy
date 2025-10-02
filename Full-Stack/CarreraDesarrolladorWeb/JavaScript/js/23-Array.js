'use strict'

var nombre = ['Adrian', 'Maria', 25, true, "Jose"];

var leng = new Array("php", 'jquery', 24, false);

console.log(nombre, leng);

console.log(nombre[2]);

console.log(leng.length);

/* var element = parseInt(prompt("Que elemento quieres del Array", 0));

if(element >= nombre.length){
    alert("Introduce un número menor a: " + nombre.length)
}else{
    document.writeln(nombre[element]);
} */

document.writeln("<h1>Elementos del Array</h1>");
document.writeln("<ul>");
for(var i = 0; i < nombre.length; i++){
    document.writeln("<li>" + nombre[i] + "</li>");    
}
document.writeln("</ul>");

/* FOREACH VIENE CON UNA FUNCION DE CALLBACK, INDICE, ARRAY ESTAS DOS NO HACEN FALTA */
document.writeln("<ul>");
leng.forEach((elemento, indice, array) =>{
    console.log(array);
    document.writeln("<li>" + indice + "- " + elemento + "</li>");
});
document.writeln("</ul>");

//SOLO CON ELEMENTO
document.writeln("<ul>");
leng.forEach((elemento) => {
    document.writeln("<li>" + elemento + "</li>");
});
document.writeln("</ul>");

var damas = ["belen", "malaspina", "angela", "alejandra", "helen", "sofia", "danna"];
var damas2 = ["ana", "maria", "martha", "clara", "ximena", "kathe", "laura"];

//PUSH
damas.push("Lara");
console.log(damas);

//ARRAY MULTIDIMENSIONALES
var mujeres = [damas,damas2];
console.log(mujeres);
console.log(mujeres[0][2]);
console.log(mujeres[1][6]);

var elm = "";
while(elm != "terminar"){
    elm = prompt("Introduce Nombre de Mujer");
    if(elm != "terminar"){
        damas.push(elm);
    }else{
        break;
    }
}

console.log(damas);

//Eliminar un elemento en concreto-
var indice = damas.indexOf("angela");
if(indice > -1){
    damas.splice(indice, 1); //splice(posicion,cuantos)
}

console.log(damas);

//JOIN CONVIERTE EN UN STRING SEPARADO POR COMAS
var damas_string = damas.join(", ");
console.log(damas_string);

//SPLIT CONVIERTE STRING EN ARRAY
var cadena = "texto, texto1, texto2, texto3, texto4";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

//ORDENAR ALAFABETICAMENTE
console.log(damas.sort());

//REVEERSE EL ARRAY
console.log(damas.reverse());

//------------OTRA FORMA DE RECORRER UN ARRAY--------------
// FOR IN LANZA EL INDICE
document.writeln("<ul>");
for(let damax in damas){
    document.writeln("<li>" + damas[damax] + "</li>")
}
document.writeln("</ul>");

//FOR OF LANZA EL ELEMENTO
document.writeln("<ul>");
for(let damax1 of damas){
    document.writeln("<li>"+ damax1 + "</li>")
}
document.writeln("</ul>");

//BUSCAR ELEMENTO EN EL ARRAY
var busqueda = damas.find(function(dama){
    return dama == "belen";
})

console.log(busqueda);

var busqueda2 = damas.find(dama => dama == "belen");
console.log(busqueda2);

var busqueda2 = damas.findIndex(dama => dama == "belen");
console.log(busqueda2);

//SOME UNA FORMA BUSCAR Y COMPARAR CON UN ARRAY
var precios = [10, 20, 30, 40, 50];
var busqueda3 = precios.some(precio => precio > 30);
console.log(busqueda3);

