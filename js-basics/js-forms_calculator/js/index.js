console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

const numberA = document.querySelector('[data-js="numberA"]');
const numberB = document.querySelector('[data-js="numberB"]');

const addition = document.querySelector('[data-js="adition"]');
const subtraction = document.querySelector('[data-js="subtraction"]');
const multiplication = document.querySelector('[data-js="multiplication"]');
const division = document.querySelector('[data-js="division"]');

const result = document.querySelector('[data-js="result"]');


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

const checkedOperatorSelected = form.querySelector(':checked');

const operator = checkedOperatorSelected.value;
console.log(numberA.value, numberB.value, operator);

valueNumberA = Number(numberA.value);
valueNumberB = Number(numberB.value);


if (operator === "addition") {
  result = add(valueNumberA, valueNumberB);
} else if (operator === "subtraction") {
  result = subtract(valueNumberA, valueNumberB);
}
else if (operator === "multiplication") {
  result = multiply(valueNumberA, valueNumberB);
}
else if (operator === "division") {
  result = divide(valueNumberA, valueNumberB);
}
else {
  result = "Invalid operator";
}



  // --^-- write your code here --^--
  
  resultOutput.textContent = result;
});


{/* 

switch (operator.value) {
  case "addition":
    result = add(numberA, numberB);
    break;
    case "subtract":
    result = subtract(numberA, numberB);
    break;
    case "multiply":
      result = multiply(numberA, numberB);
      break;
      case "divide":
    result = divide(numberA, numberB);
    break;
    default:
      result = "Invalid operator";
    }//
  */} 