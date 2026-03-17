function fnCribaEratostenes() {

    let html = `
        <label for="primeLimitInput">Ingresa un número límite:</label>
        <input type="number" id="primeLimitInput" placeholder="Ej: 50">

        <button id="btnPrimos28">Encontrar Primos</button>

        <p id="resultado28"></p>
    `;

    document.getElementById("cajas").innerHTML = html;

    function sieveOfEratosthenes(limit) {
        let esPrimo = new Array(limit + 1).fill(true);
        esPrimo[0] = esPrimo[1] = false;

        for (let i = 2; i * i <= limit; i++) {
            if (esPrimo[i]) {
                for (let j = i * i; j <= limit; j += i) {
                    esPrimo[j] = false;
                }
            }
        }

        let primos = [];
        for (let i = 2; i <= limit; i++) {
            if (esPrimo[i]) primos.push(i);
        }

        return primos;
    }

    document.getElementById("btnPrimos28").onclick = function () {

        let limit = parseInt(document.getElementById("primeLimitInput").value);

        if (isNaN(limit) || limit < 2) {
            document.getElementById("resultado28").innerHTML =
                " Ingresa un número mayor o igual a 2.";
            return;
        }

        let primos = sieveOfEratosthenes(limit);

        document.getElementById("resultado28").innerHTML = 
            ` Primos hasta ${limit}:<br>[ ${primos.join(", ")} ]`;
    };

    return "✅";
}

export { fnCribaEratostenes };
