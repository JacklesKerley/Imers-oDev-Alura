// function adicionarFilme() {
//     var nomeFilme = document.getElementById("nomeFilme").value;
//     var filmeFavorito = document.getElementById("filme").value;
//         if (filmeFavorito.endsWith(".jpg")) {
//             listarFilmesNaTela(filmeFavorito)
//         } 
//         else {
//             console.error("Endereço de filme inválido");
//         }
//     document.getElementById("filme").value = ""
// }

// function listarFilmesNaTela(outraVariavel) {
//     var elementoFilmeFavorito = "<img src=" + outraVariavel + ">";
//     var elementoListaFilmes = document.getElementById("listaFilmes");
//     elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
// }

// function adicionarFilme() {
//     var nomeFilme = document.getElementById("nomeFilme").value;
//     var filmeFavorito = document.getElementById("filme").value;

//     var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    
//     var elementoListaFilmes = document.getElementById("listaFilmes");
//     var elementoNomeFilmes = document.getElementById("idFilme");

//     elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
//     elementoNomeFilmes.innerHTML = elementoNomeFilmes.innerHTML + nomeFilme;

// }

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
    } 
    else {
        console.error("Endereço de filme inválido");
    }
    
    document.getElementById("filme").value = ""
    document.getElementById("nomeFilme").value = ""
}

function listarFilmesNaTela(outraVariavel) {
    var nomeFilme = document.getElementById("nomeFilme").value;

    var elementoFilmeFavorito = "<div class='capasFilme'><img src=" + outraVariavel + ">" + "<h2>" + nomeFilme + "</h2></div>";
    
    var elementoListaFilmes = document.getElementById("listaFilmes");
    
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}