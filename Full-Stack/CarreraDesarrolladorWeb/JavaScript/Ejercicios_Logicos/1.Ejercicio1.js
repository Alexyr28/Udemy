//Multiplicar un Numero Dado

var numero = 5;
var resultado;
var multiplicar = `Tabla del ${numero}\n`;

// console.log('Tabla del ' + numero);

function tablaMultiplicar(numero){
    for(var i = 1; i <= 10; i++){
        resultado = (numero * i);
        // console.log(numero + ' x ' + i + ' = ' + resultado);
        multiplicar += `${i} x ${numero} = ${resultado}\n`;
    }
    return multiplicar;
}

console.log(tablaMultiplicar(numero));

