//PALINDROMOS

var palabra = "anana";

function palindromo(palabra){
    let invertido = palabra.split('').reverse().join('');
    console.log(invertido);
    if(invertido == palabra){
        return true;
    }else{
        return false;
    }
}

console.log('La palabra ' + palabra + ' es un Palindromo?', palindromo(palabra));
