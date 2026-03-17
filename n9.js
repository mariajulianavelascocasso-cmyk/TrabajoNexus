function cargarActv9() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <br><br>

        <hr width="60%">
        <h3> Calcular Potencia (base^exponente) </h3>
        <hr width="60%">

        <br><br>

        <label for="baseInput">Ingrese la base:</label>
        <input type="number" id="baseInput">

        <br><br>

        <label for="exponenteInput">Ingrese el exponente:</label>
        <input type="number" id="exponenteInput">

        <br><br>

        <button id="btnPotencia">Calcular Potencia</button>

        <br><br>

        <p id="resultadoPotencia"></p>
    `);

    document.getElementById("btnPotencia").addEventListener("click", mostrarPotencia);
}


function calculatePower(base, exp) {

    if (isNaN(base) || isNaN(exp)) {
        return "Error: valores inválidos.";
    }
    if (exp < 0) {
        return "Error: el exponente debe ser mayor o igual a 0.";
    }

    let resultado = 1;

   
    for (let i = 1; i <= exp; i++) {

        
        for (let j = 1; j <= 1; j++) {
            resultado = resultado * base;
        }
    }

    return resultado;
}


function mostrarPotencia() {
    const base = parseInt(document.getElementById("baseInput").value);
    const exponente = parseInt(document.getElementById("exponenteInput").value);

    const potencia = calculatePower(base, exponente);

    document.getElementById("resultadoPotencia").innerHTML =
        `Resultado: <strong>${base} ^ ${exponente} = ${potencia}</strong>`;
}

export { calculatePower, mostrarPotencia,cargarActv9 };