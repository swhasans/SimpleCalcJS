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

function updateOperatorValue(event) {
    if ((isNaN(numOne) || numOne === 0 || numOne) && operator && numTwo) {
        computeValue(event);
        displayResult(result);
    }
        operator = event.target.value;
        console.log(`operator: ${operator}`);
}

function addDecimal(event) {
    // Check which number the decimal has to be added to.
    if (!operator) {
        numOne += ".";
        updateDisplayValue(event);
    } else {
        numTwo += ".";
        updateDisplayValue(event);
    }
}

function updateDisplayValue(event) {
    calcDisplay.value += event.target.value;
}

function displayResult(result){
    console.log("Result: " + result);
    calcDisplay.value = result;
}

function computeValue(event) {
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

// Event listener for when the user wants to select the second number to perform operation on
userSelectOperation.forEach(opButton => {
    opButton.addEventListener('click', updateOperatorValue);
});

// Event listener for when the user wants to perform an operation with two numbers
userSelectEquals.addEventListener("click", function (event) {
    computeValue(event);
    displayResult(result);
});

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", function () {
    eraseBox();
    resetValues();
});