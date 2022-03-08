function calcularMedia() {
  
    let nota1 = parseFloat(document.getElementById("input1").value);
    let nota2 = parseFloat(document.getElementById("input2").value);
    let nota3 = parseFloat(document.getElementById("input3").value);
    let nota4 = parseFloat(document.getElementById("input4").value);
    
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let mediaFinal = media.toFixed(1);
    
    if (media >= 7)
      {document.getElementById("soma").innerHTML = "Querido aluno sua média final é: " + mediaFinal + ". PARABÉNS, você foi aprovado(a)!";}
    else
      {document.getElementById("soma").innerHTML = "Querido aluno sua média final é: " + mediaFinal + ". Infelizmente você não alcançou a média necessária, seguir com segunda chamada.";}
    
  }
  
  
  //Forma de colocar comentário
  
  //Revisão
  //Variáveis - São Lugares na memoria do computador que utilizamos para referenciar valores
  //Strings - Palavras utilizam ""
  //Console.log - Utiliza-se para imprimir no Console
  //toFixed - Serve para fixar a quantidade de casas decimais
  //Operações matemáticas - +-*/
  //Concatenação - Junção de duas coisas Ex: string + variável
  