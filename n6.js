 function cargarActv6() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
    <br><br>

    <hr width="60%">
    <h3> cuenta regresiva </h3>
    <hr width="60%">

    <br><br>

    <label for="limiteInput"> Ingrese el Número límite: </label>
    <input type="number" id="limiteInput">

    <button id="countdown"> Mostrar Numeros impares </button>

    <br><br>
    `); document.getElementById("procesarLimite").addEventListener('click', procesarLimite);
}



function countdown(number) {
            let resultado = "";

            for (let i = number; i >= 0; i--) {
                resultado += i + " ";
            }

            return resultado;
        }

        function procesarNumero() {
            let numero = parseInt(document.getElementById("numeroInput").value);

            let texto = countdown(numero);

            document.getElementById("resultado").innerHTML =
                "Cuenta regresiva: " + texto;
        }

       

export { countdown,procesarNumero,cargarActv6 };