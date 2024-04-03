document.addEventListener("DOMContentLoaded", function () {
  //   alert("DOM cargado");
  updateMoney(0);
  initGame();
  playingGame();
});

// **** CHEQUEAR PORQUE CUANDO SE ACIERTA 3 LINEAS ME PAGA 4

var money = 0;
let sumWins=0;

const span1 = document.getElementById("symbol1");
const span2 = document.getElementById("symbol2");
const span3 = document.getElementById("symbol3");
const span4 = document.getElementById("symbol4");
const span5 = document.getElementById("symbol5");
const span6 = document.getElementById("symbol6");
const span7 = document.getElementById("symbol7");
const span8 = document.getElementById("symbol8");
const span9 = document.getElementById("symbol9");

//MIS SIMBOLOS

const arraySymbols = ["☢", "♛", "∞", "☠"];

//GANANCIAS

const win = () => {
	let sumMoney = 0;
  if (
    span1.textContent === span2.textContent &&
    span2.textContent === span3.textContent
  ) sumMoney += 50;
   
  if (
    span4.textContent === span5.textContent &&
    span5.textContent === span6.textContent
  ) sumMoney += 50;
  
  if (
    span7.textContent === span8.textContent &&
    span8.textContent === span9.textContent
  ) sumMoney += 50;
 
  if (
    span1.textContent === span4.textContent &&
    span4.textContent === span7.textContent
  ) sumMoney += 50;
  
  if (
    span2.textContent === span5.textContent &&
    span5.textContent === span8.textContent
  ) sumMoney += 50;
   
  if (
    span3.textContent === span6.textContent &&
    span6.textContent === span9.textContent
  ) sumMoney += 50;
   
  if (
    span1.textContent === span5.textContent &&
    span5.textContent === span9.textContent
  ) sumMoney += 50;
   
  if (
    span3.textContent === span5.textContent &&
    span5.textContent === span7.textContent
  ) sumMoney += 50;
  else {
    console.log("no ha ganado");
    sumMoney +=  0;
  }
  return sumMoney;
};

const showUpWins = () => {
	sumWins=0;
  if (
    span1.textContent === span2.textContent &&
    span2.textContent === span3.textContent
  ) sumWins += 50;
  
  if (
    span4.textContent === span5.textContent &&
    span5.textContent === span6.textContent
  ) sumWins += 50;
   
  if (
    span7.textContent === span8.textContent &&
    span8.textContent === span9.textContent
  ) sumWins += 50;
   
  if (
    span1.textContent === span4.textContent &&
    span4.textContent === span7.textContent
  ) sumWins += 50;
   
  if (
    span2.textContent === span5.textContent &&
    span5.textContent === span8.textContent
  )  sumWins += 50;
   
  if (
    span3.textContent === span6.textContent &&
    span6.textContent === span9.textContent
  ) sumWins += 50;
  
  if (
    span1.textContent === span5.textContent &&
    span5.textContent === span9.textContent
  ) sumWins += 50;
   
  if (
    span3.textContent === span5.textContent &&
    span5.textContent === span7.textContent
  ) sumWins += 50;
  else {
    console.log("no ha ganado");
    sumWins += 0;
  }
  return sumWins;
};

//COMPARANDO GANANCIAS - Intentando implementar esto

// const updateWins = () => {
//   //   console.log("entra en updateWins");
//   console.log(money, "money actual");
//   let diff = win() - money;
//   document.getElementById("win").innerHTML = diff;
// };

//ROTANDO LOS SPANS
const rotateSpans = () => {
  const allSpans = document.querySelectorAll(".roller span");
  allSpans.forEach((span) => {
    span.style.transition = "transform 1s";
    span.style.transform = "rotate(360deg)";
  });

  setTimeout(() => {
    allSpans.forEach((span) => {
      span.style.transform = "";
    });
  }, 4000);
};

//INICIANDO JUEGO

const initGame = () => {
  //   console.log("iniciando juego");
  for (let i = 1; i <= 9; i++) {
    const randomSymbol =
      arraySymbols[Math.floor(Math.random() * arraySymbols.length)];
    const span = `symbol${i}`;
    document.getElementById(span).innerHTML = randomSymbol;
  }
};

//JUGANDO JUEGO

