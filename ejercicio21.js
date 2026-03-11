function fnMatrizTranspuesta() {

    let html = `
        <label for="matrixInput">
            Ingresa la matriz (filas separadas por ';' y valores por ','):
        </label>
        <input type="text" id="matrixInput" placeholder="Ej: 1,2,3;4,5,6">

        <button id="btnTranspuesta21">Calcular Transpuesta</button>

        <p id="resultado21"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función que calcula la matriz transpuesta usando for anidados
    function transposeMatrix(matrix) {
        let filas = matrix.length;
        let columnas = matrix[0].length;

        let transpuesta = [];

        for (let i = 0; i < columnas; i++) {
            let nuevaFila = [];

            for (let j = 0; j < filas; j++) {
                nuevaFila.push(matrix[j][i]);
            }

            transpuesta.push(nuevaFila);
        }

        return transpuesta;
    }

    // Acción del botón
    document.getElementById("btnTranspuesta21").onclick = function () {

        let texto = document.getElementById("matrixInput").value.trim();

        if (texto === "") {
            document.getElementById("resultado21").innerHTML =
                " Ingresa una matriz válida.";
            return;
        }

        // Separar filas por ';'
        let filasStr = texto.split(";");

        let matriz = [];

        for (let f of filasStr) {
            let fila = f.split(",").map(n => parseFloat(n.trim()));

            if (fila.some(isNaN)) {
                document.getElementById("resultado21").innerHTML =
                    "Todos los valores deben ser números válidos.";
                return;
            }

            matriz.push(fila);
        }

        // Validar que todas las filas tengan la misma longitud
        let largo = matriz[0].length;
        if (matriz.some(fila => fila.length !== largo)) {
            document.getElementById("resultado21").innerHTML =
                " Todas las filas deben tener la misma cantidad de columnas.";
            return;
        }

        let resultado = transposeMatrix(matriz);

        document.getElementById("resultado21").innerHTML =
            `Matriz Transpuesta:<br>[ ${resultado.map(f => `[ ${f.join(", ")} ]`).join("<br>")} ]`;
    };

    return "✅";
}

export { fnMatrizTranspuesta };
