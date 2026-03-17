function fnPromedioVector() {

    let html = `
        <label for="valuesInput">Ingresa valores separados por coma:</label>
        <input type="text" id="valuesInput">

        <button id="btnPromedio16">Calcular promedio</button>

        <p id="resultado16"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función que calcula el promedio usando ciclo for
    function calculateAverage(values) {
        let suma = 0;

        for (let i = 0; i < values.length; i++) {
            suma += values[i];
        }

        return suma / values.length;
    }

    // Procesar el input y mostrar resultado
    document.getElementById("btnPromedio16").onclick = function () {

        let texto = document.getElementById("valuesInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado16").innerHTML =
                " Ingresa valores numéricos.";
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado16").innerHTML =
                " Todos los elementos deben ser números válidos.";
            return;
        }

        let promedio = calculateAverage(arr);

        document.getElementById("resultado16").innerHTML =
            ` Promedio: <b>${promedio}</b>`;
    };

    return "✅";
}

export { fnPromedioVector };