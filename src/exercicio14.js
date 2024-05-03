function calcularMediaAritmetica(...numeros) {
  var soma = 0;
  var contador = 0;
  var i = 0;

  while (i < numeros.length) {
      if (numeros[i] === 0) {
          break;
      }

      soma += numeros[i];
      contador++;
      i++;
  }

  if (contador === 0) {
      console.log("Nenhum número fornecido.");
  } else {
      var media = soma / contador;
      console.log("A média aritmética dos números fornecidos é: " + media.toFixed(2));
  }
}

calcularMediaAritmetica(5.5, 7.8, 9.3, 0, 3.2, 0, 6.1);
