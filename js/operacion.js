function operacion(num1,num2) {
  menorQue = (num1 < num2);
  mayorQue = (num1 > num2);
  igualQue = (num1 == num2);
  estricta = (num1 === num2);
  if (num1 === null || num2 === null) {
    return "No has ingresado los valores necesarios para realizar las Operaciones";
  } else {
    return ("Resultado de Menor que: " + menorQue + "\n" +
           "Resultado de Mayor que: " + mayorQue + "\n" +
           "Resultado de Igual que: " + igualQue + "\n" +
           "Resultado de Estrictamente igual: " + estricta);
  }
}

var num1 = prompt("ingresa tu primer numero para realizar las operaciones");
var num2 = prompt("ingresa un segundo numero para realizar las operaciones");

num1=parseInt(num1);
num2=parseInt(num2);

var reg1 = ("Tu primer valor ingresado es " + num1)

// document.getElementById("ejemplo1").innerHTML = operacion(num1,num2);
document.getElementById("registro1").innerHTML = reg1();