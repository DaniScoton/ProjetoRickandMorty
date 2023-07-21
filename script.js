fetch("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(json => consumirLista(json));

    
function consumirLista(json) {

    console.log(json);
    var lista = document.getElementById("lista");

    json.results.forEach(objeto => {

        //para cada objeto, vai ser criada uma div com class="item"
        var div = document.createElement("div");
        div.classList.add("item");

        //para cada item será adicionada a foto do personagem com class="imagem" (image)
        var img = document.createElement("img");
        img.class = "imagem";
        img.src = objeto.image;
        
        //para cada item irá ser criada um h2 com class="h2", contendo o nome do personagem (name)
        var h2 = document.createElement("h2");
        h2.classList.add("h2");
        h2.textContent = objeto.name;

        //para cada objeto será criado um parágrafo com class="status", contendo • + status (status) + espécie (species)
        var bola = document.createElement("p");
        bola.classList.add("bola");
        bola.textContent = "•";

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

        div.append(h2);
        div.append(bola);
        div.append(status);
        div.append(p1);
        div.append(p2);
        div.append(img);
        lista.append(div);
    }
    )
};

