'use strict'

/* 
API REST ES UN SERVICIO O UN BACKEND QUE NOS DEVUELVE DATOS DE UNA BASE  DE DATOS EN JSON RECIBE PETICIONES POR POS GET PUT DELETE ETC


PAGINA QUE TIENEN LOS FETCH (los servicios rest) https://reqres.in/

FETCH ES UN METODO QUE HACE PETICIONES AJAX Y NOS VA A PERMITIR CONSUMIR DATOS DE SERVICIOS EXTERNOS

LAS PETICIONES AJAX SON SOLCITUDES REALIZADAS POR CÓDIGO JavaScript DESDE UN NAVEGADOR WEB HACIA UN SERVIDOR, SIN NECESIDAD DE RECARGAR LA PAGINA COMPLETA

ASINCRONISMO: PERMITE QUE LAS SOLICITUDES SE RELAICEN DE FORMA ASINCRONICA, LO QUE SIGINIFICA QUE EL NAVEGADOR PEUEDE CONTINUAR EJECUTANDO OTRAS TAREAS MIENTRAS ESPERA LA RESPUESTA DEL SERVIDOR.

ENVIO DE SOLICITUD: EL CÓDIGO DE JAVASCRIPT ENVIA UNA SOLICITUD A UNA URL ESPECIFICA EN EL SERVIDOR.

RESPUETA DEL SERVIDOR: CUANDO EL SERVIDOR PROCESA LA SOLICITUD, ENVIA UNA RESPUESTA DEL NAVEGADOR.

FUNCION DE DEVOLUCION: UNA VEZ QUE SE RECIBE LA RESPUESTA, SE EJECUTA UNA FUNCION DE DEVOLUCION EN JAVASCRIPT PARA MANEJAR LOS DATOS RECIBIDOS.

LAS PETICIONES AJAX SON FUNDAMENTALES PARA CREAR APLICACIONES WEB INTERACTIVAS Y DINAMICAS YA QUE PERMITEN ACTUALIZAR PARTES ESPECIFICAS DE UNA PAGINA SIN RECARGALA POR COMPLETO
*/

window.addEventListener('load', () => {

    var div_usuarios = document.querySelector('#usuarios');
    var div_usuario = document.querySelector('#usuario');
    
    function getUsers(){
        return fetch('https://jsonplaceholder.typicode.com/users');
    }


    function getUser(){
        return fetch('https://jsonplaceholder.typicode.com/users/2');
    }

    getUsers()
        .then(data => data.json())
        .then(users => {
            //console.log(users);
            listUsers(users);
            //Retorna la funcion que contiene una promesa
            return getUser(); 
        })
        .then(data => data.json())
        .then(user => {
            showUser(user);
            return getInfo();
        })
        .then(data => {
            console.log(data);
            
        }).
        catch(error => {
            alert('Error en las peticiones');
        })

    function listUsers(users){
        users.map((user, i) => {
            //Let asegura la integridad que no era posible con var y nos salvaguarda de re declarar una varibale accidentalmente
            let nombre = document.createElement('h3');

            nombre.innerHTML = i + ' - ' + user.name + ' ' + user.username;
            
            //AppendChild solo es para nodos y append es para nodos y String
            div_usuarios.appendChild(nombre);

            document.querySelector('.loading').style.display = 'none';
        });
    }//Fin funcion listUsers

    function showUser(user){
        let nombre = document.createElement('h3');

        nombre.innerHTML = user.name + ' - ' + user.website;

        div_usuario.appendChild(nombre);

        document.querySelector('#usuario .loading').style.display = 'none';
    }//Fin funcion showUser

    function getInfo(){
        var persona = {
            nombre : 'Adrian',
            apellido : 'Perez',
            url : 'adrianweb.onlin'
        }

        return new Promise((resolve, reject) => {
            var persona_string = JSON.stringify(persona);

            if (typeof persona_string !== 'string' || persona_string === '') {
                return reject('ERROR');
            }

            resolve(persona_string);
        });
    }//Fin Funcion getInfo
}); //FIN LOAD