//Dada una cadena de texto darle la vuelta e invertir el orden de sus caracteres sin usar metodos propios del lenguaje solo estructuras de control

var texto = "Hola programer debes cumplir con la prueba técnica"

let invertido = '';

function invertir(texto){
    //For of itera letra por letra y tratarlo como un array
    for(const letra of texto){
        invertido = letra + invertido;
    }

    console.log(invertido);
}//Fin Funcion_Invertir

invertir(texto);