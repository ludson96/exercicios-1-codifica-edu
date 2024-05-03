function calcularMediaPonderada(...numerosEPesos) {
  var somaPonderada = 0;
  var somaPesos = 0;
  var i = 0;

  while (i < numerosEPesos.length) {
      if (numerosEPesos[i] === 0) {
          break;
      }

      somaPonderada += numerosEPesos[i] * numerosEPesos[i + 1];
      somaPesos += numerosEPesos[i + 1];
      i += 2;
  }

  if (somaPesos === 0) {
      console.log("Nenhum número fornecido.");
  } else {
      var mediaPonderada = somaPonderada / somaPesos;
      console.log("A média ponderada dos números fornecidos é: " + mediaPonderada.toFixed(2));
  }
}

calcularMediaPonderada(5.5, 2, 7.8, 3, 9.3, 1, 0, 0, 3.2, 4, 0, 0, 6.1, 5);
