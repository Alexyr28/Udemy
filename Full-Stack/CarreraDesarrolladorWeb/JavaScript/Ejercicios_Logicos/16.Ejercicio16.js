//Dado una cadena de texto devolver el caracter mas usado

function masUsado(params){
    var mapeo = {};

    var count = 0;

    var letra_mas_repetida;

    var customizar = params.toLowerCase().replace(/[!¡,.-]/gi, '');

    var arrayLet = customizar.split('');

    for(const letra of arrayLet){
        if(letra != ' '){
            if(mapeo[letra]){
                mapeo[letra]++;
            }else{
                mapeo[letra] = 1;
            }
        }
    }

    for(const letra in mapeo){
        if(mapeo[letra].toString().trim().length === 1 && mapeo[letra] > count){
            count = mapeo[letra];
            letra_mas_repetida = letra;
        }
    }

    return letra_mas_repetida;
}

console.log('La letra que mas se repite es la letra', masUsado('Alex hace ejercicio, pruebas tecnicas, logica con js!'));
