function obtenerTexto() {
    return document.querySelector('#encriptador').value
}

function encriptarTexto() {
    let textoOriginal = obtenerTexto();
    let textoEncriptado = validarTexto(textoOriginal)
    mostrarResultado(textoEncriptado)
}

function descodificarTexto() {
    let textoEncriptado = obtenerTexto();
    let textoNormal = decencriptarTexto(textoEncriptado);
    mostrarResultado(textoNormal);
}


function validarTexto(texto) {
    // Expresión regular para validar letras minúsculas y espacios

    if (/^[a-z\s]+$/.test(texto)) {
        /* el método .replace() en JavaScript se utiliza para buscar una cadena
          o una expresión regular en un string y reemplazarla con otra cadena. */
        let vocalesConvertidas = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return vocalesConvertidas
    } else {
        return "El texto debe contener solo letras en minusculas y sin caracteres especiales"
    }
}

function decencriptarTexto(texto) {

    if (/^[a-z\s]+$/.test(texto)) {

        let vocalesConvertidas = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return vocalesConvertidas
    } else {
        return "El texto debe contener solo letras en minusculas y sin caracteres especiales"
    }
}

function mostrarResultado(resultado) {
    let mensaje = document.getElementById('mensaje')
    mensaje.value = resultado
}

function copiar(){
    let textoCopiado = document.getElementById('mensaje').value
    //navigator: es un metodo del navegador que copia el texto 
    navigator.clipboard.writeText(textoCopiado).then(function(){
        alert(`texto copiado es: ${textoCopiado} `)
        
    }).catch(function(err){
        alert(`Error al copiar el texto: ${err}`)
    })
    
}


// Abrir Modales

function abrirModalEncriptar() {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    encriptarTexto()
}
function abrirModalDecencriptar() {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    descodificarTexto()
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function (event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     closeModal();
// });
closeModal()