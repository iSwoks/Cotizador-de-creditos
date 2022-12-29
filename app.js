function calcularCredito() {
  // Obtener los valores del formulario
  var monto = document.getElementById("monto").value;
  var interes = document.getElementById("interes").value;
  var plazo = document.getElementById("plazo").value;

  // Calcular el pago mensual
  var pagoMensual = (monto * interes) / (1 - Math.pow(1 + interes, -plazo));

  // Mostrar el resultado en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML =
    "El pago mensual es de $" + pagoMensual.toFixed(2);
}
