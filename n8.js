function cargarActv8() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Mostrar números impares </h3>
        <hr width="60%">

        <br><br>

        <label for="limiteInput">Ingrese el número límite:</label>
        <input type="number" id="limiteInput">

        <button id="calcularImpares">Mostrar Números Impares</button>

        <br><br>

        <p id="resultado"></p>
    `);

    
    document.getElementById("calcularImpares").addEventListener("click", procesarLimite);
}


function showOddNumbers(limit) {

    if (isNaN(limit) || limit <= 0) {
        return "Error: Ingresa un número válido mayor que 0.";
    }

    let i = 1;
    let resultado = "";

    do {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
        i++;
    } while (i <= limit);

    return resultado.trim();
}


function procesarLimite() {
    const limite = parseInt(document.getElementById("limiteInput").value);
    const salida = showOddNumbers(limite);

    document.getElementById("resultado").innerHTML =
        "<strong>" + salida + "</strong>";
}

export { showOddNumbers, procesarLimite,cargarActv8 };