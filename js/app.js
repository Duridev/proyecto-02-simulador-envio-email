document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elem,entos de la intertfaz
    const inputEmail = document.querySelector('#email');
    const inputConfirmarEmail = document.querySelector('#confirmarEmail')
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    inputEmail.addEventListener('blur', validar);
    inputConfirmarEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

  function validar(evt) {
    console.log(evt.target.value);

  }


});