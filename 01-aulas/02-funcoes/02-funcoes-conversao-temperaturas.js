function celsiusToFahrenheit(celsiusTemperature) {
    return (celsiusTemperature * (9 / 5)) + 32;
}

function fahrenheitToKelvin(fahrenheitTemperature) {
    return ((fahrenheitTemperature - 32) / 1.8) + 273.15;
}

module.exports = { celsiusToFahrenheit, fahrenheitToKelvin };
