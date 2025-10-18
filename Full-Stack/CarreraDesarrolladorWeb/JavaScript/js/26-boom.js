'use strict'

// Permite acceder y modificar las propiedades de la ventana
// del propio navegador

function getBoom(){
    /*Se obtiene el tamaño de la pantalla*/
    console.log("Tamaño Pantalla");    
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    console.log(screen.width);
    console.log(screen.height);
    
    /*Dirección URL del navegador*/
    console.log("Dirección URL");    
    console.log(window.location.href);
    
}

//getBoom();

function redirect(url){
    window.location.href = url
}

// redirect("https://google.com");

function openWindows(url){
    window.open(url, '', 'width=400,height=300');
}

openWindows("https://google.com");