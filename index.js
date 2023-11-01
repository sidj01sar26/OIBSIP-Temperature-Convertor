document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.querySelector("#celsius > input");
    const fahrenheitInput = document.querySelector("#fahrenheit > input");
    const kelvinInput = document.querySelector("#kelvin > input");
    const clearButton = document.querySelector(".button button");

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    function convertCelsiusToFahrenheitAndKelvin(cTemp) {
        const fTemp = (cTemp * 9) / 5 + 32;
        const kTemp = cTemp + 273.15;
        return [fTemp, kTemp];
    }

    function convertFahrenheitToCelsiusAndKelvin(fTemp) {
        const cTemp = ((fTemp - 32) * 5) / 9;
        const kTemp = ((fTemp - 32) * 5) / 9 + 273.15;
        return [cTemp, kTemp];
    }

    function convertKelvinToCelsiusAndFahrenheit(kTemp) {
        const cTemp = kTemp - 273.15;
        const fTemp = (kTemp - 273.15) * (9 / 5) + 32;
        return [cTemp, fTemp];
    }

    function updateTemperatureInputs(celsius, fahrenheit, kelvin) {
        celsiusInput.value = roundNumber(celsius);
        fahrenheitInput.value = roundNumber(fahrenheit);
        kelvinInput.value = roundNumber(kelvin);
    }

    celsiusInput.addEventListener("input", function () {
        const cTemp = parseFloat(celsiusInput.value);
        const [fTemp, kTemp] = convertCelsiusToFahrenheitAndKelvin(cTemp);
        updateTemperatureInputs(cTemp, fTemp, kTemp);
    });

    fahrenheitInput.addEventListener("input", function () {
        const fTemp = parseFloat(fahrenheitInput.value);
        const [cTemp, kTemp] = convertFahrenheitToCelsiusAndKelvin(fTemp);
        updateTemperatureInputs(cTemp, fTemp, kTemp);
    });

    kelvinInput.addEventListener("input", function () {
        const kTemp = parseFloat(kelvinInput.value);
        const [cTemp, fTemp] = convertKelvinToCelsiusAndFahrenheit(kTemp);
        updateTemperatureInputs(cTemp, fTemp, kTemp);
    });

    clearButton.addEventListener("click", () => {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    });
});
