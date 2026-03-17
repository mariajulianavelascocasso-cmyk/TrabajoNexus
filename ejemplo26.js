function fnSubarrayMaximo() {

    let html = `
        <label for="subarrayInput">Ingresa números separados por coma:</label>
        <input type="text" id="subarrayInput" placeholder="Ej: -2,1,-3,4,-1,2,1,-5,4">

        <button id="btnSubarray26">Encontrar Subarray Máximo</button>

        <p id="resultado26"></p>
    `;

    document.getElementById("cajas").innerHTML = html;


    function maxSubArray(arr) {
        let maxActual = arr[0];
        let maxGlobal = arr[0];

        let inicio = 0, fin = 0, tempInicio = 0;

        for (let i = 1; i < arr.length; i++) {

            if (arr[i] > maxActual + arr[i]) {
                maxActual = arr[i];
                tempInicio = i;
            } else {
                maxActual += arr[i];
            }

            if (maxActual > maxGlobal) {
                maxGlobal = maxActual;
                inicio = tempInicio;
                fin = i;
            }
        }

        return {
            subarray: arr.slice(inicio, fin + 1),
            maxSum: maxGlobal
        };
    }


    document.getElementById("btnSubarray26").onclick = function () {

        let texto = document.getElementById("subarrayInput").value.trim();

        if (texto === "") {
            document.getElementById("resultado26").outerHTML =
                `<p id="resultado26"> Ingresa al menos un número.</p>`;
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado26").outerHTML =
                `<p id="resultado26"> Todos los elementos deben ser números válidos.</p>`;
            return;
        }

        let resultado = maxSubArray(arr);

        document.getElementById("resultado26").outerHTML = `
            <p id="resultado26">
                 <strong>Subarray de suma máxima:</strong><br>
                [ ${resultado.subarray.join(", ")} ]<br><br>
                 <strong>Suma máxima:</strong> ${resultado.maxSum}
            </p>
        `;
    };

    return "✅";
}

export { fnSubarrayMaximo };
