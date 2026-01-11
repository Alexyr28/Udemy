/*
Hacer esto
*****
*   *
*   *
*   *
*****
*/

function lado(numero){
    let lado = '';

    for(let i = 0; i < numero; i++){
        lado += '*';
    }

    return lado;
}

function cuadrado(numero){
    let dibujo = lado(numero) + "\n";

    let contenido = '';

    for(i = 0; i < (numero-2); i++){
        contenido = '*';
        for(j = 0; j < (numero - 2); j++){
            contenido += ' ';
        }
        contenido += '*';
        dibujo += contenido + '\n';
    }
    dibujo += lado(numero);
    console.log(dibujo);
}

cuadrado(5);

