var texto1;
var texto2;
var numero1;
var numero2;
var concatenar;
var resultado;

var promedio;

var firstTexto1;
var lastTexto1;

var firstTexto2;
var lastTexto2;


function obtenerLargoTextos(){

        texto1 = document.getElementById("texto1").value;
        texto2 = document.getElementById("texto2").value;
        concatenar = texto1.length + texto2.length;


        resultado = document.getElementById("resultado").innerHTML = "El largo de los textos es " + concatenar;

         
}


function obtenerPromedio(){

    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);

    promedio = numero1/numero2;

    if(texto1 && texto2 && numero1 && numero2) {

        if(promedio>concatenar){
            resultado = document.getElementById("resultado").innerHTML = "El promedio es mayor ya que el largo de los textos es "  
            + concatenar + " y el promedio es " + promedio.toFixed(2);
        }else if(promedio<concatenar){
            resultado = document.getElementById("resultado").innerHTML = "El promedio es menor ya que el largo de los textos es "  
            + concatenar + " y el promedio es " + promedio.toFixed(2);
        }else if(promedio===concatenar){
            resultado = document.getElementById("resultado").innerHTML = "Los valores son iguales ya que el largo de los textos es "  
            + concatenar + " y el promedio es " + promedio.toFixed(2);
        }

    } else {
        alert("Porfavor llenar todos los campos")
    }
        
    

}

function formarTexto(){
    // primer texto
    texto1 = document.getElementById("texto1").value;
    firstTexto1 = texto1[0];
    lastTexto1 = texto1.charAt(texto1.length -1);

    // ultimo texto
    texto2 = document.getElementById("texto2").value;
    firstTexto2 = texto2[0];
    lastTexto2 = texto2.charAt(texto2.length -1);


        resultado = document.getElementById("resultado").innerHTML = "Palbra formada " + 
        firstTexto1 + lastTexto1 + firstTexto2 + lastTexto2 + promedio;

   
    
}

