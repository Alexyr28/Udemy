$(document).ready(function(){
    //Mover elemento por la página
    $('.elemento').draggable();

    //Redimensionar elemento
    $('.elemento').resizable();

    //Seleccionar y ordenar elementos
    // $('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log('Elemento movido');
        }
    });

    //DROP
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(event, ui){
            console.log('Algo se soltó dentro de la caja');
        }
    });

    //Efectos
    $('#mostrar').click(function(){
        // $('.caja-efectos').toggle('fade', 1000);
        // $('.caja-efectos').toggle('fadeToggle');
        // $('.caja-efectos').toggle('explode');
        // $('.caja-efectos').effect('explode');
        // $('.caja-efectos').toggle('blind');
        // $('.caja-efectos').toggle('slide');
        // $('.caja-efectos').toggle('drop');
        // $('.caja-efectos').toggle('puff');
        // $('.caja-efectos').toggle('fold');
        // $('.caja-efectos').toggle('size');
        // $('.caja-efectos').toggle('highlight');
        // $('.caja-efectos').toggle('pulsate');
        $('.caja-efectos').toggle('shake');
    });

    //Tooltips
    $(document).tooltip();

    //Dialog
    $('#lanzar-popup').click(function(){
        $('#popup').dialog();
    });

    //Datepicker
    $('#calendario').datepicker();

    //Pestañas
    $('#pestanas').tabs();
});