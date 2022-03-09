function Converter() {
    var valorElemento = document.getElementById("valor");//traz todo o codigo do html
    var valor = valorElemento.value;//indica que eu quero o "value" do codigo
    var valorEmRealNumerico = parseFloat(valor);//transforma o value impresso como texto para número

    var valorEmDolar = valorEmRealNumerico / 5;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Dólar é $" + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter1() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmEuro = valorEmRealNumerico / 5.50;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é €" + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);

    var valorEmBitcoin = valorEmRealNumerico / 211746.30;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em BitCoin é ฿" + valorEmBitcoin;
    elementoValorConvertido.innerHTML = valorConvertido;
}
  
  //function sequencia de codigos determinados