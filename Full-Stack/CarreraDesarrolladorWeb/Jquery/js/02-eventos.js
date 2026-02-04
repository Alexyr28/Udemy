// Ready permite detectar dicho estado a través de la declaracion
$(document).ready(function(){
    //Mouse Over Mouse Out
    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background","red");
    // });

    // caja.mouseout(function () { 
    //     $(this).css("background","green");
    // });

    // OTRO METODO
    function cambiaRojo(){
        $(this).css('background', 'red');
    }

    function cambiaVerde(){
        $(this).css('background', 'green');
    }

    caja.hover(cambiaRojo, cambiaVerde)

    // Evento Click, Doble Click
    caja.click(function () { 
        $(this).css('background', 'blue').css('color', 'white');
    });

    caja.dblclick(function () { 
        $(this).css('background', 'pink').css('color', 'black');
    });

    //Evento Focus y blur
    var nombre = $('#nombre');
    var datos = $('#datos');

    //Cuando entra
    nombre.focus(function () { 
        $(this).css('border', 'solid green 2px');        
    });

    //Cuando Sale
    nombre.blur(function () { 
        $(this).css('border', '1px solid #ccc');

        datos.text($(this).val()).show();
    });

    //Evento Mousedown Mouseup

    //Cuando se esta presionando click iz
    datos.mousedown(function () { 
        $(this).css('border-color', 'gray');
    });

    //Cuando se deja de presionar click iz
    datos.mouseup(function () { 
        $(this).css('border-color', 'black');
    });

    //Evento Mousemove
    $(document).mousemove(function () { 
        //Ocultar el cursor
        $('body').css('cursor','none');

        $('#sigueme').css('left', event.clientX).css('top', event.clientY);
    });
});//Fin evento load