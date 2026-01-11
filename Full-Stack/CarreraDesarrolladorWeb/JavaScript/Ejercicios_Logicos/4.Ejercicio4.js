//Buscar palabra de tal frase y decir cuantas veces se repite 
//La palabra y la frase deben ser parametros de una funcion

var frase = 'Hola programer yo uso php todo el dia y en la noche javascript dia tras dia';

var palabra = 'dia';

var contador = 0;

function buscar(frase, palabra){
    //Reemplazamos todos los caracteres especiales por espacios en blanco
    var custom = frase.toLowerCase().replace(/[!¡,.-]/gi, '');
    //Convertimos en un array doble espacio para que sea la palabra si es un espacio es letra
    var array = custom.split(' ');    
    //Recorremos el array
    for(let i = 0; i < array.length; i++){
        if(array[i] == palabra){
            contador++;
        }
    }

    console.log(palabra, " se repite ", contador, " veces");    
}

buscar(frase, palabra);