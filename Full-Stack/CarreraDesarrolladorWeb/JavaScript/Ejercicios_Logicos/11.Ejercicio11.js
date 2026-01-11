/*
Dado dicho numero hacer una escalera
ejempl0 4
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/

var escal = '[-]';

var dibujo = [];

function escalera(params){
    for(let i = 0; i < params; i++){
        if(i > 0){
            dibujo[i] = escal + dibujo[i-1];
        }else{
            dibujo[i] = escal;
        }
    }

    dibujo.forEach(element =>{
        console.log(element);
    });
}

// escalera(4);

function escalerax(numero){
    for(let i = 0; i < numero; i++){
        let escalones = '[-]';
        for(let j = 0; j < i; j++){
            escalones += '[-]';
        }
        console.log(escalones);        
    }
}

escalerax(5);
