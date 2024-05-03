function calcularValorTotal(numMacas) {
  var precoUnitario;

  if (numMacas >= 12) {
      precoUnitario = 0.25; 
  } else {
      precoUnitario = 0.30; 
  }

  var valorTotal = numMacas * precoUnitario;
  return valorTotal.toFixed(2); 
}

var numMacasCompradas = 15; 

var valorTotalCompra = calcularValorTotal(numMacasCompradas);
console.log("O valor total da compra é: R$" + valorTotalCompra);