const playGame = () => {
  //   console.log("iniciando juego");
  rotateSpans();
  for (let i = 1; i <= 9; i++) {
    const randomSymbol =
      arraySymbols[Math.floor(Math.random() * arraySymbols.length)];
    const span = `symbol${i}`;
    document.getElementById(span).innerHTML = randomSymbol;
  }
  costRound();
  money += win();
  // updateWins();
  document.getElementById("money").innerHTML = money;
  console.log("Pasa por Playgame");
  console.log(showUpWins(), "Esto es showUpWins!!!!");
  console.log(parseMyWins(showUpWins()), "que son las dos funciones?");
  let myWin = showUpWins();
  myWin==0 ? myWin = -25 : myWin;
  console.log(myWin, "que es myWin");
  document.getElementById("wins").textContent = parseMyWins(myWin);
  console.log(document.getElementById("wins").textContent, "esto es el value de wins");
  document.getElementById("wins").textContent <= 0 ? document.getElementById("wins").style.color = "red" :document.getElementById("wins").style.color = "green";
};

const playingGame = () => {
  //   console.log("Entra en playinggme");
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    if (money <= 0 || money < 10) {
      alert("No tienes dinero");
      hideDeposit();
      return;
    } else {
      playGame();
    }
    // console.log("Event de girar");
  });
};

// Parse para ganancias

const parseMyWins = (wins) => {
	console.log("Que es wins? ", wins);
	sumWins = wins;
	console.log(sumWins, "que es sumWins de parse");
	return sumWins;
}

//DEPOSITANDO

const deposit = () => {
  const amount = parseInt(document.getElementById("deposit").value);
  //   console.log("entra en depositar, cuyo valor de amount es: ", amount);
  checkDeposit(amount);
  resetDepositValue();
  hideDeposit();
};

const resetDepositValue = () => {
  document.getElementById("deposit").value = "";
  //   console.log("entra en resetDepositValue");
};

const updateMoney = (amount) => {
  //   console.log("entra en updateMoney");
  money += amount;
  document.getElementById("money").innerHTML = money;
  console.log(money);
};

const checkDeposit = (amount) => {
  if (amount > 0) {
    updateMoney(amount);
  } else {
    alert("Ingresa un valor mayor a 0");
  }
};

const costRound = () => {
  console.log("entra en costRound");
  money = money - 25;
};

// Eliminar o insertar deposito

const hideDeposit = () => {
  console.log("entra en hideDeposit");
  const deposit = document.querySelector(".deposit-container");
  if (deposit.style.display === "none") {
    deposit.style.display = "block";
  } else {
    deposit.style.display = "none";
  }
};

// Realizar transferencia

document.getElementById("transferir").addEventListener("click", function () {
  const transferOverlay = document.createElement("div");
  transferOverlay.id = "transfer-overlay";
  transferOverlay.style.cssText =
    "position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.7); display: flex; align-items: center; justify-content: center; z-index: 1000;";

  const transferBox = document.createElement("div");
  transferBox.style.cssText =
    "background: black; padding: 20px; border-radius: 5px; text-align: center;";

  const transferText = document.createElement("p");
  transferText.textContent =
    "Por favor, introduce la cantidad que deseas donar:";

  const transferInput = document.createElement("input");
  transferInput.type = "number";
  transferInput.id = "transfer-amount";
  transferInput.min = "1";
  transferInput.style.margin = "10px";

  const transferButton = document.createElement("button");
  transferButton.textContent = "Transferir";
  transferButton.addEventListener("click", function () {
    const amount = document.getElementById("transfer-amount").value;
    if (amount) {
      updateMoney(-amount);
      alert(
        "Tu transferencia ha sido realizada con exito. " + amount + " Euros."
      );
      document.body.removeChild(transferOverlay);
    } else {
      alert(
        "Por favor, introduce una cantidad válida para transferir a tu cuenta."
      );
    }
  });

  const closeButton = document.createElement("button");
  closeButton.textContent = "Cerrar";
  closeButton.addEventListener("click", function () {
    document.body.removeChild(transferOverlay);
  });

  transferBox.appendChild(transferText);
  transferBox.appendChild(transferInput);
  transferBox.appendChild(transferButton);
  transferBox.appendChild(closeButton);
  transferOverlay.appendChild(transferBox);
  document.body.appendChild(transferOverlay);
});

document.querySelector(".deposit-button").addEventListener("click", deposit);
