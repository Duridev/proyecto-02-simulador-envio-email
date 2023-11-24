document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elem,entos de la intertfaz
    const inputEmail = document.querySelector('#email');
    const inputConfirmarEmail = document.querySelector('#confirmarEmail')
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    inputEmail.addEventListener('blur', function(evt) {
        console.log(evt.target.value);
    });

    inputConfirmarEmail.addEventListener('blur', function(evt) {
        console.log(evt.target.value);
    });

    inputAsunto.addEventListener('blur', function(evt) {
        console.log(evt.target.value);
    });

    inputMensaje.addEventListener('blur', function(evt) {
        console.log(evt.target.value);
    });

    

});