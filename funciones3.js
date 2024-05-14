

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

    if (num1 === num2 && num1 === num3 && num1 === num4){
        document.getElementById("ver1").innerHTML = "Todos los valores ingresados son iguales."
    }
    else if (num1 !== num2 && num1 !== num3 && num1 === num4){
        document.getElementById("ver1").innerHTML = "Todos los valores ingresados son iguales."
    }

}
