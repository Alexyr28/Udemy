//Sacar el porcentaje de X numero

var numero = 1000;

var porcentaje = 50;

function porcent(porcentaje, numero){
    var resultado = (numero * porcentaje)/100;
    console.log('El ', porcentaje, '% de ', numero, ' es ', resultado);
}

porcent(porcentaje, numero);