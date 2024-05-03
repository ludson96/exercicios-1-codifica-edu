function verificarParOuImpar(valores) {
  for (var i = 0; i < valores.length; i++) {
      if (valores[i] <= 0 || isNaN(valores[i])) {
          console.log("Valor nulo ou negativo inserido. Encerrando o programa.");
          return;
      }

      if (valores[i] % 2 === 0) {
          console.log(valores[i] + " é PAR.");
      } else {
          console.log(valores[i] + " é ÍMPAR.");
      }
  }
}

var valores = [7, 10, 3, 8, -2, 5];
verificarParOuImpar(valores);
