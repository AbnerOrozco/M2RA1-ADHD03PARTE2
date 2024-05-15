function operacionSeleccionada(operacion) {
    const numero1 = parseFloat($("#numero1").val());
    const numero2 = parseFloat($("#numero2").val());
    const numero3 = parseFloat($("#numero3").val());
    const numero4 = parseFloat($("#numero4").val());
  
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
      alert("Por favor, introduzca solo números válidos.");
      return;
    }
  
    let resultado = "";
    switch(operacion) {

        //CALCULAR EL PROMEDIO
        case "promedio":
            const promedio = (numero1 + numero2 + numero3 + numero4) / 4;
            resultado = `El promedio es de: ${promedio.toFixed(2)}`;
            break;

        //INDICAR SI LOSVALORS SON IGUALES O DIFERENTES
        case "indicarValores":
            if (numero1 === numero2 && numero2 === numero3 && numero3 === numero4) {
                resultado = "Todos los números son iguales";
            } else {
                resultado = "Los números son diferentes";
            }
            break;

        //MOSTRAR EL VALOR MAYOR
        case "valorMayor":
            let valorMayor = Math.max(numero1, numero2, numero3, numero4);
            resultado = `El valor mayor es: ${valorMayor}`;
            break;
        default:
            alert("Operación no válida");
            return;
    }
  
    $("#resultado").text(resultado);
    $("#txt-resultado").hide(); 
}
