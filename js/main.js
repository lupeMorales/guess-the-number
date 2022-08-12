"use strict";
const inputNumber = document.querySelector(".js-inputNum");
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const count = document.querySelector(".js-count");
const reset = document.querySelector(".js-reset");
const secretNum = document.querySelector(".js-secretNum");
const front = document.querySelector(".js-front");
const back = document.querySelector(".js-back");
let random = getRandom();

//la funcion genera un random al cargar pagina y la guarda en la variable random
function getRandom() {
  return Math.ceil(Math.random() * 100);
}

//pinto en html
function writeClue(message) {
  clue.innerHTML = message;
}
//valida el numero introducido por usuaria
function validateNum(num) {
  const maxNum = 101;

  num = parseInt(inputNumber.value);

  if (num >= maxNum || isNaN(num)) {
    writeClue("Introduce un número entre 1 y 100");
  } else if (num > random) {
    writeClue("Demasiado alto");
  } else if (num < random) {
    writeClue("Demasiado bajo");
  } else {
    writeClue("¡¡¡Has ganado, campeona!!!");
    rotateCard();
  }
}

// creo un contador de intentos con la variable acc
//la funcion showCount pinta ese contador en pantalla
let acc = 0;
function showCount() {
  acc = acc + 1;
  count.innerHTML = `Números de intentos: ${acc}`;
}
function attempt() {
  showCount();
  validateNum();
}
function resetCount() {
  acc = 0;
  count.innerHTML = `Números de intentos: ${acc}`;
}
function resetClue() {
  clue.innerHTML = "Pista: Escribe el número y dale a Prueba";
}

function handleClick(ev) {
  ev.preventDefault();
  attempt();
  setTimeout(resetInputNumber, 800);
}
function resetInputNumber() {
  inputNumber.value = "";
}
function handleClickReset() {
  resetCount();
  resetClue();
  random = getRandom();
  rotateCard();
  setTimeout(renderSecretNum, 1000);

  console.log(`random generado Reset: ${random}`);
}
function pressEnter(ev) {
  if (ev.keyCode === 13) {
    ev.preventDefault();
    attempt();
    return false;
  }
}
function rotateCard() {
  front.classList.toggle("rotate-front");
  back.classList.toggle("rotate-back");
}
function renderSecretNum() {
  secretNum.innerHTML = `${random}`;
}
//boton a la escucha
button.addEventListener("click", handleClick);
reset.addEventListener("click", handleClickReset);
inputNumber.addEventListener("keydown", pressEnter);

console.log(`random: ${random}`);
renderSecretNum();
