const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const copiar = document.querySelector(".copiar");
const p = document.querySelector(".p");
const span = document.querySelector(".span");


//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.classList.remove('ocultar');
    p.classList.add('ocultar');
    span.classList.add('ocultar');

}


function encriptar(stringEncriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){ // Corregido
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);

        }

    }
    return stringEncriptada;
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){ // Corregido
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);

        }

    }
    return stringDesencriptada;
}

function copiarTexto() {
    // Seleccionamos el contenido del textarea
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiamos el texto al portapapeles
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((err) => {
            console.error("Error al copiar el texto: ", err);
        });
}

