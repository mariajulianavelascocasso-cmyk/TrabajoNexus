function fnConvolucionVectores() {

    let html = `
        <label for="vectorXInput">Vector X (valores separados por ','):</label>
        <input type="text" id="vectorXInput" placeholder="Ej: 1,2,3">

        <label for="vectorYInput">Vector Y (valores separados por ','):</label>
        <input type="text" id="vectorYInput" placeholder="Ej: 4,5">

        <button id="btnConvolucion23">Calcular Convolución</button>

        <p id="resultado23"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función que calcula la convolución usando for anidados
    function calculateConvolution(x, y) {
        let n = x.length;
        let m = y.length;

        let result = new Array(n + m - 1).fill(0);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                result[i + j] += x[i] * y[j];
            }
        }

        return result;
    }

    // Acción del botón
    document.getElementById("btnConvolucion23").onclick = function () {

        let textoX = document.getElementById("vectorXInput").value.trim();
        let textoY = document.getElementById("vectorYInput").value.trim();

        if (textoX === "" || textoY === "") {
            document.getElementById("resultado23").innerHTML =
                "Ingresa ambos vectores.";
            return;
        }

        // Convertir texto a arrays numéricos
        let vectorX = textoX.split(",").map(n => parseFloat(n.trim()));
        let vectorY = textoY.split(",").map(n => parseFloat(n.trim()));

        // Validación: números válidos
        if (vectorX.some(isNaN) || vectorY.some(isNaN)) {
            document.getElementById("resultado23").innerHTML =
                " Todos los valores deben ser números válidos.";
            return;
        }

        let resultado = calculateConvolution(vectorX, vectorY);

        document.getElementById("resultado23").innerHTML =
            ` Resultado de la convolución:<br>[ ${resultado.join(", ")} ]`;
    };

    return "✅";
}

export { fnConvolucionVectores };