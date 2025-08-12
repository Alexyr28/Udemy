'use strict'

function sumame(num1, num2, suma_muesta, suma_pordos, callback){
    var suma = num1 + num2;
    suma_muesta(suma);
    suma_pordos(suma);
    callback();
    return suma;
}

sumame(4,6, function(dato){
        console.log("Suma: ", dato);
    },
    function(dato){
        console.log("Suma por dos: ", (dato*2));
    },
    () => {
        console.log("Hola");
    }
);

//FUNCIONES FLECHA

var suma = sumame(3,8, dato =>{
        console.log("2. Suma es: ", dato);
    },
    dato =>{
        console.log("3. Suma por dos: ", (dato*2));
    },
    () => {
        document.writeln("Hola");
    }
);

document.writeln(suma);