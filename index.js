let numOne = 0;
let operator = "";
let numTwo = 0;
let result = 0;

// Selecting the container, input fields, and buttons
const container = document.querySelector(".container");

// Selecting the result display container
const calcDisplay = document.querySelector("#calc-display");

// Selecting the operator container and buttons
const opContainer = document.querySelector(".operatorContainer");
const userSelectOperation = opContainer.querySelectorAll('input');

// Selecting the number container and buttons
const numContainer = document.querySelector(".numberContainer");
const userSelectNumber = numContainer.querySelectorAll('input');

// Selecting the clear, backspace, and equals buttons
const userSelectClear = document.querySelector("#user-clear-display");
const userSelectBksp = document.querySelector("#user-bksp-display");
const userSelectEquals = document.querySelector("#user-result-display");

// Function to clear the display
function eraseBox() {
    calcDisplay.value = "";
}

// Function to reset the value of numOne to 0
function resetnumOneValue() {
    numOne = 0;
}

// Function to reset the value of the operator to an empty string
function resetOpsValue() {
    operator = "";
}

// Function to reset the value of numTwo to 0
function resetnumTwoValue() {
    numTwo = 0;
}

// Function to reset all values
function resetValues() {
    resetnumOneValue();
    resetOpsValue();
    resetnumTwoValue();
}

// Function to perform addition
function add(numOne, numTwo) {
    return Number(numOne) + Number(numTwo);
}

// Function to perform subtraction
function subtract(numOne, numTwo) {
    return Number(numOne) - Number(numTwo);
}

// Function to perform multiplication
function multiply(numOne, numTwo) {
    return Number(numOne) * Number(numTwo);
}

// Function to perform division
function divide(numOne, numTwo) {
    return Number(numOne) / Number(numTwo);
}

// Function to perform the operation based on the operator
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

// Function to handle the update of numbers based on the clicked button
function updateNumValue(event) {
    if (!operator) {
        updateNumOneValue(event);
    } else {
        updateNumTwoValue(event);
    }
}

// Function to update numOne value
function updateNumOneValue(event) {
    if (!numOne || numOne === Infinity) {
        resetnumOneValue();
        eraseBox();
    }

    if (event.target.value === ".") {
        if (numOne.toString().includes(".")) {
            return;
        }
        addDecimal(event);
        return;
    }

    numOne = numOne + event.target.value;
    updateDisplayValue(event);
    console.log(`numOne: ${Number(numOne)}`);
}

// Function to update numTwo value
function updateNumTwoValue(event) {
    if (!numTwo || numTwo === Infinity) {
        resetnumTwoValue();
        eraseBox();
    }

    if (event.target.value === ".") {
        if (numTwo.toString().includes(".")) {
            return;
        }
        addDecimal(event);
        return;
    }

    numTwo = numTwo + event.target.value;
    updateDisplayValue(event);
    console.log(`numTwo: ${Number(numTwo)}`);
}

// Function to update the operator value
function updateOperatorValue(event) {
    if ((isNaN(numOne) || numOne === 0 || numOne) && operator && numTwo) {
        computeValue();
        displayResult(result);
    }
    operator = event.target.value;
    console.log(`operator: ${operator}`);
}

// Function to add decimal point to the number
function addDecimal(event) {
    if (!operator) {
        numOne += ".";
        updateDisplayValue(event);
    } else {
        numTwo += ".";
        updateDisplayValue(event);
    }
}

// Function to update the display value
function updateDisplayValue(event) {
    calcDisplay.value += event.target.value;
}

// Function to display the result
function displayResult(result) {
    console.log("Result: " + result);
    calcDisplay.value = result;
}

// Function to compute the result of the operation
function computeValue() {
    console.log(`numOne: ${Number(numOne)} || operator: ${operator} || numTwo: ${Number(numTwo)}`);

    if (!numOne && !numTwo && !operator) {
        result = 0;
    } else if ((operate(operator, numOne, numTwo) === Infinity) || ((numOne === "NaN") && ((operator === "/") && (numTwo === 0)))) {
        result = "Error: Dividing by zero? Nice try.";
        numOne = NaN;
    } else if (numOne && !numTwo) {
        result = numOne;
    } else {
        numOne = operate(operator, numOne, numTwo);
        result = numOne;
    }

    resetOpsValue();
    resetnumTwoValue();
}

// Event listener for when the user wants to select a number from the keypad
userSelectNumber.forEach(numButton => {
    numButton.addEventListener('click', updateNumValue);
});

// Event listener for when the user wants to select the operator to perform the operation
userSelectOperation.forEach(opButton => {
    opButton.addEventListener('click', updateOperatorValue);
});

// Event listener for when the user wants to compute the result
userSelectEquals.addEventListener("click", function () {
    computeValue();
    displayResult(result);
});

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", function () {
    eraseBox();
    resetValues();
});