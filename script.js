document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convert-btn");

    convertBtn.addEventListener("click", function () {
       
        const degreeInput = parseFloat(document.getElementById("degree").value);
        const fahrenheitRadio = document.getElementById("fahrenheit");
        const kelvinRadio = document.getElementById("kelvin");

        let resultCelsius;

        if (fahrenheitRadio.checked) {
           
            resultCelsius = (degreeInput - 32) * (5 / 9);
        } else if (kelvinRadio.checked) {
          
            resultCelsius = degreeInput - 273.15;
        } else {
            alert("Please select a temperature type.");
            return; 
        }

        document.getElementById("celsius").textContent = resultCelsius.toFixed(2);
    });
});
