/* Mostrar - Esconder a caixa de texto */
const monstrarEsconderTexto = (textoSobreposicao, textoSenha, caixaTextoIcone) => {
    const sobreposicao = document.getElementById(textoSobreposicao),
        texto = document.getElementById(textoSenha),
        icone = document.getElementById(caixaTextoIcone)

    icone.addEventListener('click', () => {
        // Mudar o tipo do  input de password para texto
        if (texto.type === 'password') {
            // Mudar para texto
            texto.type = 'text'

            // Mudar o icone
            icone.classList.add('bx-show')
        } else {
            // Mudar para tipo senha
            texto.type = 'password'

            // Remover o icone
            icone.classList.remove('bx-show')
        }

        // Alternar a sobreposicao
        sobreposicao.classList.toggle('sobreposicao-content')
    })
}

monstrarEsconderTexto('caixa-texto-sobreposicao', 'caixa-texto-senha', 'caixa-texto-icone')