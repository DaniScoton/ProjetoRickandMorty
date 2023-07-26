var numPaginaSpan = document.getElementById("numero");

var spanText = parseInt(numPaginaSpan.textContent);

var numMaximo = null;

pegarNumMaximoFetch();

chamarApi(spanText);

function pegarNumMaximoFetch() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(result => result.json())
        .then(json => atribuirValorNumMaximo(json));
}

function chamarApi(numPagina) {
    fetch(`https://rickandmortyapi.com/api/character?page=${numPagina}`)
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

        var caixaTexto = document.createElement("div");
        div.classList.add("caixaTexto");

        //para cada item será adicionada a foto do personagem com class="imagem" (image)
        var img = document.createElement("img");
        img.classList.add ("imagem");
        img.src = objeto.image;

        //para cada item irá ser criada um h2 com class="h2", contendo o nome do personagem (name)
        var h2 = document.createElement("h2");
        h2.classList.add("h2");
        h2.textContent = objeto.name;

        var div2 = document.createElement("div");
        div2.classList.add("div2");

        //para cada objeto será criado um parágrafo com class="status", contendo • + status (status) + espécie (species)
        var bola = document.createElement("p");
        bola.classList.add("bola");
        bola.textContent = "•";

        if (objeto.status === "Alive") {
            bola.classList.add('bola-verde');

        } else if (objeto.status === "Dead"){
            bola.classList.add('bola-vermelha');

        } else{
            bola.classList.add('bola-roxa');
        }

        var status = document.createElement("p");
        status.classList.add("status");
        status.textContent = objeto.status + "-" + objeto.species;

        //para cada objeto será criado um parágrafo com class="origem" + origem (origin.name)
        var p1 = document.createElement("p");
        p1.classList.add("origem");
        p1.textContent = "Origem: " + objeto.origin.name;

        //para cada objeto será criado um parágrafo com class="ultima" + ultima localização (location)
        var p2 = document.createElement("p");
        p2.classList.add("ultimaA");
        p2.textContent = "Visto pela última vez: " + objeto.location.name;

        lista.append(div);
        div.append(img);
        div.append(caixaTexto);
        caixaTexto.append(h2);
        caixaTexto.append(div2);
        div2.append(bola);
        div2.append(status);
        caixaTexto.append(p1);
        caixaTexto.append(p2);

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
