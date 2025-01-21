const posts = []

const novoPost = document.getElementById("textoNovoPost")
const listaDePosts = document.getElementById("listaPosts")

async function postar() {
    const texto = novoPost.value.trim()
    const nomeUsuario = "Galatico"
    const avatar =
        "https://img.freepik.com/fotos-premium/um-gato-branco-sentado-na-nuvem-de-cor-neon-no-ceu-foto-gerada-pela-ia_1097889-693.jpg?semt=ais_hybrid";
    const data = new Date().toLocaleDateString()

    const imagemGato = await fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((data) => data[0]?.url || "https://via.placeholder.com/150")


    const postUnitario = {
        nomeUsuario,
        avatar,
        data,
        texto,
        imagemGato,
        likes: 0,
    }

    posts.unshift(postUnitario)

    renderizarPosts()

    novoPost.value = ""
}

function renderizarPosts() {
    listaDePosts.innerHTML = ""

    posts.forEach((post, index) => {
        const postElement = document.createElement("li")
        postElement.classList.add("post")

        postElement.innerHTML = `
            <div class="postHeader">
                <img src="${post.avatar}" alt="Avatar" class="avatar">
                <div>
                    <strong>${post.nomeUsuario}</strong>
                    <br>
                    <small>${post.data}</small>
                </div>
            </div>
            <div class="postContent">${post.texto}</div>
            <div class="postImage">
                <img src="${post.imagemGato}" alt="Imagem de gatinho fofo">
            </div>
            <button class="likeButton"  data-index="${index}">Curtir</button>
            <span class="likesCount">${post.likes} likes</span>
        `

        listaDePosts.appendChild(postElement);
    })

    const likeButtons = document.querySelectorAll(".likeButton")
    likeButtons.forEach((button) =>
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index
            posts[index].likes += 1
            renderizarPosts()
        })
    )
}
