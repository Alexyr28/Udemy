'use strict';

window.addEventListener('load', () => {
    //Seleccionar formulario
    var formulario = document.querySelector('#formpeliculas');
    
    //Captamos el vento submit del formulario
    formulario.addEventListener('submit', function(){
        //Selecciono el id del input y el value lo guardo en la variable
        var titulo = document.querySelector('#addpelicula').value;

        //Si titulo tiene algo entro al If
        if(titulo.length >= 1){
            //El key y el valor es el mismo
            localStorage.setItem(titulo, titulo);
        }
    });

    //Seleccionamos el id de la UL
    var ul = document.querySelector('#peliculas-list');

    for(var i in localStorage){
        //Si la posicion es un String entro al if
        if(typeof localStorage[i] == 'string'){
            //Creamos el elemento li
            var li = document.createElement('li');
            //Agregamos el valor del localStorage
            li.append(localStorage[i]);

            ul.append(li);
        }
    }

    //Seleccionar el formulario de borrar
    var formulariob = document.querySelector('#formBorrarPeliculas');

    //Capturamos el evento Submit del formulario
    formulariob.addEventListener('submit', function(){
        //Seleccionamos el id del inout y el value y se lo guarda en la variable
        var titulo = document.querySelector('#borrarPelicula').value;

        console.log(titulo);
        

        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
        }
    });
});//Fin Load