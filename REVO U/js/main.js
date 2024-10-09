document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const celsiusInput = document.querySelector('#celcius-input');
    const fahrenheitOutput = document.querySelector('#fahrenheit-output');
    const kalkulasiOutput = document.querySelector('#kalkulasi-output');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const celsius = parseFloat(celsiusInput.value);

        if (isNaN(celsius)) {
            fahrenheitOutput.value = "Please enter a valid number!";
            kalkulasiOutput.value = "";
            return;
        }

        const fahrenheit = (celsius * 9/5) + 32;

        fahrenheitOutput.value = fahrenheit.toFixed(2);

        kalkulasiOutput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    });

    document.querySelector('.reset').addEventListener('click', function(e) {
        e.preventDefault();
        celsiusInput.value = '';
        fahrenheitOutput.value = '';
        kalkulasiOutput.value = '';
    });

    document.querySelector('.rever').addEventListener('click', function(e) {
        e.preventDefault();

        const fahrenheit = parseFloat(fahrenheitOutput.value);

        if (isNaN(fahrenheit)) {
            celsiusInput.value = "Please enter a valid number!";
            kalkulasiOutput.value = "";
            return;
        }

        const celsius = (fahrenheit - 32) * 5/9;

        celsiusInput.value = celsius.toFixed(2);

        kalkulasiOutput.value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    });
});
