function cargarActv10() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Secuencia Fibonacci (While) </h3>
        <hr width="60%">

        <br><br>

        <label for="terminosInput">Ingrese la cantidad de términos:</label>
        <input type="number" id="terminosInput">

        <br><br>

        <button id="btnFibonacci">Generar Secuencia</button>

        <br><br>

        <p id="resultadoFibo"></p>
    `);

    document.getElementById("btnFibonacci").addEventListener("click", procesarTerminos);
}


function generateFibonacci(terms) {

    if (isNaN(terms) || terms <= 0) {
        return "Error: Ingresa un número válido mayor que 0.";
    }

    let fib = [];
    
    if (terms >= 1) fib.push(0);
    if (terms >= 2) fib.push(1);

    let i = 2;

    while (i < terms) {
        fib.push(fib[i - 1] + fib[i - 2]);
        i++;
    }

    return fib.join(" ");
}


function procesarTerminos() {
    const n = parseInt(document.getElementById("terminosInput").value);
    const secuencia = generateFibonacci(n);

    document.getElementById("resultadoFibo").innerHTML =
        "Secuencia Fibonacci:<br><strong>" + secuencia + "</strong>";
}

export { generateFibonacci, procesarTerminos,cargarActv10 };