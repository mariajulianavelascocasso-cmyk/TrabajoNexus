function cargarActv7() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
    <br><br>

    <hr width="60%">
    <h3> calcular factorial </h3>
    <hr width="60%">

    <br><br>

    <label for="limiteInput"> Ingrese el Número límite: </label>
    <input type="number" id="limiteInput">

    <button id="calcularFactorial"> Mostrar Numeros impares </button>

    <br><br>
    `);document.getElementById("procesarLimite").addEventListener('click', procesarLimite);
}



function sumEvenNumbers(start, end) {
            let suma = 0;

            for (let i = start; i <= end; i++) {
                if (i % 2 === 0) {   
                    suma += i;
                }
            }

            return suma;
        }

        function mostrarSuma() {
            let inicio = parseInt(document.getElementById("inicioInput").value);
            let fin = parseInt(document.getElementById("finInput").value);

            let resultado = sumEvenNumbers(inicio, fin);

            document.getElementById("resultado").textContent =
                "La suma de los números pares es: " + resultado;
        }
        

export { sumEvenNumbers,mostrarSuma,cargarActv7 };