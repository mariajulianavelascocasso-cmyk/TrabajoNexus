function fnEliminarDuplicados() {

    let html = `
        <label for="duplicatesInput">Ingresa valores separados por coma:</label>
        <input type="text" id="duplicatesInput">

        <button id="btnDuplicados17">Eliminar duplicados</button>

        <p id="resultado17"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función que elimina duplicados usando ciclos for anidados
    function removeDuplicates(array) {
        let sinDuplicados = [];

        for (let i = 0; i < array.length; i++) {
            let repetido = false;

            for (let j = 0; j < sinDuplicados.length; j++) {
                if (array[i] === sinDuplicados[j]) {
                    repetido = true;
                    break;
                }
            }

            if (!repetido) {
                sinDuplicados.push(array[i]);
            }
        }

        return sinDuplicados;
    }

    // Evento del botón
    document.getElementById("btnDuplicados17").onclick = function () {

        let texto = document.getElementById("duplicatesInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado17").textContent =
                " Ingresa valores numéricos.";
            return;
        }

        let arr = texto.split(",").map(x => x.trim());

        let resultado = removeDuplicates(arr);

        document.getElementById("resultado17").textContent =
            ` Sin duplicados: [ ${resultado.join(", ")} ]`;
    };

    return "✅";
}

export { fnEliminarDuplicados };