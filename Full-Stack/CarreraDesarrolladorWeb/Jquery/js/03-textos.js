$(document).ready(function () {
    function reloadLinks(){
        $('a').each(function(i){
            var that = $(this);

            //attr Sirve para acceder o establecer los valores de los atributos
            var enlace = that.attr('href');

            that.attr('target', '_blank');

            that.text(enlace);
        })
    }

    reloadLinks();

    $('#add_button').removeAttr('disabled').click(function(){
        $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');

        $('#add_link').val('');

        reloadLinks();
    });
});//Fin ready