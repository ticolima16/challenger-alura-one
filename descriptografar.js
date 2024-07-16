let texto = document.querySelector('#texto');
let criptografarBtn = document.querySelector('.criptografar');
let descriptografarBtn = document.querySelector('.descriptografar');
let copiar_btn = document.querySelector('.copiar_btn');
let resultado = document.querySelector('.resultado_des');
let titulo = document.querySelector('.container__resultado > h2');

function validarTexto(texto) {
        let regex = /^[a-z ]+$/;
        return regex.test(texto);
}

function criptografar(texto) {
<<<<<<< HEAD
=======
    if (texto !== " ") {
>>>>>>> fbdb75e (editando JS)
        texto = texto.replace(/a/g, 'ai')
                     .replace(/e/g, 'enter')
                     .replace(/i/g, 'imes')
                     .replace(/o/g, 'ober')
                     .replace(/u/g, 'ufat');
        copiar_btn.style.display = "block"; 
        titulo.textContent = "Criptografado";        
        return texto;
}

function descriptografar(texto) {
<<<<<<< HEAD
=======
    if (texto !== " ") {
>>>>>>> fbdb75e (editando JS)
        texto = texto.replace(/ufat/g, 'u')
                     .replace(/ober/g, 'o')
                     .replace(/imes/g, 'i')
                     .replace(/enter/g, 'e')
                     .replace(/ai/g, 'a');
        copiar_btn.style.display = "block";
        titulo.textContent = "Descriptografado";     
        return texto;
}

criptografarBtn.addEventListener('click', function() {
    let textoEntrada = texto.value;
    if (validarTexto(textoEntrada)) {
        let textoCriptografado = criptografar(textoEntrada);
        resultado.textContent = textoCriptografado;
    } else {
<<<<<<< HEAD
        if (textoEntrada == ""){
            titulo.textContent = "<--- Coloque um texto";
            resultado.textContent = "Nenhum texto encontrado";
            copiar_btn.style.display = "none";
        }else{
            resultado.textContent = "Texto inválido.";
            copiar_btn.style.display = "none";
            titulo.textContent = "Siga as REGRAS!"; 
        }
=======
        resultado.textContent = "Texto inválido. Use apenas letras minúsculas e espaços.";
        copiar_btn.style.display = "none";
        titulo.textContent = "Siga as REGRAS!"; 
>>>>>>> fbdb75e (editando JS)
    }
});

descriptografarBtn.addEventListener('click', function() {
    let textoEntrada = texto.value;
    if (validarTexto(textoEntrada)) {
        let textoDescriptografado = descriptografar(textoEntrada);
        resultado.textContent = textoDescriptografado;
    } else {
<<<<<<< HEAD
            if (textoEntrada == ""){
                titulo.textContent = "<--- Coloque um texto";
                resultado.textContent = "Nenhum texto encontrado";
                copiar_btn.style.display = "none";
            }else{
                resultado.textContent = "Texto inválido.";
                copiar_btn.style.display = "none";
                titulo.textContent = "Siga as REGRAS!"; 
            }
=======
        resultado.textContent = "Texto inválido. Use apenas letras minúsculas e espaços.";
        copiar_btn.style.display = "none";
        titulo.textContent = "Siga as REGRAS!"; 
>>>>>>> fbdb75e (editando JS)
    }
});

copiar_btn.addEventListener('click', function() {
    let textoParaCopiar = resultado.textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert('Texto copiado para a área de transferência');
    }).catch(function(error) {
        console.error('Erro ao copiar texto: ', error);
    });
});
