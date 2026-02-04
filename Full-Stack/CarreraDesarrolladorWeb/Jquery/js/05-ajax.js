$(document).ready(function () {
    //Load
    //$('#datos').load('https://pokeapi.co/api/v2');

    //Get y Post
    function load() {
        /* https://pokeapi.co/api/v2/pokemon?page=2 */
        $.get("https://dummyjson.com/users",/* {page:2} , */ function (response) {
            response.users.forEach(function (element, i) {
                $('#datos').append('<p>' + element.firstName + ' ' + element.lastName + '</p>');
            });
        });
    }

    load();

    $('#formulario').submit(function(e){
        /* preventDefault me permite que no me redirija a la página de action que tiene el formulario */
        e.preventDefault();

        var usuarios = {
            firstName: $('input[name="name"]').val(),
            lastName: $('input[name="web"]').val()
        };

    // $.post($(this).attr('action'), usuarios, function(response){
    //     console.log(response);
    // }).done(function(){
    //     alert('Usuario registrado');
    // });

    /* Una mejor forma de hacerlo */
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(usuarios),
        contentType: 'application/json',
        beforeSend: function(){
            console.log('Enviando datos');
        },
        success: function(response){
            console.log(response);
            $('#datos').append('<p>' + response.firstName + ' ' + response.lastName + '</p>');
        },
        error: function(){
            console.log('Error');
        },
        timeout: 1000
    });
    return false;
    });
});