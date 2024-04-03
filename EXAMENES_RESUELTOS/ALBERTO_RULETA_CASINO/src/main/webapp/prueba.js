// Variables Globales
const botones = document.querySelectorAll(".btn");
const btnJugar = document.querySelector(".btnJugar");
const btnReiniciar = document.querySelector(".btnReiniciar");
let totalFichas = 500;
let resultadoRuleta;
let valorBoton;
let valorFila1, valorFila2, valorFila3;
let valorDocena1, valorDocena2, valorDocena3;
let valorBtPa, valorBtIn;
let valorBt1a18, valorBt19a36;
let valorBtRo, valorBtNe;

// Nueva variable para la tasa de cambio
const tasaDeCambio = 0.1; // Por ejemplo, 0.1 euros por ficha

// Variables Filas
const fila1 = document.querySelector(".f1btn2a1");
const fila2 = document.querySelector(".f2btn2a1");
const fila3 = document.querySelector(".f3btn2a1");

// Variables Docenas
const docena1 = document.querySelector(".btD1");
const docena2 = document.querySelector(".btD2");
const docena3 = document.querySelector(".btD3");

// Variables par / impar
const btPa = document.querySelector(".btPa");
const btIn = document.querySelector(".btIn");

// Variables mitad mitad
const bt1a18 = document.querySelector(".bt1-18");
const bt19a36 = document.querySelector(".bt19-36");

// Variables rojo / negro
const btRo = document.querySelector(".btRo");
const btNe = document.querySelector(".btNe");

// Funcion para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        const notificacion = new Notification(mensaje);
  
        // Cerrar automáticamente después de 1 segundo 
        setTimeout(() => {
          notificacion.close();
        }, 1500);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            mostrarNotificacion(mensaje); // Llamada recursiva después de obtener los permisos
          }
        });
      }
    }
}

// Función para generar el número aleatorio
function numeroRamdom() {
  return Math.floor(Math.random() * 36);
}

// Recorrer los botones y agregar evento click
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    valorBoton = boton.value;
    jugadaSeleccionada();
  });
});

// Función para restar fichas
function restarFicha(cantidad) {
  totalFichas -= cantidad;
  actualizarFichas();
}

// Función para recibir fichas
function recibirFichas(cantidad) {
  const montoGanado = cantidad * tasaDeCambio;
  totalFichas += cantidad;
  actualizarFichas(montoGanado);
}

// Función para actualizar el contador de fichas y dinero en la interfaz
function actualizarFichas(montoGanado) {
  document.getElementById("fichas").textContent = totalFichas;
  const dinero = totalFichas * tasaDeCambio;
  document.getElementById("dinero").textContent = dinero.toFixed(2); // Ajustar a dos decimales
}

// EventListener para reiniciar el juego
btnReiniciar.addEventListener("click", () => {
    mostrarNotificacion("JUEGO REINICIADO");
  // alert("REINICIANDO...");
  location.reload();
});

