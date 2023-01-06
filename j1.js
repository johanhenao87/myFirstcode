function saludo(nombre) {
  if (nombre == "") {
    return "debes proporcionar tu nombre";
 }else {
    return "hola " + nombre + " Bienvenido a tu primer codigo";
  }
}

var nombre = prompt("ingresa tu nombre");

document.getElementById("mensaje").innerHTML = saludo(nombre);