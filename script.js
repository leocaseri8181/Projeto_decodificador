document.addEventListener("DOMContentLoaded", function() {
    const criptografarBtn = document.getElementById('criptografar');
    const descriptografarBtn = document.getElementById('descriptografar');
    const copiarBtn = document.getElementById('copiar');
    const textoArea = document.getElementById('texto');
    const resultadoTexto = document.getElementById('resultado-texto');
    const imagemMensagem = document.getElementById('imagem-mensagem');

    function criptografarTexto(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }
    
    function descriptografarTexto(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
    
    function validarTexto(texto) {
        const regex = /^[a-z\s]*$/;
        return regex.test(texto);
    }

    function atualizarResultado(texto) {
        if (texto) {
            resultadoTexto.textContent = texto;
            imagemMensagem.classList.add('oculto');
        } else {
            resultadoTexto.textContent = "Nenhuma mensagem encontrada";
            imagemMensagem.classList.remove('oculto');
        }
    }

    criptografarBtn.addEventListener('click', function() {
        const texto = textoArea.value.trim();
        if (validarTexto(texto)) {
            const textoCriptografado = criptografarTexto(texto);
            atualizarResultado(textoCriptografado);
        } else {
            alert("Por favor, insira apenas letras minúsculas e sem acento.");
        }
    });

    descriptografarBtn.addEventListener('click', function() {
        const texto = textoArea.value.trim();
        if (validarTexto(texto)) {
            const textoDescriptografado = descriptografarTexto(texto);
            atualizarResultado(textoDescriptografado);
        } else {
            alert("Por favor, insira apenas letras minúsculas e sem acento.");
        }
    });

    copiarBtn.addEventListener('click', function() {
        const textoParaCopiar = resultadoTexto.textContent;
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                alert("Texto copiado para a área de transferência.");
            })
            .catch(err => {
                alert("Falha ao copiar o texto: " + err);
            });
    });
});

