// Exercício 3 - GITHUB
// Crie um sistema simples para gerenciar o estoque de uma livraria. O sistema deve permitir adicionar livros ao estoque, remover livros, atualizar a quantidade de livros e listar todos os livros disponíveis.

// Passos:
// 1 - Defina um array de objetos para armazenar os livros no estoque.
//    * Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.
const livrosNoEstoque = [
    {
        titulo: "A Montanha da água lilás",
        autor: "Pepetela",
        quantidade: 5
    },
    {
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        quantidade: 10
    },
    {
        titulo: "O mapa de vidro",
        autor: " S.E. Grove",
        quantidade: 3
    },
    {
        titulo: "O Cavaleiro sem Nome",
        autor: "Christian de Montella",
        quantidade: 6
    }
]

// 2 - Crie funções para gerenciar o estoque:

//   * adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.
function adicionarLivro(tituloNovo, autorNovo, qtdNovo) {
    const livroExistente = livrosNoEstoque.find(livro => livro.titulo === tituloNovo);

    console.log("Inserindo um novo livro:")

    if (livroExistente) {
        console.log("Livro já adicionado!");
    } else {
        // Caso não exista, adiciona o novo livro
        const novoLivro = {
            titulo: tituloNovo,
            autor: autorNovo,
            quantidade: qtdNovo
        };
        livrosNoEstoque.push(novoLivro);
        console.log(livrosNoEstoque);
    }
}
//   * removerLivro(titulo) - Remove um livro do estoque pelo título.
function removerLivro(titulo){
    const livroExistente = livrosNoEstoque.find(livro => livro.titulo === titulo);

    console.log("Removendo um livro:")

    if (livroExistente) {
        const indice = livrosNoEstoque.findIndex(livro => livro.titulo === titulo);
        livrosNoEstoque.splice(indice, 1);
        console.log(livrosNoEstoque)
    } else {
        console.log("Livro não existe!");
    }
}
//   * atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.
function atualizarQuantidade(titulo, novaQuantidade){
    const livroExistente = livrosNoEstoque.find(livro => livro.titulo === titulo);

    console.log("Mudando a quatidade de livro:")

    if (livroExistente) {
        const indice = livrosNoEstoque.findIndex(livro => livro.titulo === titulo)
        livrosNoEstoque[indice].quantidade = novaQuantidade;
        console.log(livrosNoEstoque)
    } else {
        console.log("O livro não existe.")
    }
}
//   * listarLivros() - Lista todos os livros no estoque.
function listarLivros(){
    console.log("Lista de livros no estoque: ")
    for(i = 0; i < livrosNoEstoque.length; i++){
        console.log(livrosNoEstoque[i].titulo)
    }
}
// 3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.

// 4 - Use laços de repetição para iterar sobre o array de livros quando necessário.

adicionarLivro("A Morte de Ivan Ilitch","Liev Tolstói",9)

adicionarLivro("A Morte de Ivan Ilitch","Liev Tolstói",9)

removerLivro("A Morte de Ivan Ilitch")

removerLivro("A Morte de Ivan Ilitch")

atualizarQuantidade("O Cavaleiro sem Nome", 11)

atualizarQuantidade("O Cavaleiro", 11)

listarLivros()