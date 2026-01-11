//Sacar de dos array dos elementos comunes

var vector1 = ['Adrian', 'Goku', 'Jenifer', ' Messi', 'Luna'];
var vector2 = ['Adrian', 'Vegeta', 'Ronaldo', 'Jenifer', 'Goku'];

var array = [];

// function comparar(vector1, vector2){
//     for(i = 0; i < vector1.length; i++){
//         for(j = 0; j < vector2.length; j++){
//             if(vector1[i] === vector2[j]){
//                 array[i] = vector1[i];
//             }
//         }
//     }

//     array.forEach(element => {
//         console.log(element);
        
//     });
// }

// comparar(vector1, vector2);

function ElementosComunes(v1, v2){
    const filtrado = v1.filter(element =>{
        return v2.includes(element);
    });

    return filtrado;
}

console.log(ElementosComunes(vector1, vector2));
