let texto = document.querySelector('#texto');
let criptografarBtn = document.querySelector('.criptografar');
let descriptografarBtn = document.querySelector('.descriptografar');
let copiar_btn = document.querySelector('.copiar_btn');
let resultado = document.querySelector('.resultado_des');
let titulo = document.querySelector('.container__resultado > h2');

function criptografar(texto) {
    if (texto !== "") {
        texto = texto.replace(/a/g, 'ai')
                     .replace(/e/g, 'enter')
                     .replace(/i/g, 'imes')
                     .replace(/o/g, 'ober')
                     .replace(/u/g, 'ufat');
        copiar_btn.style="display:block"; 
        titulo.textContent = "Criptografado";        
        return texto;
    }
    return 'Nenhum texto encontrado';
}

function descriptografar(texto) {
    if (texto !== "") {
        texto = texto.replace(/ufat/g, 'u')
                     .replace(/ober/g, 'o')
                     .replace(/imes/g, 'i')
                     .replace(/enter/g, 'e')
                     .replace(/ai/g, 'a');
        copiar_btn.style="display:block";
        titulo.textContent = "Descriptografado";     
        return texto;
    }
    return 'Nenhum texto encontrado';
}

criptografarBtn.addEventListener('click', function() {
    let textoCriptografado = criptografar(texto.value);
    resultado.textContent = textoCriptografado;
});

descriptografarBtn.addEventListener('click', function() {
    let textoDescriptografado = descriptografar(texto.value);
    resultado.textContent = textoDescriptografado;
});

copiar_btn.addEventListener('click', function() {
    let textoParaCopiar = resultado.textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert('Texto copiado para a área de transferência');
    }).catch(function(error) {
        console.error('Erro ao copiar texto: ', error);
    });
});
