'use strict'

window.addEventListener('load', () => {
    var encabezado = document.querySelector('h1');
    var start = document.querySelector('#start');
    var stop = document.querySelector('#stop');
    var tiempo = null;

    function intervalo(){
        if(tiempo == null){
            tiempo = setInterval(() =>{
                if(encabezado.style.background == 'red'){
                    encabezado.style.background = 'blue';
                }else{
                    encabezado.style.background = 'red';
                }
            },1000)
        }
    }

    start.addEventListener('click', function(){
        intervalo();
    })

    stop.addEventListener('click', function(){
        clearInterval(tiempo);
        tiempo = null;
    })
    
})