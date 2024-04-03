const esSeguro = "password";
const noSeguro = "text";

var cajaPassword;

function f_inicio() {
	 cajaPassword = document.getElementById("password");
}

function f_ver() {
	
	if(esSeguro === cajaPassword.type) {
	// CAMBIAR DE NO VISIBLE A VISIBLE (no seguro).
		cajaPassword.type = noSeguro;
		return;					
	}
	// CAMBIAR DE VISIBLE A NO VISIBLE (seguro).
		cajaPassword.type = esSeguro;
			
}

function f_actualizarCapaFichero() {
	// Obtener el campo de tipo "file"
	var campoFile = document.getElementById("campoFile");

	// Crear un evento de cambio
	var changeEvent = new Event("change");

	// Disparar el evento de cambio en el campo de tipo "file"
	campoFile.dispatchEvent(changeEvent);

	// Resto de la función...

	// ESCRIBIR EL NOMBRE DEL FICHERO SELECCIONADO EN LA CAPA DE TIPO SPAN
	// (sólo es para ver su nombre).
	var ficherosSeleccionados = campoFile.files;

	// COMPROBAR SI SE HA SELECCIONADO ALGÚN FICHERO:
	if (ficherosSeleccionados.length == 0) {
	  alert("!! ERROR. NO HAS SELECCIONADO NINGUN FICHERO !!");
	  return false;
	}

	// OK, FICHERO DETECTADO. ENVIAR AL SERVIDOR:
	var nombreFichero = ficherosSeleccionados[0].name;

	//alert("NOMBRE DEL FICHERO SELECCIONADO ... " + nombreFichero);
	document.getElementById("capaNombreFichero").innerText = nombreFichero;
	return true;
  }

// function addStudy() {
// 	// Add nueva titulacion 
// }

// function addExperiencia() {
// 	// Add nueva Experiencia
// }
