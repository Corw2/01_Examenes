document.addEventListener("DOMContentLoaded", function () {
  alert("DOM cargado");
  setInterval(setRandomBodyColor, 1000);
});

function setRandomBodyColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
