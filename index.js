let numOne = 0;
let operator = "";
let numTwo = 0;
let result = 0;

// Selecting the container, input fields, and buttons
// MAIN Container
const container = document.querySelector(".container");

// resultDisplayContainer
const calcDisplay = document.querySelector("#calc-display");

// operatorContainer
const opContainer = document.querySelector(".operatorContainer");
const userSelectOperation = opContainer.querySelectorAll('input');

// numberContainer
const numContainer = document.querySelector(".numberContainer");
const userSelectNumber = numContainer.querySelectorAll('input');

// modifyResultContainer
const userSelectDecimal = document.querySelector("#user-add-decimal");
const userSelectClear = document.querySelector("#user-clear-display");
const userSelectBksp = document.querySelector("#user-bksp-display");
const userSelectEquals = document.querySelector("#user-result-display");

function eraseBox() {
  calcDisplay.value = "";
}

function resetnumOneValue() {
  numOne = 0;
}

function resetOpsValue() {
  operator = "";
}

function resetnumTwoValue() {
  numTwo = 0;
}

function resetValues() {
  resetnumOneValue();
  resetOpsValue();
  resetnumTwoValue();
}

function add(numOne, numTwo) {
  return Number(numOne) + Number(numTwo);
}

function subtract(numOne, numTwo) {
  return Number(numOne) - Number(numTwo);
}

function multiply(numOne, numTwo) {
  return Number(numOne) * Number(numTwo);
}

function divide(numOne, numTwo) {
  return Number(numOne) / Number(numTwo);
}

function operate(operator, numOne, numTwo) {
  if (operator === "+") {
    return add(numOne, numTwo);
  }

  if (operator === "-") {
    return subtract(numOne, numTwo);
  }

  if (operator === "*") {
    return multiply(numOne, numTwo);
  }

  if (operator === "/") {
    return divide(numOne, numTwo);
  }
}

function updateNumValue(event) {
  if (!operator) {
    updateNumOneValue(event);
  } else {
    updateNumTwoValue(event);
  }
}

function updateNumOneValue(event) {
  if (!numOne || numOne === Infinity) {
    resetnumOneValue();
    eraseBox();
  }

  if (event.target.value === ".") {
    addDecimal();
    console.log("FUNC ADD DECIMAL NUM1");
    return;
  }

  console.log("FUNC NUM1");
  numOne = numOne + event.target.value;
  updateDisplayValue(event);
  console.log(`numOne: ${Number(numOne)}`);
}

function updateNumTwoValue(event) {
  if (!numTwo || numTwo === Infinity) {
    resetnumTwoValue();
    eraseBox();
  }

  if (event.target.value === ".") {
    addDecimal();
    console.log("FUNC ADD DECIMAL NUM2");
    return;
  }

  console.log("FUNC NUM2");
  numTwo = numTwo + event.target.value;
  updateDisplayValue(event);
  console.log(`numTwo: ${Number(numTwo)}`);
}

function updateOperatorValue(event) {
  operator = event.target.value;
  console.log(`operator: ${operator}`);
  eraseBox();
}

function addDecimal(event) {
  // Check which number the decimal has to be added to.
  if (!operator) {
    // Check if that number already has a decimal point, if yes then do not let the user enter more decimals.
    if (Number.isInteger(numOne)) {
      numOne += ".";
      updateDisplayValue(event);
    }
  } else {
    // Check if that number already has a decimal point, if yes then do nothing return.
    if (Number.isInteger(numTwo)) {
      numTwo += ".";
      updateDisplayValue(event);
    }
  }
}

function updateDisplayValue(event) {
  calcDisplay.value += event.target.value;
}

function computeValue(event) {
  console.log(`numOne: ${Number(numOne)} || operator: ${operator} || numTwo: ${Number(numTwo)}`);

  if (!numOne && !numTwo && !operator) {
    result = 0;
  } else if (operate(operator, numOne, numTwo) === Infinity) {
    result = "Error: Dividing by zero? Nice try.";
    numOne = NaN;
  } else if (numOne && !numTwo) {
    result = numOne;
  } else {
    numOne = operate(operator, numOne, numTwo);
    result = numOne;
  }

  console.log("Result: " + result);
  calcDisplay.value = result;

  resetOpsValue();
  resetnumTwoValue();
}

// Event listener for when the user wants to select a number from the keypad
userSelectNumber.forEach(numButton => {
  numButton.addEventListener('click', updateNumValue);
});

// Event listener for when the user wants to select the second number to perform operation on
userSelectOperation.forEach(opButton => {
  opButton.addEventListener('click', updateOperatorValue);
});

// Event listener for when the user wants to select the decimal key from the keypad
userSelectDecimal.addEventListener("click", addDecimal);

// Event listener for when the user wants to perform an operation with two numbers
userSelectEquals.addEventListener("click", function (event) {
  computeValue(event);
});

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", function () {
  eraseBox();
  resetValues();
});