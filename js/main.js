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
//*mejor pienso sería dividir funcion validar y funcion mostrar resultado de validacion en pantalla

function validateNum(num) {
  const maxNum = 101;
  const valuesDefault = /^[0-9]+$/;
  num = parseInt(inputNumber.value);

  if (num >= maxNum) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    console.log("El num debe estar entre 1 y 100");
  } else if ((num = valuesDefault)) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    console.log("El num debe estar entre 1 y 100");
  } else if (num > random) {
    clue.innerHTML = "Demasiado alto";
    console.log("es mayor");
  } else if (num < random) {
    clue.innerHTML = "Demasiado bajo";
    console.log("es menos");
  } else if (num === random) {
    clue.innerHTML = "Has ganado, campeona!!!";
    console.log("Has ganado");
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
