// Declaro una variable dinero y le asigna el valor inicial de 3.
// Esta variable representa el saldo del jugador en el juego.
let dinero;

function saldo() {
    document.getElementById("dinero").innerHTML=saldo

    if (dinero === saldo) {
        dinero = 3;
                // Comprueba si la carta seleccionada es igual al Joker.
    if (cartaJoker === cartaGanadora) {
        alert("¡Enhorabuena! Has encontrado el Joker.");
        dinero++;

    } else {
        alert("Perdiste. Show me the Money.");
        dinero--;
            // Verifica si el dinero llega a cero y muestra una alerta.
            if (dinero === 0) {
                alert("¡Has perdido todo tu dinero! Juego terminado.");
                // Puedes agregar más acciones aquí si deseas reiniciar el juego o realizar alguna otra acción.
            }
    }
        
    }



}

// Esta función se ejecuta cuando se hace clic en una carta.
// Recibe el índice de la carta seleccionada como parámetro.
function cartaSelec(cartaGanadora) {
        // Selecciono todas las cartas del juego.
    const cartaTrasera = document.querySelectorAll('.carta');

    // Genera un número aleatorio entre 0 y 2 
    // para representar la posición del Joker.
    const cartaJoker = Math.floor(Math.random() * 3);      
    
    // Inicializamos la variable dinero si aún no tiene un valor asignado.
    

   

 

    // Actualiza el texto del saldo mostrado en la página.
    document.getElementById('dinero').innerHTML = dinero;


    for (let i = 0; i < cartaTrasera.length; i++) {
        cartaTrasera[i].innerHTML = '<img src="img/trasera.jpg" alt="cartaTrasera">';
    }
    
    // Muestra la imagen del Joker en la posición aleatoria.
    cartaTrasera[cartaJoker].innerHTML = '<img src="img/joker.jpg" alt="Joker">';



    //  setTimeout(() => {
    //      cartaTrasera[cartaJoker].innerHTML = '<img src="../webapp/img/joker.jpg" alt="Joker">';
    //      cartaTrasera[cartaAs].innerHTML = '<img src="../webapp/img/trebol.jpg" alt="cartaAs">';
    
    //  }, 1);

}



function volverJugar() {



}

function reloadPage() {
    // Reiniciamos la variable dinero al valor inicial.
    dinero = 3;
    // Recargamos la página.
    location.reload();
}
