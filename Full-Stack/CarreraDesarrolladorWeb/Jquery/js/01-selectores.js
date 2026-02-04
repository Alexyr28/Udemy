'use strict'

window.addEventListener('load', () =>{
    $(document).ready(function(){
        console.log('Está todo listo');        
    });

    //Selector ID
    var rojo = $('#rojo').css('background','red').css('color', 'white');
    console.log(rojo);
    
    $('#amarillo').css('background', 'yellow').css('color', 'green');

    $('#verde').css('background', 'green').css('color', 'white');

    //Selector de clases
    var mi_clase = $('.zebra').css('padding', '5px');

    $('.sin_borde').click(function () { 
        console.log('Click presionado!!');     
        $(this).addClass('zebra');
    });

    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function(){
        var that = $(this);

        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });


    //Selectores de Atributos
    $('[title = "Google"]').css('background', '#ccc');

    $('[title = "Facebook"]').css('background', 'blue');

    //Otros
    $('p, a').addClass('margen_superior');

    var busqueda = $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda);
    
});//Fin Load