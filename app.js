let listaDeNomes = [];

function adicionarNomes(){
    // recebe os valores do input
    let nomes = document.getElementById("amigo");
    let amigo = nomes.value.trim();

    // Valida a entrada
    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }else{
        listaDeNomes.push(amigo)
        console.log(`Lista de amigos: ${listaDeNomes}`);

        nomes.value = "";
        visualizarLista();
    }

}

function visualizarLista(){
    let lista = document.getElementById("listarAmigos");
    lista.innerHTML = "";

    //imprime os nomes da lista
    for (let nome of listaDeNomes) {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    }
}

function sorteioAleatorio(){
    //validação dos nomes da lista
    if (listaDeNomes.length === 0) {
        alert("Adicione algum nome antes de sortear.");
        return;
    }else{
        let escolheNome = Math.floor(Math.random() * listaDeNomes.length);
        let amigoSorteado = listaDeNomes[escolheNome];
        //Exibe o nome do Sorteado
        document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

    }
}