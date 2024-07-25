
console.log('hola mundo')
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

function obtenerTexto(){
    return document.querySelector('#encriptador').value
}

function encriptarTexto(){
    let textoOriginal = obtenerTexto();
}

function validarCadena(cadena) {
    // Expresión regular para validar letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;
    
    // Testeamos la cadena contra la expresión regular
    return regex.test(cadena);
}

// Ejemplos de uso
console.log(validarCadena("hola mundo"));  // true
console.log(validarCadena("hola Mundo"));  // false (contiene una letra mayúscula)
console.log(validarCadena("hola_mundo"));  // false (contiene un carácter especial)
console.log(validarCadena("hola123"));     // false (contiene números)
console.log(validarCadena("hola mundo!")); // false (contiene un carácter especial)



console.log(encriptarTexto())