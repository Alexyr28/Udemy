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
