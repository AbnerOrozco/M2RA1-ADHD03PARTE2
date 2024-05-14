/// 1 DE INDEX CONCATENAR TEXTOS
function concatenar() {
    // Obtener los valores de los campos de texto
    var valor1 = document.getElementById("txtValor1").value;
    var valor2 = document.getElementById("txtValor2").value;
    var valor3 = document.getElementById("txtValor3").value;
    var valor4 = document.getElementById("txtValor4").value;
    var valor5 = document.getElementById("txtValor5").value;

    // Concatenar los textos
    var resultadoConcatenado = valor1 + " " + valor2 + " " + valor3 + " " + valor4 + " " + valor5;

    // Mostrar el resultado en el elemento con id "resultadoC"
    document.getElementById("resultadoC").textContent = "Resultado concatenado: " + resultadoConcatenado;
}


/// 2 DE INDEX COMPARAR LONGITUD DE TEXTO
function compararTextos() {
    // Obtener los valores de los textos ingresados
    var texto1 = document.getElementById("txtValor1").value;
    var texto2 = document.getElementById("txtValor2").value;
    var texto3 = document.getElementById("txtValor3").value;
    var texto4 = document.getElementById("txtValor4").value;
    var texto5 = document.getElementById("txtValor5").value;

    // Crear un array con los textos
    var textos = [texto1, texto2, texto3, texto4, texto5];

    // Encontrar el texto más largo
    var textoMasLargo = textos.reduce(function (textoAnterior, textoActual) {
        return textoAnterior.length > textoActual.length ? textoAnterior : textoActual;
    });

    // Mostrar el resultado
    mostrarResultado("El texto más largo es: " + textoMasLargo);
}

function mostrarResultado(resultado) {
    // Mostrar el resultado en el elemento con id "resultadoM"
    document.getElementById("resultadoM").textContent = "Resultado: " + resultado;
}


/// 3 INDEX CAPTURAR SOLO LA ULTIMA LETRA DE CADA TEXTO PARA FORMAR UNA PALABRA
function formarPalabra() {
    // Obtener las últimas letras de cada texto ingresado
    var letra1 = document.getElementById("txtValor1").value.slice(-1);
    var letra2 = document.getElementById("txtValor2").value.slice(-1);
    var letra3 = document.getElementById("txtValor3").value.slice(-1);
    var letra4 = document.getElementById("txtValor4").value.slice(-1);
    var letra5 = document.getElementById("txtValor5").value.slice(-1);

    // Formar la palabra con las últimas letras
    var palabraFormada = letra1 + letra2 + letra3 + letra4 + letra5;

    // Mostrar el resultado en el elemento con id "resultadoP"
    document.getElementById("resultadoP").textContent = "Resultado: " + palabraFormada;
}