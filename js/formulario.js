let formulario = document.querySelector("[data-formulario]");

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validarFormulario()) {
        console.log("El envío del formulario es válido.");
        resetearFormulario();
    }
});

function resetearFormulario() {
    // Seleccionar los inputs dentro de la función y los limpiar para resetear el formulario luego de enviar los datos de los input
    let nombreInput = document.querySelector("[data-nombre]");
    let asuntoInput = document.querySelector("[data-asunto]");
    let emailInput = document.querySelector("[data-email]");
    let mensajeInput = document.querySelector("[data-mensaje]");

    
    nombreInput.value = "";
    asuntoInput.value = "";
    emailInput.value = "";
    mensajeInput.value = ""; 
}

/* Función para validar el formulario con los inputs nombre, asunto, email y mensaje */
function validarFormulario() {
    let nombreInput = document.querySelector("[data-nombre]");
    let asuntoInput = document.querySelector("[data-asunto]");
    let emailInput = document.querySelector("[data-email]");
    let mensajeInput = document.querySelector("[data-mensaje]");
    
    let esValido = true;

    limpiarErrores();

    /* Comprueba que los input cumplan con los requisitos, si no, se coloca un mensaje de error en la parte inferior de los mismos */
    if (nombreInput.value.trim() === '') {
        mostrarError(nombreInput, 'El campo nombre no puede estar vacío');
        esValido = false;
    } else if (nombreInput.value.length > 50) {
        mostrarError(nombreInput, 'El campo no puede contener más de 50 caracteres');
        esValido = false;
    }

    if (asuntoInput.value.trim() === '') {
        mostrarError(asuntoInput, 'El campo asunto no puede estar vacío');
        esValido = false;
    } else if (asuntoInput.value.length > 50) {
        mostrarError(asuntoInput, 'El campo no puede contener más de 50 caracteres');
        esValido = false;
    }

    if (emailInput.value.trim() === '') {
        mostrarError(emailInput, 'El campo email no puede estar vacío');
        esValido = false;
    }

    if (mensajeInput.value.trim() === '') {
        mostrarError(mensajeInput, 'El campo mensaje no puede estar vacío');
        esValido = false;
    }

    return esValido; 
}

/* Muestra el error debajo del input */
function mostrarError(input, mensaje) {
    const errorMensaje = document.createElement("span");
    errorMensaje.className = "error__mensaje"; 
    errorMensaje.textContent = mensaje;

    limpiarErroresPorInput(input);
    input.parentNode.appendChild(errorMensaje);
}

/* Limpia los errores una vez que han sido solucionados */
function limpiarErrores() {
    const mensajesError = document.querySelectorAll('.error__mensaje');
    mensajesError.forEach(m => m.remove());
}

function limpiarErroresPorInput(input) {
    const mensajesErrorPrevios = input.parentNode.querySelectorAll('.error__mensaje');
    mensajesErrorPrevios.forEach(m => m.remove());
}
