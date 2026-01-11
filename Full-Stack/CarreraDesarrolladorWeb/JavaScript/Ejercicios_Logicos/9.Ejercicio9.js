var numero = -67;

function invertir(numero){
    var invertir = parseInt(numero.toString().split('').reverse().join(''))  * Math.sign(numero);

    return console.log(invertir);
    
}

invertir(numero);