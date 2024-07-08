//Función para encriptación de texto
function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.match(/[^a-z ]/)) {
        alert('El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas y espacios.');
        return;
    }
    const outputText = inputText
        .split('')
        .map(char => {
            if (char === ' ') {
                return char;
            }
            return String.fromCharCode(((char.charCodeAt(0) - 97 + 3) % 26) + 97);
        })
        .join('');
    
    updateOutput(outputText);
}

//Función para desencriptar texto
function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText
        .split('')
        .map(char => {
            if (char.match(/[a-z]/)) {
                return String.fromCharCode(((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97);
            }
            return char;
        })
        .join('');
    
    updateOutput(outputText);
}

//Función para copiar y dar alerta de que el elemento fue copiado
function copyText() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => alert('El texto se ha copiado exitosamente!'))
        .catch(err => console.error('Error al copiar el texto: ', err));
}

//Función actualizar la salida de texto
function updateOutput(text) {
    const outputDiv = document.getElementById('outputText');
    outputDiv.innerHTML = `<p>${text}</p>`;
    const sinTexto = document.getElementById('sinTexto');
    if (sinTexto) {
        sinTexto.style.display = 'none';
    }
}