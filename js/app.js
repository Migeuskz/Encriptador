function obtenerTexto() {
    return document.querySelector('#encriptador').value.trim().toLowerCase();
}

function encriptarTexto() {
    let textoOriginal = obtenerTexto();
    let textoEncriptado = conventirTexto(textoOriginal);
    mostrarResultado(textoEncriptado);
}

function descodificarTexto() {
    let textoEncriptado = obtenerTexto();
    let textoNormal = desencriptarTexto(textoEncriptado);
    mostrarResultado(textoNormal);
}

function conventirTexto(texto) {
    // empleamos una expresion regular para verificar una cadena de texto "/^[a-z]+$"
    if (/^[a-z]+$/.test(texto)) {
        /* el método .replace() en JavaScript se utiliza para buscar una cadena
          o una expresión regular en un string y reemplazarla con otra cadena. */
        let textoConvertido = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoConvertido;
    } else {
        return "El texto debe contener solo letras en minusculas y sin caracteres especiales"
    }

}

function desencriptarTexto(texto) {
    // empleamos una expresion regular para verificar una cadena de texto "/^[a-z]+$"
    if (/^[a-z]+$/.test(texto)) {
        /* el método .replace() en JavaScript se utiliza para buscar una cadena
          o una expresión regular en un string y reemplazarla con otra cadena. */
        let textoConvertido = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoConvertido;
    } else {
        return "El texto debe contener solo letras en minusculas y sin caracteres especiales"
    }

}

function mostrarResultado(resultado) {
    let mensajeTextarea = document.querySelector('#mensaje');
    mensajeTextarea.value = resultado;
}

// let textoOriginal = "hola"


// let textoOriginal = obtenerTexto()
// let textoConvertido = conventirTexto(textoOriginal)
// let textoConvertido = conventirTexto(obtenerTexto)
// let textoEncriptado = textoConvertido
// let textoNormal = desencriptarTexto(textoEncriptado)

console.log('lol',obtenerTexto())
// console.log(descodificarTexto(texto))

function abrirModal(){
    let modal = document.getElementById('modal')
    modal.style.display = 'block'
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event){
    let modal = document.getElementById('modal')
    if(event.target == modal){
        modal.style.display = 'none'
    }
}