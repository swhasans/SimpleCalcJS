const numOne = 0;
const operator = "";
const numTwo = 0;

const displayValue = 0;

// Selecting the container, input fields, and buttons
const container = document.querySelector(".container");

const calcDisplay = document.querySelector("#calc-display");
const userSelectClear = document.querySelector("#user-clear-display");

// const numContainer = document.querySelector(".numberContainer");
const userSelectNumber = container.querySelectorAll('input');


const clearBox = function () {
    calcDisplay.value = "";
}

const eraseBox = function () {
    clearBox();
}

const updateDisplayValue = function () {

};

const populateDisplay = function () {

};

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

userSelectNumber.forEach(numButton => {
    numButton.addEventListener('click', (e) => {
        console.log(e.target.value);
    });
});

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", eraseBox);

