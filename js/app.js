document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar los elem,entos de la intertfaz
    const inputEmail = document.querySelector('#email');
    const inputConfirmarEmail = document.querySelector('#confirmarEmail')
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario')

    inputEmail.addEventListener('blur', validar);
    inputConfirmarEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

  function validar(evt) {
    if(evt.target.value.trim() === "") {
      mostrarAlerta();
    } else {
      console.log('Hay algo');
    }

  }

  function mostrarAlerta() {
    // Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = 'Todos los campos son obligatorios';
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'font-bold', 'text-center');

    // Inyectar el error al formulario
    formulario.appendChild(error);
  }

});