function celsiusParaFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

var temperaturaCelsius = 100;

var temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

console.log("A temperatura em Fahrenheit é: " + temperaturaFahrenheit);
