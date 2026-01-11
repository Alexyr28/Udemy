/*
Dado un string y un numero repetir el string tantas veces como lo indique el numero
*/

function repetir(texto, numero){
    let resultado = '';

    for(let i = 1; i <= numero; i++){
        resultado += texto + ' ';
    }

    return resultado;
}

console.log(repetir('hola', 8));


/*
Funcion Prototipo solo funciona para JAVASCRIPT
*/

String.prototype.repetir = function (numero) {
    let resultado = ' ';

    for(let i = 1; i <= numero; i++){
        resultado += this + ' ';
    }

    return resultado;
}

console.log('Ales'.repetir(10));

