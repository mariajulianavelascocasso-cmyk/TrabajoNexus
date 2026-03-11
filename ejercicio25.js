function fnRotarVector() {

    let html = `
        <label for="rotateInput">Vector (números separados por coma):</label>
        <input type="text" id="rotateInput" placeholder="Ej: 1,2,3,4,5">

        <label for="rotateKInput">Posiciones a rotar (k):</label>
        <input type="number" id="rotateKInput" placeholder="Ej: 2">

        <button id="btnRotar25">Rotar Vector</button>

        <p id="resultado25"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función para rotar vector k posiciones usando for
    function rotateArray(array, k) {
        let n = array.length;
        let resultado = new Array(n);

        // Ajustar k si es mayor al tamaño del vector
        k = k % n;

        for (let i = 0; i < n; i++) {
            let nuevaPos = (i + k) % n;
            resultado[nuevaPos] = array[i];
        }

        return resultado;
    }

    // Acción del botón
    document.getElementById("btnRotar25").onclick = function () {

        let texto = document.getElementById("rotateInput").value.trim();
        let kTexto = document.getElementById("rotateKInput").value.trim();

        if (texto === "" || kTexto === "") {
            document.getElementById("resultado25").innerText =
                " Ingresa el vector y el número de posiciones.";
            return;
        }

        let array = texto.split(",").map(n => parseFloat(n.trim()));
        let k = parseInt(kTexto);

        if (array.some(isNaN) || isNaN(k)) {
            document.getElementById("resultado25").innerText =
                " Los valores deben ser numéricos.";
            return;
        }

        if (array.length === 0) {
            document.getElementById("resultado25").innerText =
                " El vector no puede estar vacío.";
            return;
        }

        let resultado = rotateArray(array, k);

        document.getElementById("resultado25").innerText =
            ` Vector rotado: [ ${resultado.join(", ")} ]`;
    };

    return "✅";
}

export { fnRotarVector };
