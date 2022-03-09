function Converter() {
    var valorElemento = document.getElementById("valor");//traz todo o codigo do html
    var valor = valorElemento.value;//indica que eu quero o "value" do codigo
    var valorEmRealNumerico = parseFloat(valor);//transforma o value impresso como texto para número

    var valorEmDolar = valorEmRealNumerico / 5;
    var valorFinal = valorEmDolar.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Dólar é $" + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter1() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmEuro = valorEmRealNumerico / 5.50;
    var valorFinal = valorEmEuro.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é €" + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmBitcoin = valorEmRealNumerico / 211746.30;
    var valorFinal = valorEmBitcoin.toFixed(6)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em BitCoin é ฿" + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
}
  
  //function sequencia de codigos determinados