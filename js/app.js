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



let textoOriginal = "gato"
let textoConvertido = conventirTexto(textoOriginal)
let textoEncriptado = textoConvertido
let textoNormal = desencriptarTexto(textoEncriptado)

console.log(textoConvertido)
console.log(textoNormal)