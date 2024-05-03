function ordemCrescente(valor1, valor2) {
  if (valor1 !== valor2) {
      var ordenados = [valor1, valor2].sort(function(a, b) {
          return a - b;
      });
      return "Valores em ordem crescente: " + ordenados[0] + ", " + ordenados[1];
  } else {
      return "Os valores são iguais. Por favor, insira valores diferentes.";
  }
}

var valorA = 15;
var valorB = 7;

var resultado = ordemCrescente(valorA, valorB);
console.log(resultado);
