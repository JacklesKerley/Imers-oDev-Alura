//var listaFilmes = ["Yesterday", "A Chegada", "Escola do Rock"]
// elemento         1            2           3
//índice            0            1           2           

//adicionando novos elementos
// listaFilmes.push("Harry Potter")

//   valor inicial.  condição.   expressão final
//for (var indice = 0; indice < 4; indice++) {
//    document.write("<p>" + listaFilmes[indice] + "</p>")
//}

//document.write("<p>" + listaFilmes[0] + "</p>")
//document.write("<p>" + listaFilmes[1] + "</p>")
//document.write("<p>" + listaFilmes[2] + "</p>")
//document.write("<p>" + listaFilmes[3] + "</p>")

//var filme1 = "Yesterday"
//var filme2 = "A chegada"
//var filme3 = "Escola do Rock"

//pode ser utilizado o h1,strong...
//document.write("<p>" + filme1 + "</p>")
//document.write("<p>" + filme2 + "</p>")
//document.write("<p>" + filme3 + "</p>")

var listaMusicas = ["https://adorando.com.br/file/2019/09/Sem-T%C3%ADtulo-1siteeleve.png", "https://i.ytimg.com/vi/WFAwXzKXmWE/maxresdefault.jpg", "https://i.ytimg.com/vi/UU2Rmplsyhs/maxresdefault.jpg", "https://i.ytimg.com/vi/lsE5AOvTcKk/maxresdefault.jpg"]

for (var i = 0; i < listaMusicas.length; i++) {
    document.write("<img src=" + listaMusicas[i] + ">")
}