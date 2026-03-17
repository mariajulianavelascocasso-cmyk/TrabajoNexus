function fnCombinarVectoresOrdenados() {

    let html = `
        <label for="array1Input">Vector 1 (separado por comas):</label>
        <input type="text" id="array1Input" placeholder="Ej: 1,3,5,7">

        <label for="array2Input">Vector 2 ( separado por comas):</label>
        <input type="text" id="array2Input" placeholder="Ej: 2,4,6,8">

        <button id="btnCombinar27">Combinar</button>

        <p id="resultado27"></p>
    `;

    document.getElementById("cajas").innerHTML = html;


    function mergeSortedArrays(arr1, arr2) {
        let i = 0, j = 0;
        let combinado = [];

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                combinado.push(arr1[i]);
                i++;
            } else {
                combinado.push(arr2[j]);
                j++;
            }
        }


        while (i < arr1.length) {
            combinado.push(arr1[i]);
            i++;
        }

        while (j < arr2.length) {
            combinado.push(arr2[j]);
            j++;
        }

        return combinado;
    }

    function updateResult(result) {
        document.getElementById("resultado27").outerHTML = `
            <p id="resultado27">
                 <strong>Vector combinado:</strong><br>
                [ ${result.join(", ")} ]
            </p>
        `;
    }

    document.getElementById("btnCombinar27").onclick = function () {

        let text1 = document.getElementById("array1Input").value.trim();
        let text2 = document.getElementById("array2Input").value.trim();

        if (text1 === "" || text2 === "") {
            document.getElementById("resultado27").outerHTML =
                `<p id="resultado27"> Ingresa ambos vectores.</p>`;
            return;
        }

        let arr1 = text1.split(",").map(n=> parseFloat(n.trim()));
        let arr2 = text2.split(",").map(n  => parseFloat(n.trim()));

        if (arr1.some(isNaN) || arr2.some(isNaN)) {
            document.getElementById("resultado27").outerHTML =
                `<p id="resultado27"> Todos los elementos deben ser números válidos.</p>`;
            return;
        }

        let resultado = mergeSortedArrays(arr1, arr2);

        updateResult(resultado);
    };

    return "✅";
}

export { fnCombinarVectoresOrdenados };
