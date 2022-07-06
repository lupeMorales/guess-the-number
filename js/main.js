"use strict";
const inputNumber = document.querySelector(".js-inputNum");
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const count = document.querySelector(".js-count");

let acc = 0;
function showCount() {
  acc = acc + 1;
  count.innerHTML = `Números de intentos: ${acc}`;
  console.log(`contador: ${acc}`);
}

function getRandom() {
  return Math.ceil(Math.random() * 100);
}

const random = getRandom();
console.log(`random: ${random}`);
function validateNum(num) {
  num = parseInt(inputNumber.value);

  if (num > random) {
    clue.innerHTML = "Demasiado alto";
    console.log("es mayor");
  } else if (num < random) {
    clue.innerHTML = "Demasiado bajo";
    console.log("es menos");
  } else if (num === random) {
    clue.innerHTML = "Has ganado, campeona!!!";
    console.log("es menos");
  } else if (num > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    console.log("revisa num");
  }
}

function handleClick(ev) {
  ev.preventDefault();
  showCount();
  validateNum();
}

button.addEventListener("click", handleClick);
