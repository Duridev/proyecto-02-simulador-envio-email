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
      mostrarAlerta(`El campo ${evt.target.id} es obligatorio`, evt.target.parentElement);
      return;
    }
    /*if(evt.target.id === 'email' && !validarEmail(
      evt.target.value)) {
        mostrarAlerta('El email no es valido', evt.target.parent
        Element);
        return;
        }*/
    limpiarAlerta(evt.target.parentElement);
  }

  function mostrarAlerta(mensaje, referencia) {
    // Comprueba si ya existe la alerta
    limpiarAlerta(referencia);

    // Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'font-bold', 'text-center', 'alerta');

    // Inyectar el error al formulario
    referencia.appendChild(error);
  }

  // Limpiar mensaje de alerta
  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.alerta');
    if(alerta) {
      alerta.remove();
      }

  }

});