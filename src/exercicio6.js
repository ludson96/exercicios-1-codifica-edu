function verificarTipoTriangulo(A, B, C) {
  if (A < B + C && B < A + C && C < A + B) {
      if (A === B && B === C) {
          return "Triângulo equilátero";
      } else if (A !== B && B !== C && A !== C) {
          return "Triângulo escaleno";
      } else {
          return "Triângulo isósceles";
      }
  } else {
      return "Os lados fornecidos não formam um triângulo";
  }
}

var ladoA = 3;
var ladoB = 4;
var ladoC = 5;

var tipoTriangulo = verificarTipoTriangulo(ladoA, ladoB, ladoC);
console.log(tipoTriangulo);
