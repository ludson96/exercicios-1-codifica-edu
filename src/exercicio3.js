function realizarOperacoes(num1, num2, num3) {
  var resultado1 = num1 + 25;
  var resultado2 = num2 * 3;
  var resultado3 = num3 * 0.12;
  var resultado4 = num1 + num2 + num3;
  
  return [resultado1, resultado2, resultado3, resultado4];
}

var num1 = 40;
var num2 = 50;
var num3 = 60;

var resultados = realizarOperacoes(num1, num2, num3);

console.log("Resultado da primeira operação (num1 + 25): " + resultados[0]);
console.log("Resultado da segunda operação (num2 * 3): " + resultados[1]);
console.log("Resultado da terceira operação (num3 * 12%): " + resultados[2]);
console.log("Resultado da quarta operação (soma dos valores originais): " + resultados[3]);
