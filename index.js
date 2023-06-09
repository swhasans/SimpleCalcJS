const numOne = 0;
const operator = "";
const numTwo = 0;

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

    if(operator === "+")
    {
        return add(numOne, numTwo);
    }

    if(operator === "-")
    {
        return subtract(numOne, numTwo);
    }

    if(operator === "*")
    {
        return multiply(numOne, numTwo);
    }

    if(operator === "/")
    {
        return divide(numOne, numTwo);
    }
};