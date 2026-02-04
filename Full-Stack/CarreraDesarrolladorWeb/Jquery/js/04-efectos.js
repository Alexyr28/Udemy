$(document).ready(function () {
    var caja = $('#caja');

    $('#mostrar').hide();

    $('#ocultar').click(function () { 
        $(this).hide();
        $('#mostrar').show();

        caja.slideUp('slow', function(){
            console.log('Cartel ocultado');            
        });        
    });

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        
        caja.slideDown('fast');
        /*
            fadeIn()
            fadeOut()
            fadeTo('slow', 0.8)
        */
    });

    $('#todoenuno').click(function(){
        caja.slideToggle('slow');
    });

    $('#animar').click(function(){
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow').animate({
            borderRadius: '900px',
            marginTop: '200px'
        }, 'slow').animate({
            borderRadius: '0px',
            marginLeft: '0px'
        }, 'slow').animate({
            borderRadius: '100px',
            marginTop: '0px'
        }, 'slow').animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow');
    });
});