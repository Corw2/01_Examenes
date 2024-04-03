let ficha = "10";
let credito = ficha * 3; // Crédito inicial del jugador
let jugada = ficha;
var numero = document.querySelectorAll(".numero").values;
let rojo = document.querySelectorAll(".red")
let negro = document.querySelectorAll(".black")
let numPar = document.querySelectorAll(".par")
let numImpar = document.querySelectorAll(".impar")

console.log(numero);
//console.log(credito);
//console.log(rojo);
//console.log(negro);
//console.log(numPar);
//console.log(numImpar);

    function apostarNumero() {
        document.querySelectorAll("tableroRuleta")
        var numeroApostado = prompt("Ingrese un número del 1 al 36:");
        
        // Genera un número aleatorio entre 1 y 36
        var numeroGanador = Math.floor(Math.random() * 36) + 1; 
        document.getElementById("resultado").innerHTML= numeroGanador;
        
            if (numeroApostado == numeroGanador) {
                credito += 35; // Gana 35 fichas
                alert("¡Has ganado! Tu número era " + numeroGanador + ". Ahora tienes " + credito + " fichas.");
            } else {
                credito -= 1; // Pierde 1 ficha
                alert("Lo siento, has perdido. El número ganador era " + numeroGanador + ". Ahora tienes " + credito + " fichas.");
            }
        actualizarCredito();
    }

    function rotar(){
        document.getElementById("ruleta").onclick= rotate;


    }

    function apostarColor(colorApostado) {
        
        var colores = ["rojo", "negro"];
        
        // Elige un color aleatorio
        var colorGanador = colores[Math.floor(Math.random() * colores.length)]; 
        
            if (colorApostado === colorGanador) {
                credito += 2; // Gana 2 fichas
                alert("¡Has ganado! El color ganador era " + colorGanador + ". Ahora tienes " + credito + " fichas.");
            } else {
                credito -= 1; // Pierde 1 ficha
                alert("Lo siento, has perdido. El color ganador era " + colorGanador + ". Ahora tienes " + credito + " fichas.");
            }
        actualizarCredito();
    }

    function apostarParidad(paridadApostada) {
        
        var paridades = ["par", "impar"];
        
        var paridadGanadora = paridades[Math.floor(Math.random() * paridades.length)]; // Elige una paridad aleatoria
            if (paridadApostada === paridadGanadora) {
                credito += 2; // Gana 2 fichas
                alert("¡Has ganado! La paridad ganadora era " + paridadGanadora + ". Ahora tienes " + credito + " fichas.");
            } else {
                credito -= 1; // Pierde 1 ficha
                alert("Lo siento, has perdido. La paridad ganadora era " + paridadGanadora + ". Ahora tienes " + credito + " fichas.");
            }

        actualizarCredito();
    }

    function actualizarCredito() {
        
        document.getElementById("creditoJugador").textContent = "Crédito: " + credito + "€";
            
            if (credito <= 0) {
                alert("Te has quedado sin fichas. ¡Hasta la próxima!");
                // Aquí puedes agregar más lógica si quieres reiniciar el juego, volver al menú, etc.
            }
        
        
    }