function fnOrdenamientoMezcla() {

    let html = `
        <label for="mergeSortInput">Ingresa un array (ej: 5,3,8,1,2):</label>
        <input type="text" id="mergeSortInput" placeholder="Ej: 5,3,8,1,2">

        <button id="btnMergeSort30">Ordenar por Mezcla</button>

        <p id="resultado30"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    
    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }
-
    function mergeSort(array) {
        if (array.length <= 1) return array;

        let mid = Math.floor(array.length / 2);
        let izquierda = mergeSort(array.slice(0, mid));
        let derecha = mergeSort(array.slice(mid));

        return merge(izquierda, derecha);
    }
    document.getElementById("btnMergeSort30").onclick = function () {

        let texto = document.getElementById("mergeSortInput").value.trim();

        if (!texto) {
            document.getElementById("resultado30").innerHTML =
                " Ingresa un array válido.";
            return;
        }

        let array = texto.split(",").map(n => parseFloat(n.trim()));

        if (array.some(isNaN)) {
            document.getElementById("resultado30").innerHTML =
                " Todos los valores deben ser números.";
            return;
        }

        let ordenado = mergeSort(array);

        document.getElementById("resultado30").innerHTML =
            `Array ordenado:<br>[ ${ordenado.join(", ")} ]`;
    };

    return "✅";
}

export { fnOrdenamientoMezcla };
