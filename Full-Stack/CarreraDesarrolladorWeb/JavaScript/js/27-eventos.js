'use strict'
//Con el evento Load se ejecuta una vez cargada la página y no es necesario usarlo al final del body
window.addEventListener('load', () => {

    // var bg = document.getElementById('boton');
    var bg = document.querySelector('#boton')    
    function cambiarColor() {
        // bg.style.backgroundColor = 'red';   
        var boton = bg.style.backgroundColor;

        if(boton == 'green'){
            bg.style.backgroundColor = 'red';
        }else{
            bg.style.backgroundColor = 'green';
        }
    }
    //CLIK
    bg.addEventListener('click',()=>{
        cambiarColor();
    })
    //FinClick
    
    //MOUSEOVER
    bg.addEventListener('mouseover',function(){
        bg.style.backgroundColor = 'yellow';
    })
    //FinMOUSEOVER

    //MOUSEOUT
    bg.addEventListener('mouseout', function(){
        bg.style.backgroundColor = '#e5e5e5';
    })
    //FinMOUSEOUT
    
    //FOCUS
    //Si se pone el cursor en el input
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function(){
        console.log('[focus] Estas dentro del input');
        
    })
    //FinFOCUS
    
    //BLUR
    //Si se sale del input
    input.addEventListener('blur', function(){
        console.log('[blur] Sales del input');
        
    })
    //FinBLUR
    
    //KEYDOWN
    //Cuando se presiona una tecla
    input.addEventListener('keydown', function(event){
        console.log('[keydown] Pulsas una tecla', String.fromCharCode(event.keyCode));
        
    })
    //FinKEYDOWN

    //KEYUP
    //Cuando se suelta una tecla
    input.addEventListener('keyup', function(event){
        console.log('[keyup] Sueltas una tecla', String.fromCharCode(event.keyCode));
        
    })
    //FinKEYUP
});