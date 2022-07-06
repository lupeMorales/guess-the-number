"use strict";
const inputNumber = document.querySelector(".js-inputNum");
const button = document.querySelector(".js-btn");
const clue = document.querySelector(".js-clue");
const count = document.querySelector(".js-count");

let acc = 0;
function showCount() {
  acc = acc + 1;
  count.innerHTML = `Números de intentos: ${acc}`;
  console.log(acc);
}

function getRandom() {
  return Math.ceil(Math.random() * 100);
}
console.log(`random: ${getRandom()}`);

function validateNum(num) {
  num = inputNumber.value;
  const random = getRandom();
  if (num > random) {
    console.log("es mayor");
  } else if (num < random) {
    console.log("es menos");
  }
}

function handleClick(ev) {
  ev.preventDefault();
  showCount();
  validateNum();
  console.log("click button");
}

button.addEventListener("click", handleClick);
