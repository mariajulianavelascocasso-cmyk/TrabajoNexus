function fnProductoWhile() {

    let html = `
        <label for="productInput">Ingresa valores separados por coma:</label>
        <input type="text" id="productInput">

        <button id="btnProducto19">Calcular producto</button>

        <p id="resultado19"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función operación: multiplicar
    function multiply(a, b) {
        return a * b;
    }

    // Función que analiza el array y aplica la operación usando while
    function analyzeArray(arr, operation) {
        let i = 0;
        let resultado = 1;

        while (i < arr.length) {
            resultado = operation(resultado, arr[i]);
            i++;
        }

        return resultado;
    }

    // Procesar el input y mostrar el resultado
    document.getElementById("btnProducto19").onclick = function () {

        let texto = document.getElementById("productInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado19").outerHTML =
                "<p id='resultado19'> Ingresa valores numéricos.</p>";
            return;
        }

        let arr = texto.split(",").map(n => parseFloat(n.trim()));

        if (arr.some(isNaN)) {
            document.getElementById("resultado19").outerHTML =
                "<p id='resultado19'> Todos los elementos deben ser números válidos.</p>";
            return;
        }

        let producto = analyzeArray(arr, multiply);

        document.getElementById("resultado19").outerHTML =
            `<p id="resultado19"> Producto total: <b>${producto}</b></p>`;
    };

    return "✅";
}

export { fnProductoWhile };