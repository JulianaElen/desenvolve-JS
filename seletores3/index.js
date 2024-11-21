let tarefas = [];

function adicionarTarefa() {
    const descricaoInput = document.getElementById("descricaoTarefa");
    const descricao = descricaoInput.value.trim();

    tarefas.push({ descricao: descricao, status: false });

    descricaoInput.value = "";

    atualizarLista();
}

function atualizarLista() {
    const listaTarefasDiv = document.getElementById("listaTarefas");
    listaTarefasDiv.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const tarefaDiv = document.createElement("div");
        tarefaDiv.className = "tarefa";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.addEventListener("change", () => {
            tarefas[index].status = checkbox.checked;
            atualizarLista();
        });

        const label = document.createElement("label");
        label.className = tarefa.status ? "concluida" : "nao-concluida";
        label.textContent = tarefa.descricao;

        tarefaDiv.appendChild(checkbox);
        tarefaDiv.appendChild(label);

        listaTarefasDiv.appendChild(tarefaDiv);
    });
}
