let pessoasQueCurtiram = [];

function curtir() {
    const nome = document.getElementById("nome").value.trim();
    // Verifica se o nome já esta na lista
    if (nome && !pessoasQueCurtiram.includes(nome)) {
        pessoasQueCurtiram.push(nome);
    }
    atListaCurtidas();
}

function atListaCurtidas() {
    const paragrafo = document.getElementById("listaCurtidas");

    if (pessoasQueCurtiram.length === 0) {
        paragrafo.textContent = "Ninguém curtiu";
    } else if (pessoasQueCurtiram.length === 1) {
        paragrafo.textContent = `${pessoasQueCurtiram[0]} curtiu`;
    } else if (pessoasQueCurtiram.length === 2) {
        paragrafo.textContent = `${pessoasQueCurtiram[0]} e ${pessoasQueCurtiram[1]} curtiram`;
    } else {
        paragrafo.textContent = `${pessoasQueCurtiram[0]}, ${pessoasQueCurtiram[1]} e mais ${pessoasQueCurtiram.length - 2} pessoas curtiram`;
    }
}