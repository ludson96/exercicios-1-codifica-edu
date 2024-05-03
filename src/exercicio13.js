function calcularTabuada(n) {
  for (var i = 1; i <= n; i++) {
      console.log("Tabuada de " + i + ":");
      for (var j = 1; j <= 10; j++) {
          console.log(i + " x " + j + " = " + (i * j));
      }
      console.log("------------------------");
  }
}

var N = 5;

calcularTabuada(N);
