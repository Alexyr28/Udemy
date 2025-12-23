'use strict'

window.addEventListener('load', () => {
    console.log("DOM cargado");
    var formulario =  document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');

    //Invocamos el daashed
    box_dashed.style.display = 'none'; // Para que no se pueda ver

    //Eventos
    formulario.addEventListener('submit', function(){
        console.log('Evento submit capturado');
        var nombre =  document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);
        
        //Validar Datos
        //Primera Forma
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es válido");
            document.querySelector('#error_nombre').innerHTML = "El nombre no es válido";
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El apellido no es válido");
            return false;
        }

        //isNaN ES UNA FUNCION QUE DEVUELVE TRUE SI NO ES UN NUMERO
        //Validar edad
        if(edad == null || edad <= 0 || isNaN(edad) == true){
            alert("La edad no es válida");
            return false;
        }

        //Mostrar los datos
        box_dashed.style.display = 'block';
        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

    })
})