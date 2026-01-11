/*
Dado un array en tantos subarray como sea necesario basandonos en un numero que indique su tamaño
*/

function divArray(arrayI, numero){
    let arrayF = [];

    while(arrayI.length > 0){
        arrayF.push(arrayI.splice(0, numero));        
    }

    return arrayF;
}

console.log(divArray([1,2,3,4,5,6], 3));
