function calcularPercentualVotos(totalEleitores, votosBrancos, votosNulos, votosValidos) {
  
  var percentualBrancos = (votosBrancos / totalEleitores) * 100;
  var percentualNulos = (votosNulos / totalEleitores) * 100;
  var percentualValidos = (votosValidos / totalEleitores) * 100;

  return {
      percentualBrancos: percentualBrancos,
      percentualNulos: percentualNulos,
      percentualValidos: percentualValidos
  };
}

var totalEleitores = 200;
var votosBrancos = 10;
var votosNulos = 20;
var votosValidos = 160

var percentuais = calcularPercentualVotos(totalEleitores, votosBrancos, votosNulos, votosValidos);

console.log("Percentual de votos brancos: " + percentuais.percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentuais.percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentuais.percentualValidos.toFixed(2) + "%");
