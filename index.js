let numOne = 0;
let operator = "";
let numTwo = 0;
let result = 0;

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
const userSelectDecimal = document.querySelector("#user-add-decimal");
const userSelectClear = document.querySelector("#user-clear-display");
const userSelectBksp = document.querySelector("#user-bksp-display");
const userSelectEquals = document.querySelector("#user-result-display");

const eraseBox = function () {
    calcDisplay.value = "";
};

const resetnumOneValue = function () {
    numOne = 0;
}

const resetOpsValue = function () {
    operator = "";
}

const resetnumTwoValue = function () {
    numTwo = 0;
}
const resetValues = function () {
    resetnumOneValue();
    resetOpsValue();
    resetnumTwoValue();
}

const add = function (numOne, numTwo) {
    return Number(numOne) + Number(numTwo);
};

const subtract = function (numOne, numTwo) {
    return Number(numOne) - Number(numTwo);
};

const multiply = function (numOne, numTwo) {
    return Number(numOne) * Number(numTwo);
};

const divide = function (numOne, numTwo) {
    return Number(numOne) / Number(numTwo);
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

const updateNumValue = function (event) {
    if (!operator) {
        updateNumOneValue(event);
    } else {
        updateNumTwoValue(event);
    }
}

const updateNumOneValue = function (event) {
    if (!numOne || numOne === Infinity) {
        resetnumOneValue();
        eraseBox();
    }
    numOne = numOne * 10 + Number(event.target.value);
    updateDisplayValue(event);
    console.log(`numOne: ${numOne}`);
};

const updateNumTwoValue = function (event) {
    if (!numTwo || numTwo === Infinity) {
        resetnumTwoValue();
        eraseBox();
    }
    numTwo = numTwo * 10 + Number(event.target.value);
    updateDisplayValue(event);
    console.log(`numTwo: ${numTwo}`);
};

const updateOperatorValue = function (event) {
    operator = event.target.value;
    console.log(`operator: ${operator}`);
    eraseBox();
};

const addDecimal = function (event) {
    // Check which number the decimal has to be added to.
    if (!operator) {
        // Check if that number already has a decimal point, if yes then do nothing return.
        if (Number.isInteger(numOne)) {
            numOne += ".";
            updateDisplayValue(numOne);
        }
    } else {
        // Check if that number already has a decimal point, if yes then do nothing return.
        if (Number.isInteger(numTwo)) {
            numTwo += ".";
            updateDisplayValue(numTwo);
        }
    }
};

const updateDisplayValue = function (event) {
    calcDisplay.value += event.target.value;
};

const computeValue = function (event) {
    console.log(`numOne: ${numOne} || operator: ${operator} || numTwo: ${numTwo}`);

    if (!numOne && !numTwo && !operator) {
        result = 0;
    } else if (operate(operator, numOne, numTwo) === Infinity) {
        result = "Error: Dividing by zero? Nice try."
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
};

// Event listener for when the user wants to select a number from the keypad
userSelectNumber.forEach(numButton => {
    numButton.addEventListener('click', updateNumValue);
});


// Event listener for when the user wants to select the second number to perform operation on
userSelectOperation.forEach(opButton => {
    opButton.addEventListener('click', updateOperatorValue);
});

// Event listener for when the user wants to select the decmial key from the keypad
userSelectDecimal.addEventListener("click", function () {
    addDecimal();
});

// Event listener for when the user wants to perform a operation with two numbers
userSelectEquals.addEventListener("click", function (event) {
    computeValue(event);
    resetValues();
});

// Event listener for when the user wants to clear the calculator display
userSelectClear.addEventListener("click", function () {
    eraseBox();
    resetValues();
});