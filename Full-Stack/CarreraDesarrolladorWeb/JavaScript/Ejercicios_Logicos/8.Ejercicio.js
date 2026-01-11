//Par e impar

var resultado;

function impar(numero1, numero2){
    var contador = 0;

    for(let i = numero1; i <= numero2; i++){
        resultado = i % 2;

        if(resultado === 0){
            console.log(i,"Es Par");
        }else{
            console.log(i,"Es Impar");
            contador++;
        }
    }

    console.log('\n Hay', contador, 'números impares');
    
}

impar(1, 10);