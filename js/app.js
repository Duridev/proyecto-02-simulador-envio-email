document.addEventListener('DOMContentLoaded', function() {

  const email = {
    email: '',
    confirmacion: '',
    asunto: '',
    mensaje: ''
  }

    // Seleccionar los elem,entos de la intertfaz
    const inputEmail = document.querySelector('#email');
    const inputConfirmarEmail = document.querySelector('#confirmarEmail')
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');


    //Asignar Eventos
    inputEmail.addEventListener('input', validar);
    inputConfirmarEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click', function(e) {
      e.preventDefault();

      // Reiniciar el objeto
      email.email = '';
      email.confirmacion = '';
      email.asunto = '';
      email.mensaje = '';

      formulario.reset();
      comprobarEmail();
    })

  function validar(e) {
    if(e.target.value.trim() === "") {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === 'confirmarEmail' && inputConfirmarEmail.value !== inputEmail.value) {
      mostrarAlerta('Los campos de email no coinciden', e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if(e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarAlerta('El email no es valido', e.target.parentElement)
      email[e.target.name] = "";
      comprobarEmail();     
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // Asignar Valores
    email[e.target.name] = e.target.value.trim().toLowerCase();

    // Comprobar e; objeto de email
    comprobarEmail();

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

  function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if(Object.values(email).includes('')) {
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;
      return
    }
      btnSubmit.classList.remove('opacity-50');
      btnSubmit.disabled = fainput
  }

});