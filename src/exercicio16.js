function isPrimo(numero) {
  if (numero <= 1) {
      return false;
  }
  for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
          return false;
      }
  }
  return true;
}

function encontrarPrimos() {
  var numeroAtual = 101;
  var contador = 0;

  while (contador < 50) {
      if (isPrimo(numeroAtual)) {
          console.log(numeroAtual);
          contador++;
      }
      numeroAtual++;
  }
}

encontrarPrimos();
