// importa as funções exportadas no arquivo 02-funcoes.js
var converters = require('./02-funcoes-conversao-temperaturas');

var fahrenheit = converters.celsiusToFahrenheit(50);

var kelvin = converters.fahrenheitToKelvin(fahrenheit);

console.log('The value of the temperature in Kelvin: ' + kelvin);
