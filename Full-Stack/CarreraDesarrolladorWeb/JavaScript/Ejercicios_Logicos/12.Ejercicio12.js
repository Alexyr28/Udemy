/* 
Dada una palabra, buscarla en un parrafo y censurar todas las coincidencias de la palabra en el parrafo con [-CENSURADO-]
*/

function censurado(texto=false, busqueda=false){
    var resultado = '';

    if(!texto && !busqueda){//Si son false
        resultado = 'No se puede leer el texto ni la busqueda';
    }else if(!texto && busqueda){
        resultado = 'No se puede leer el texto';
    }else if(texto && !busqueda){
        resultado = 'No se puede leer la busqueda';
    }else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]');
    }

    return resultado;
}

console.log(censurado('hola hola hola', 'hola'));
