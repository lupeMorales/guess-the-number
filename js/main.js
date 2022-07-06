"use strict";
const inputNumber = document.querySelector(".js-inputNum");
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const count = document.querySelector(".js-count");

// creo un contador de intentos con la variable acc
//la funcion showCount pinta ese contador en pantalla
let acc = 0;
function showCount() {
  acc = acc + 1;
  count.innerHTML = `Números de intentos: ${acc}`;
  console.log(`contador: ${acc}`);
}
//la funcion genera un random al cargar pagina y la guarda en la variable random
function getRandom() {
  return Math.ceil(Math.random() * 100);
}
const random = getRandom();
console.log(`random: ${random}`);

//compruebo num introducido por usuaria y pinto en html los resultados de la comprobacion

function writeClue(message) {
  clue.innerHTML = message;
}

function validateNum(num) {
  const maxNum = 101;

  num = parseInt(inputNumber.value);
  debugger;
  if (num >= maxNum) {
    writeClue("El num debe estar entre 1 y 100");
  } else if (isNaN(num)) {
    writeClue("El número debe estar entre 1 y 100");
  } else if (num > random) {
    writeClue("Demasiado alto");
  } else if (num < random) {
    writeClue("Demasiado bajo");
  } else if (num === random) {
    writeClue("Has ganado, campeona!!!");
  }
}
// funcion manejadora del boton
function handleClick(ev) {
  ev.preventDefault();
  showCount();
  validateNum();
}
//boton a la escucha
button.addEventListener("click", handleClick);
