function mudaTitulo(novoTitulo) {
    const titulo = document.getElementById('tituloPrincipal')
    titulo.innerText = novoTitulo
}

setTimeout(() => mudaTitulo('Novo título para o exercício'), 2000)

function mudaCorLista(novoEstilo) {
    const lista = document.getElementsByTagName('li');
    for (let item of lista) {
        item.style.color = novoEstilo;
    }
}

setTimeout(() => mudaCorLista("#FF0F0F"), 2000);

function addClasse(novaClasse) {
    const paragrafos = document.getElementsByTagName("p")
    for (let item of paragrafos){
        item.classList.add(novaClasse)
    }
}

setTimeout(() => addClasse("paragrafos"), 2000);

function alteraBotao(novoTexto){
    const botao = document.getElementById("botao")
    botao.innerText = novoTexto
}

setTimeout(() => alteraBotao("Olha o botão"), 2000);