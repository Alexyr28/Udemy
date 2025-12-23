'use strict';

window.addEventListener("load", () => {
    if(typeof(Storage) !== undefined){
        console.log("LocalStorage disponible");
        
    }else{
        console.log("Incompatible con localStorage");
    }

    //GUARDAR LOS DATOS
    //LocalStorage es para guardar datos en el navegador
    //setItem es para guardar datos
    //getItem es para obtener datos
    //removeItem es para eliminar datos
    //clear es para eliminar todos los datos
    localStorage.setItem("nombre", "Alexyr");
    localStorage.setItem("edad", 25);
    localStorage.setItem("profesion", "Desarrollador Web");
    localStorage.setItem("titulo", "Curso de JavaScript");

    localStorage.getItem("nombre");
    console.log(localStorage.getItem("nombre"));

    document.querySelector("#datos").innerHTML = localStorage.getItem("profesion");

    var usuario = {
        nombre: "Alexyr",
        edad: 25,
        profesion: "Desarrollador Web"
    };

    //Guardar objetos toca convertirlo a String
    localStorage.setItem("usuario", JSON.stringify(usuario));

    var userjs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userjs);

    document.querySelector("#peliculas").append(' ' + userjs.profesion + " - " + userjs.nombre);
    document.querySelector("#datos").append(' - ' + userjs.edad + " - " + userjs.nombre);


    localStorage.removeItem("usuario");

    localStorage.clear();
});