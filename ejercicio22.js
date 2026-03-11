function fnProductoPunto() {

    let html = `
        <label for="vectorAInput">Vector A (valores separados por ','):</label>
        <input type="text" id="vectorAInput" placeholder="Ej: 1,2,3">

        <label for="vectorBInput">Vector B (valores separados por ','):</label>
        <input type="text" id="vectorBInput" placeholder="Ej: 4,5,6">

        <button id="btnProducto22">Calcular Producto Punto</button>

        <p id="resultado22"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función que calcula producto punto usando un for
    function dotProduct(vectorA, vectorB) {
        let total = 0;

        for (let i = 0; i < vectorA.length; i++) {
            total += vectorA[i] * vectorB[i];
        }

        return total;
    }

    // Acción del botón
    document.getElementById("btnProducto22").onclick = function () {

        let textoA = document.getElementById("vectorAInput").value.trim();
        let textoB = document.getElementById("vectorBInput").value.trim();

        if (textoA === "" || textoB === "") {
            document.getElementById("resultado22").innerText =
                " Ingresa ambos vectores.";
            return;
        }

        // Convertir a arrays numéricos
        let vectorA = textoA.split(",").map(n => parseFloat(n.trim()));
        let vectorB = textoB.split(",").map(n => parseFloat(n.trim()));

        // Validación: números válidos
        if (vectorA.some(isNaN) || vectorB.some(isNaN)) {
            document.getElementById("resultado22").innerText =
                " Todos los valores deben ser números válidos.";
            return;
        }

        // Validación: mismos tamaños
        if (vectorA.length !== vectorB.length) {
            document.getElementById("resultado22").innerText =
                " Los vectores deben tener la misma longitud.";
            return;
        }

        let resultado = dotProduct(vectorA, vectorB);

        document.getElementById("resultado22").innerText =
            ` El producto punto es: ${resultado}`;
    };

    return "✅";
}

export { fnProductoPunto };