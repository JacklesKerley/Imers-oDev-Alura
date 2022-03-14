var numeroSecreto = parseInt(Math.random() *11)
var tentativas = 3
var acertou = 0

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var elementoNumero = document.getElementById("valor").value;
    var chute = parseInt(elementoNumero);
    
    if (elementoNumero == "") {
        elementoResultado.innerHTML = "Valor inválido"
    }
    else if (tentativas > 0 && acertou == 0) {
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = "Parabéns!!!, Você Acertou!";acertou = 1;
        }
        else if  (chute > 10 || chute < 0) {
            elementoResultado.innerHTML = "Você deve colocar um número de 0 a 10";
        }
        else {
            tentativas--;
                if (numeroSecreto > chute) {
                    elementoResultado.innerHTML = "Você errou, o número secreto é maior. Restam " + tentativas + " Tentativas.";
                }
                else {
                    elementoResultado.innerHTML = "Você errou, o número secreto é menor. Restam " + tentativas + " Tentativas.";
                }
        }
    }
    if (tentativas <= 0 && acertou == 0) {
        elementoResultado.innerHTML = "Você perdeu, tentativas esgotadas! o número secreto era " + numeroSecreto + ".";
    }
}
    
//utiliza o = para atribuir e == para comparar
// || significam "ou"
