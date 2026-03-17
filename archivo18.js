function fnOrdenarBurbuja() {

    let html = `
        <label for="sortInput">Ingresa valores separados por coma:</label>
        <input type="text" id="sortInput">

        <button id="btnOrdenar18">Ordenar (Burbuja)</button>

        <p id="resultado18"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Algoritmo Bubble Sort usando ciclos for anidados
    function bubbleSort(array) {
        let arr = [...array]; // copiar para no modificar el original

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Intercambio
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        return arr;
    }

    // Procesar el input y mostrar el resultado
    document.getElementById("btnOrdenar18").onclick = function () {

        let texto = document.getElementById("sortInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado18").outerHTML =
                "<p id='resultado18'> Ingresa valores numéricos.</p>";
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado18").outerHTML =
                "<p id='resultado18'>Todos los elementos deben ser números válidos.</p>";
            return;
        }

        let ordenado = bubbleSort(arr);

        document.getElementById("resultado18").outerHTML =
            `<p id="resultado18"> Array ordenado: [ ${ordenado.join(", ")} ]</p>`;
    };

    return "✅";
}

export { fnOrdenarBurbuja };