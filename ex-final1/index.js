async function realizarBusca() {
    const usuario = document.getElementById("usuario").value;
    const mensagem = document.getElementById("mensagemErro");
    const listaUsuarios = document.getElementById("respostas");

    listaUsuarios.innerHTML = '';
    mensagem.textContent = '';

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${usuario}`);
        const data = await response.json();

        if (data.items.length === 0) {
            mensagem.textContent = 'Não foram encontrados usuários para esta pesquisa';
        } else {
            data.items.forEach(user => {
                const userItem = document.createElement('li');
                const userLink = document.createElement('a');
                userLink.href = user.html_url;
                userLink.target = '_blank';
                userLink.textContent = user.login;
                userItem.appendChild(userLink);
                listaUsuarios.appendChild(userItem);
            });
        }
    } catch (error) {
        mensagem.textContent = 'Erro ao buscar usuários. Tente novamente mais tarde.';
    }
}
