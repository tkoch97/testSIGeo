import { calcFactorial } from "./functions/calcFactorial.js";
import { calcMedia } from "./functions/calcMedia.js";
import { calcFibonacci } from "./functions/calcFibonacci.js";
import { calcEuclidiana } from "./functions/calcEuclideanDistance.js";

//Variables
const lesson1Input = document.querySelector('#lesson1NumberInput');
const lesson1Button = document.querySelector('#lesson1Button');
const lesson1Result = document.querySelector('#lesson1Result');

const lesson2Av1Input = document.querySelector('#lesson2Av1Input');
const lesson2Av2Input = document.querySelector('#lesson2Av2Input');
const lesson2Button = document.querySelector('#lesson2Button');
const lesson2Result = document.querySelector('#lesson2Result');

const lesson3EixoX1 = document.querySelector('#lesson3EixoX1');
const lesson3EixoX2 = document.querySelector('#lesson3EixoX2');
const lesson3EixoY1 = document.querySelector('#lesson3EixoY1');
const lesson3EixoY2 = document.querySelector('#lesson3EixoY2');
const lesson3Button = document.querySelector('#lesson3Button');
const lesson3Result = document.querySelector('#lesson3Result');

const lesson4Input = document.querySelector('#lesson4NumberInput');
const lesson4Button = document.querySelector('#lesson4Button');
const lesson4Result = document.querySelector('#lesson4Result');

//Events
lesson1Button.onclick = function(event) {
  event.preventDefault();

  let numberToCalc = parseInt(lesson1Input.value);

  try {
    let result = calcFactorial(numberToCalc);
    lesson1Result.innerText = `Resultado: o fatorial de ${numberToCalc} é ${result}`
  } catch(error) {
    lesson1Result.innerText = error.message;
  }
  lesson1Input.value = '';
}


lesson2Button.onclick = function(event) {
  event.preventDefault();

  let av1Value = parseInt(lesson2Av1Input.value);
  let av2Value = parseInt(lesson2Av2Input.value);

  try {
    let result = calcMedia(av1Value, av2Value);
    lesson2Result.innerText = result;
  } catch(error) {
    lesson2Result.innerText = error.message;
  }
  lesson2Av1Input.value = '';
  lesson2Av2Input.value = '';
}


lesson4Button.onclick = function(event) {
  event.preventDefault();
  
  let target = parseInt(lesson4Input.value);

  try {
    let result = calcFibonacci(target);
    lesson4Result.innerText = result;
  } catch(error) {
    lesson4Result.innerText = error.message;
  }
  lesson4Input.value = '';
}


lesson3Button.onclick = function(event) {
  event.preventDefault();
  
  let x1 = parseInt(lesson3EixoX1.value);
  let x2 = parseInt(lesson3EixoX2.value);
  
  let y1 = parseInt(lesson3EixoY1.value);
  let y2 = parseInt(lesson3EixoY2.value);

  try {
    let result = calcEuclidiana(x1, y1, x2, y2);
    lesson3Result.innerText = `Distância entre o Ponto 1 e o Ponto 2 é ${result}`
  } catch(error) {
    lesson3Result.innerText = error.message;
  }
}


















