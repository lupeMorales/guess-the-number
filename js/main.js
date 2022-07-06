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
  const maxNum = 100;
  const valuesDefault = /^[0-9]+$/;
  num = parseInt(inputNumber.value);

  if (num > random) {
    clue.innerHTML = "Demasiado alto";
    console.log("es mayor");
  } else if (num < random) {
    clue.innerHTML = "Demasiado bajo";
    console.log("es menos");
  } else if (num === random) {
    clue.innerHTML = "Has ganado, campeona!!!";
    console.log("Has ganado");
  } else if (num > maxNum) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    console.log("El num debe estar entre 1 y 100");
  } else if ((num = valuesDefault)) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    console.log("El num debe estar entre 1 y 100");
  }
}

function handleClick(ev) {
  ev.preventDefault();
  showCount();
  validateNum();
}

button.addEventListener("click", handleClick);
