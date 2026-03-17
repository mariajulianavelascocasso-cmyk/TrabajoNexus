function fnContarVocales() {

    let html = `
        <label for="lettersInput">Ingresa letras separadas por coma:</label>
        <input type="text" id="lettersInput">

        <button id="btnVocales20">Contar vocales</button>

        <p id="resultado20"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    // Función que cuenta cuántas vocales hay
    function countVowels(letters) {
        const vocales = ["a", "e", "i", "o", "u"];
        let contador = 0;

        for (let i = 0; i < letters.length; i++) {
            if (vocales.includes(letters[i].toLowerCase())) {
                contador++;
            }
        }

        return contador;
    }

    // Función que actualiza el contador en mensaje
    function updateCounter(count) {
        return ` Total de vocales encontradas: <b>${count}</b>`;
    }

    // Acción del botón
    document.getElementById("btnVocales20").onclick = function () {

        let texto = document.getElementById("lettersInput").value;

        if (texto.trim() === "") {
            document.getElementById("resultado20").outerHTML =
                "<p id='resultado20'> Ingresa letras válidas.</p>";
            return;
        }

        let arr = texto.split(",").map(l => l.trim());

        if (arr.some(l => l.length !== 1)) {
            document.getElementById("resultado20").outerHTML =
                "<p id='resultado20'> Escribe solo letras individuales (un solo caracter cada una).</p>";
            return;
        }

        let total = countVowels(arr);
        let mensaje = updateCounter(total);

        document.getElementById("resultado20").outerHTML =
            `<p id='resultado20'>${mensaje}</p>`;
    };

    return "✅";
}

export { fnContarVocales };