// COMPROBAR FILAS
function comprobarFilas() {
  const filas = [valorFila1, valorFila2, valorFila3];
  for (const fila of filas) {
    if (Array.isArray(fila) && fila.includes(resultadoRuleta)) {
      recibirFichas(36);
      actualizarFichas();
      mostrarNotificacion(`Has acertado la fila. La ruleta ha sacado el número ${resultadoRuleta}`);
      // console.log(`Has acertado la fila. La ruleta ha sacado el número ${resultadoRuleta}`);
      return;
    }
  }
  restarFicha(12);
  actualizarFichas();
  mostrarNotificacion(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
  // console.log(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
}

// COMPROBAR DOCENAS
function comprobarDocenas() {
  const docenas = [valorDocena1, valorDocena2, valorDocena3];
  for (const docena of docenas) {
    if (Array.isArray(docena) && docena.includes(resultadoRuleta)) {
      recibirFichas(36);
      actualizarFichas();
      mostrarNotificacion(`Has acertado en la docena. La ruleta ha sacado el ${resultadoRuleta}`);
      // console.log(`Has acertado en la docena. La ruleta ha sacado el ${resultadoRuleta}`);
      return;
    }
  }
  restarFicha(12);
  actualizarFichas();
  mostrarNotificacion(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
  // console.log(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
}

// COMPROBAR PAR / IMPAR
function comprobarParImpar() {
  const opciones = [valorBtPa, valorBtIn];
  for (const opcion of opciones) {
    if (Array.isArray(opcion) && opcion.includes(resultadoRuleta)) {
      recibirFichas(24);
      actualizarFichas();
      mostrarNotificacion(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
      // console.log(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
      return;
    }
  }
  restarFicha(12);
  actualizarFichas();
  mostrarNotificacion(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
  // console.log(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
}

// COMPROBAR NUMEROS BAJOS Y NUMEROS ALTOS
function comprobarBajosAltos() {
  const opciones = [valorBt1a18, valorBt19a36];
  for (const opcion of opciones) {
    if (Array.isArray(opcion) && opcion.includes(resultadoRuleta)) {
      recibirFichas(36);
      actualizarFichas();
      mostrarNotificacion(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
      // console.log(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
      return;
    }
  }
  restarFicha(18);
  actualizarFichas();
  mostrarNotificacion(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
  // console.log(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
}

// COMPROBAR COLOR ROJO O NEGRO
function comprobarColor() {
  const opciones = [valorBtRo, valorBtNe];
  for (const opcion of opciones) {
    if (Array.isArray(opcion) && opcion.includes(resultadoRuleta)) {
      recibirFichas(24);
      actualizarFichas();
      mostrarNotificacion(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
      // console.log(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
      return;
    }
  }
  restarFicha(12);
  actualizarFichas();
  mostrarNotificacion(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
  console.log(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
}

// EventListener // Variables filas
fila1.addEventListener("click", () => {
  valorFila1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
});

fila2.addEventListener("click", () => {
  valorFila2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
});

fila3.addEventListener("click", () => {
  valorFila3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
});

// EventListener // Variables docenas
docena1.addEventListener("click", () => {
    valorDocena1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  });
  
  docena2.addEventListener("click", () => {
    valorDocena2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  });
  
  docena3.addEventListener("click", () => {
    valorDocena3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  });
  
  // EventListener // Variables par / impar
  btPa.addEventListener("click", () => {
    valorBtPa = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
  });
  
  btIn.addEventListener("click", () => {
    valorBtIn = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
  });
  
  // EventListener // Variables mitad mitad
  bt1a18.addEventListener("click", () => {
    valorBt1a18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  });
  
  bt19a36.addEventListener("click", () => {
    valorBt19a36 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  });
  
  // EventListener // Variables rojo / negro
  btRo.addEventListener("click", () => {
    valorBtRo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  });
  
  btNe.addEventListener("click", () => {
    valorBtNe = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
  });

// Reiniciar los valores de las elecciones
function reiniciarEleccion() {
  valorBoton = null;
  valorDocena1 = null;
  valorDocena2 = null;
  valorDocena3 = null;
  valorFila1 = null;
  valorFila2 = null;
  valorFila3 = null;
  valorBtPa = null;
  valorBtIn = null;
  valorBt1a18 = null;
  valorBt19a36 = null;
  valorBtRo = null;
  valorBtNe = null;
}

// Función para ejecutar cuando se seleccione una ficha
function jugadaSeleccionada() {
    mostrarNotificacion(`Has seleccionado la ficha: ${Array.isArray(valorBoton) ? valorBoton.join(", ") : valorBoton}`);
}


// EventListener para cuando se pulse el botón de jugar
btnJugar.addEventListener("click", () => {
	
	if (totalFichas < 1) {
    	mostrarNotificacion("No tienes fichas sufucientes para jugar. Por favor, reinicia el juego.");
    	return;
  	}

  	if (valorBoton == null) {
    	mostrarNotificacion("¡Error! Debes seleccionar una ficha para poder jugar");
    	return;
  	}
  

  	resultadoRuleta = numeroRamdom();


  	mostrarNotificacion(`Jugando la ficha... ${Array.isArray(valorBoton) ? valorBoton.join(", ") : valorBoton}`);

  	setTimeout(() => {
		  
    	if (valorDocena1 || valorDocena2 || valorDocena3) {
			
      		if (totalFichas < 12) {
        		mostrarNotificacion("No tienes suficientes fichas para jugar. Por favor, reinicia el juego.");
      		} else {
        		comprobarDocenas();
      		}
    		} else if (valorFila1 || valorFila2 || valorFila3) {
      			if (totalFichas < 18) {
        			mostrarNotificacion("No tienes suficientes fichas para jugar. Por favor, reinicia el juego.");
      		} else {
        		comprobarFilas();
      		}
    		} else if (valorBtPa || valorBtIn) {
      			if (totalFichas < 18) {
        			mostrarNotificacion("No tienes suficientes fichas para jugar. Por favor, reinicia el juego.");
      		} else {
        		comprobarParImpar();
      		}
    		} else if (valorBt1a18 || valorBt19a36) {
      			if (totalFichas < 18) {
        			mostrarNotificacion("No tienes suficientes fichas para jugar. Por favor, reinicia el juego.");
      		} else {
        		comprobarBajosAltos();
      		}
    		} else if (valorBtRo || valorBtNe) {
      			if (totalFichas < 18) {
        			mostrarNotificacion("No tienes suficientes fichas para jugar. Por favor, reinicia el juego.");
      		} else {
        		comprobarColor();
      		}
    		} else if (valorBoton == resultadoRuleta) {
			      recibirFichas(36);
			      actualizarFichas();
			      mostrarNotificacion(`Has acertado la ficha. La ruleta ha sacado el ${resultadoRuleta}`);
    		} else {
			      restarFicha(1);
			      actualizarFichas();
			      mostrarNotificacion(`Has perdido. La ruleta ha sacado el ${resultadoRuleta}`);
    		}

    		reiniciarEleccion();
    		
  	}, 1500);
  	
});
