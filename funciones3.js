

function primeraOperacion(){
let num1 = parseFloat(document.getElementById("num1").value);
let num4 = parseFloat(document.getElementById("num4").value);
let num2 = parseFloat(document.getElementById("num2").value);
let num3 = parseFloat(document.getElementById("num3").value);
let suma = num1 + num2;
let multi = num3 * num4;

if (suma > multi){
    document.getElementById("ver1").innerHTML = "La suma de los 2 prmeros numeros es mayor que el producto de los 2 ultimos."
}
else if(suma < multi){
    document.getElementById("ver1").innerHTML = "La suma de los 2 prmeros numeros es menor que el producto de los 2 ultimos."
}

else if(suma === multi){
    document.getElementById("ver1").innerHTML = "La suma de los 2 prmeros numeros es igual que el producto de los 2 ultimos."
}
else{
    document.getElementById("ver1").innerHTML = "error. Numeros no introducidos correctamente."
}
}


 function segundaOperacion(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if(num1 === num2 && num1 === num3 && num1 === num4){
        document.getElementById("ver1").innerHTML = "Todos los valores ingresados son iguales."
    }
    else if(num1 !== num2 && num1 !== num3 && num1 !== num4 && num2 !== num3 && num2 !== num4 && num3 !== num4){
        document.getElementById("ver1").innerHTML = "Todos los numeros son diferentes."
    }
    else{
        document.getElementById("ver1").innerHTML = "Uno o mas numeros son diferentes."
    }
}


function tercerOperacion(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    let sumaPromedio = (num1 + num2 + num3 + num4) / 4;

    const numerosPares = [];

  for (let num = 2; num <= sumaPromedio; num += 2) {
    // revisar si el numero actual es un numero par.
    if (num % 2 === 0) {
      numerosPares.push(num);
    }
  }

  document.getElementById("ver1").innerHTML = " Los numero pares entre el 2 y el promedio son: " + numerosPares;

}
