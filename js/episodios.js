var numPaginaSpan = document.getElementById("numero");

var spanText = parseInt(numPaginaSpan.textContent);

var numMaximo = null;

pegarNumMaximoFetch();

chamarApi(spanText);

var divLista = document.getElementById("lista");

function pegarNumMaximoFetch() {
    fetch("https://rickandmortyapi.com/api/episode")
        .then(result => result.json())
        .then(json => atribuirValorNumMaximo(json));
}

function chamarApi(numPagina) {
    fetch(`https://rickandmortyapi.com/api/episode?page=${numPagina}`)
        .then(result => result.json())
        .then(json => consumirLista(json));
}

function atribuirValorNumMaximo(json) {
    numMaximo = json.info.pages;
}

function consumirLista(json) {

    json.results.forEach(objeto => {

        //para cada objeto, vai ser criada uma div com class="item"
        var div = document.createElement("div");
        div.classList.add("item");

        //para cada item irá ser criada um h2 com class="h2", contendo o nome do personagem (name)
        var h2 = document.createElement("h2");
        h2.classList.add("h2");
        h2.textContent = objeto.name;

        var data = document.createElement("p");
        data.classList.add("data");
        data.textContent = "Data:  " + objeto.air_date;

        //para cada objeto será criado um parágrafo com class="origem" + origem (origin.name)
        var ep = document.createElement("p");
        ep.classList.add("ep");
        ep.textContent = "Episódio:  " + objeto.episode;

        lista.append(div);
        div.append(h2);
        div.append(data);
        div.append(ep);
    }
    )
};

function diminuir() {
    if (spanText > 1) {
        spanText--;
        numPaginaSpan.textContent = spanText;
        limparPagina();
        chamarApi(spanText);
    }

}

function aumentar() {
    console.log(numMaximo);

    if (spanText < numMaximo) {
        spanText++;
        numPaginaSpan.textContent = spanText;
        limparPagina();
        chamarApi(spanText);
    }
}

function limparPagina() {
    var itens = document.getElementsByClassName("item");
    
    // Converte a coleção HTML para um array para facilitar a iteração
    var itensArray = Array.from(itens);

    // Itera sobre cada elemento e remove-os do DOM
    itensArray.forEach(item => {
        item.remove();
    });

}