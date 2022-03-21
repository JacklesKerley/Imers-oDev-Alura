var rafa = {
    nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0
}//ao utilizar chaves queremos informar um objeto

var paulo = {
    nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0
}
var jack = {
    nome: "Jack", vitorias: 1, empates: 1, derrotas: 2, pontos: 0
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates);
    return pontos
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
jack.pontos = calculaPontos(jack);

var jogadores = [rafa, paulo, jack];

function exibeJogadoresNaTela(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>" //quando utilizar += siginifica o elemento + o Elemento ex. elemento = elemento +"<...>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>"
        elemento += "</tr>" //estrutura do HTML
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    // jogador.pontos = calculaPontos(jogador), caso queira colocar valores em derrota é necessário realizar o calculo
    exibeJogadoresNaTela(jogadores)
}

{/* <tr>
<td>Paulo</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vitória</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr> */} //estrutura html