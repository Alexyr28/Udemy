'use strict';

window.addEventListener('load', () => {
    //OBJETO JSON

    //Defino lo que va a ser la clase
    var pelicula = {
        titulo: "Coco",
        año: 2017,
        pais: "EE.UU"
    };

    pelicula.titulo = "Coco 2";
    
    var peliculas = [
        {titulo: "El pepe", año: 2020, pais: "EE.UU"},
        {titulo: "La rana", año: 1999, pais: "EE.UU"},
        {titulo: "Sacando Tela", año: 2025, pais: "Colombia"},
        pelicula
    ];

    console.log(peliculas);

    var caja_pelicuas = document.querySelector("#peliculas");
    
    for(let value in peliculas){
        var p = document.createElement("p");
        p.append(peliculas[value].titulo + " - " + peliculas[value].año);
        caja_pelicuas.append(p);
    }
    
});//FIN EVENTO LOAD