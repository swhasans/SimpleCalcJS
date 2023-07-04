const numOne = 0;
const operator = "";
const numTwo = 0;

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

const clearBox = function () {
    calcDisplay.value = "";
}

const eraseBox = function () {
    clearBox();
    displayValue = 0;
}

const updateDisplayValue = function (event) {
    calcDisplay.value = calcDisplay.value + event.target.value;
    displayValue = displayValue + calcDisplay.value;
    console.log("CalcDisplay Value : " + calcDisplay.value) 
};

const populateDisplay = function () {

};

if(userSelectOperation)

userSelectNumber.forEach(numButton => {
    numButton.addEventListener('click', updateDisplayValue);
});

// userSelectOperation.forEach(opButton => {
//     opButton.addEventListener('click', updateDisplayValue);
// });

const add = function (numOne, numTwo) {
    return numOne + numTwo;
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

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", eraseBox);

