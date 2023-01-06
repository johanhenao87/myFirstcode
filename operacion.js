function operacion(num1, num2) {
  const resultados = {
    menorQue: (num1 < num2),
    mayorQue: (num1 > num2),
    igualQue: (num1 == num2),
    estricta: (num1 === num2)
  };

	if (isNaN(num1) || isNaN(num2)) {
    	return "Por favor ingresar solo números";
  }else{
  		return `<br>El número ${num1} es menor que ${num2}: ${resultados.menorQue}
          <br>El número ${num1} es mayor que ${num2}: ${resultados.mayorQue}
          <br>El número ${num1} es igual que ${num2}: ${resultados.igualQue}
          <br>El número ${num1} es estrictamente igual que ${num2}: ${resultados.estricta}`;
	}
}

var num1 = prompt("ingresa tu primer numero para realizar las operaciones");
var num2 = prompt("ingresa un segundo numero para realizar las operaciones");

num1=parseInt(num1);
num2=parseInt(num2);




document.getElementById("ejemplo1").innerHTML = operacion(num1, num2);
document.getElementById("reg1").innerHTML = `Tu primer valor ingresado es ${num1}`;
document.getElementById("reg2").innerHTML = `El segundo valor ingresado es ${num2}`;
