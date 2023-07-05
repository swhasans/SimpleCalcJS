let numOne = 0;
let operator = "";
let numTwo = 0;

let displayValue = 0;

// Selecting the container, input fields, and buttons
//MAIN Container
const container = document.querySelector(".container");

//resultDisplayContainer
const calcDisplay = document.querySelector("#calc-display");

//operatorContainer
const opContainer = document.querySelector(".operatorContainer");
const userSelectOperation = opContainer.querySelectorAll('input');

//numberContainer
const numContainer = document.querySelector(".numberContainer");
const userSelectNumber = numContainer.querySelectorAll('input');

//modifyResultContainer
const userSelectClear = document.querySelector("#user-clear-display");
const userSelectBksp = document.querySelector("#user-bksp-display");
const userSelectEquals = document.querySelector("#user-result-display");

const eraseBox = function () {
    calcDisplay.value = "";
    numOne = 0;
    operator = "";
    numTwo = 0;
};

const add = function (numOne, numTwo) {
    return Number(numOne) + Number(numTwo);
};

const subtract = function (numOne, numTwo) {
    return numOne - numTwo;
};

const multiply = function (numOne, numTwo) {
    return numOne * numTwo;
};

const divide = function (numOne, numTwo) {
    return numOne / numTwo;
};

const operate = function (operator, numOne, numTwo) {

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
};


const updateNumOneValue = function (event) {
    numOne = event.target.value;
};

const updateNumTwoValue = function (event) {
    numTwo = event.target.value;
};

const updateOperatorValue = function (event) {
    operator = event.target.value;
    eraseBox();
};

const updateDisplayValue = function (event) {
    updateNumOneValue( event.target.value);
    calcDisplay.value += event.target.value;
    displayValue = calcDisplay.value;
    
    console.log("CalcDisplay Value: " + calcDisplay.value);
    console.log("displayValue: " + displayValue);
};

const computeValue = function (event) {
    numTwo = calcDisplay.value;
    console.log(`numOne: ${numOne} || operator: ${operator} || numTwo: ${numTwo}`);
    
    // Make numOne the result
    numOne = operate(operator, numOne, numTwo);
    // Update the value displayed in textarea with the result
    calcDisplay.value = numOne;
    
    //Resetting the value of operator and numTwo because a operation has been completed.
    operator = "";
    numTwo = 0;
};


// Event listener for when the user wants to select the second number to perform operation on
userSelectOperation.forEach(opButton => {
    opButton.addEventListener('click', updateOperatorValue);
});

// Event listener for when the user wants to select a number from the keypad
userSelectNumber.forEach(numButton => {
    numButton.addEventListener('click', updateDisplayValue);
});

// Event listener for when the user wants to perform a operation with two numbers
userSelectEquals.addEventListener('click', computeValue);

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", eraseBox);