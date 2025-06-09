const inputElemento = document.getElementById('text-input')
const botaoElemento = document.getElementById('check-btn')
const resultadoElemento = document.getElementById('result')

function limpar(str) {
    return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
}

function verificar() {
    const original = inputElemento.value
    if (original.trim() === '') {
        alert('Please input a value.');
        return;
    }
    const limpo = limpar(original)
    const reverso = limpo.split('').reverse().join('')

    if (limpo === reverso) {
        resultadoElemento.textContent = `"${original}" is a palindrome.`
    } else {
        resultadoElemento.textContent = `"${original}" is not a palindrome.`
    }
}