function saludo(nombre) {
  if (nombre == "") {
    return "debes proporcionar tu nombre";
  }else {
    	return "Hola " + nombre + " Bienvenido a tu primer codigo";
    	}
}

var nombre = prompt("ingresa tu nombre");

function aNacimiento(year){
	if(year == null){
		return "No has proporcionado tu año de nacimiento";
	}else{
		var resultado = (2023-year)
		return "Tu edad actual es " + resultado +" años";
	}
}

var year = prompt("Ingresa tu año de nacimiento ");
year = parseInt(year); 

document.getElementById("saludando").innerHTML = saludo(nombre);
document.getElementById("edad").innerHTML = aNacimiento(year);