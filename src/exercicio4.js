function calcularMediaAprovacao(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  
  if (media >= 6.0) {
      return "PARABÉNS! Você foi aprovado. Sua média semestral é: " + media.toFixed(2);
  } else {
      return "Infelizmente você não foi aprovado. Sua média semestral é: " + media.toFixed(2);
  }
}

var nota1 = 8
var nota2 = 7

var mensagem = calcularMediaAprovacao(nota1, nota2);
console.log(mensagem);
