function fnBusquedaBinaria() {

    let html = `
        <label for="sortedArrayInput">Vector ordenado (números separados por coma):</label>
        <input type="text" id="sortedArrayInput" placeholder="Ej: 1,3,5,7,9">

        <label for="searchValueInput">Valor a buscar:</label>
        <input type="text" id="searchValueInput" placeholder="Ej: 7">

        <button id="btnBusqueda24">Buscar</button>

        <p id="resultado24"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función de búsqueda binaria usando while
    function binarySearch(array, value) {
        let inicio = 0;
        let fin = array.length - 1;

        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);

            if (array[medio] === value) {
                return medio; // posición encontrada
            }

            if (array[medio] < value) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }

        return -1; // no encontrado
    }

    // Acción del botón
    document.getElementById("btnBusqueda24").onclick = function () {
        let textoArray = document.getElementById("sortedArrayInput").value.trim();
        let textoValor = document.getElementById("searchValueInput").value.trim();

        if (textoArray === "" || textoValor === "") {
            document.getElementById("resultado24").innerText =
                " Ingresa el vector y el valor a buscar.";
            return;
        }

        // Convertir vector a números
        let array = textoArray.split(",").map(n => parseFloat(n.trim()));
        let value = parseFloat(textoValor);

        // Validación: números válidos
        if (array.some(isNaN) || isNaN(value)) {
            document.getElementById("resultado24").innerText =
                " Todos los valores deben ser numéricos.";
            return;
        }

        // Validar que esté ordenado
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                document.getElementById("resultado24").innerText =
                    " El vector debe estar ordenado de menor a mayor.";
                return;
            }
        }

        let resultado = binarySearch(array, value);

        if (resultado === -1) {
            document.getElementById("resultado24").innerText =
                ` El valor ${value} no se encuentra en el vector.`;
        } else {
            document.getElementById("resultado24").innerText =
                ` Valor encontrado en la posición: ${resultado}`;
        }
    };

    return "✅";
}

export { fnBusquedaBinaria };