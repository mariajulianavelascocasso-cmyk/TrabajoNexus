function fnMultiplicacionMatrices() {

    let html = `
        <label for="matrix1Input">Matriz 1 (ej: [[1,2],[3,4]]):</label>
        <input type="text" id="matrix1Input" placeholder="Ej: [[1,2],[3,4]]">

        <br><br>

        <label for="matrix2Input">Matriz 2 (ej: [[5,6],[7,8]]):</label>
        <input type="text" id="matrix2Input" placeholder="Ej: [[5,6],[7,8]]">

        <br><br>

        <button id="btnMatrices29">Multiplicar Matrices</button>

        <div id="resultado29"></div>
    `;

    document.getElementById("cajas").innerHTML = html;

    
    function matrixMultiplication(mat1, mat2) {

        let rows1 = mat1.length;
        let cols1 = mat1[0].length;
        let rows2 = mat2.length;
        let cols2 = mat2[0].length;

        
        if (cols1 !== rows2) return null;

        
        let result = new Array(rows1)
            .fill(0)
            .map(() => new Array(cols2).fill(0));

       
        for (let i = 0; i < rows1; i++) {
            for (let j = 0; j < cols2; j++) {

                let suma = 0;

                for (let k = 0; k < cols1; k++) {
                    suma += mat1[i][k] * mat2[k][j];
                }

                result[i][j] = suma;
            }
        }

        return result;
    }


    document.getElementById("btnMatrices29").onclick = function () {

        let mat1Texto = document.getElementById("matrix1Input").value;
        let mat2Texto = document.getElementById("matrix2Input").value;

        let mat1, mat2;

        try {
            mat1 = JSON.parse(mat1Texto);
            mat2 = JSON.parse(mat2Texto);
        } catch (err) {
            document.getElementById("resultado29").innerHTML =
                " Debes ingresar matrices válidas en formato JSON.";
            return;
        }

        let resultado = matrixMultiplication(mat1, mat2);

        if (!resultado) {
            document.getElementById("resultado29").innerHTML =
                " Las dimensiones de las matrices no son compatibles.";
            return;
        }

  
        let tabla = "<table border='1' style='border-collapse:collapse; padding:5px;'>";

        for (let fila of resultado) {
            tabla += "<tr>";
            for (let val of fila) {
                tabla += `<td style="padding:8px;">${val}</td>`;
            }
            tabla += "</tr>";
        }

        tabla += "</table>";

        document.getElementById("resultado29").outerHTML =
            `<div id="resultado29">${tabla}</div>`;
    };

    return "✅";
}

export { fnMultiplicacionMatrices };
