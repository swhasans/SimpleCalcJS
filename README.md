# SimpleCalcJS

## Table of Contents

- [Introduction](#introduction)
- [Languages](#languages)
- [Tools](#tools)
- [Features](#features)
- [Preview](#preview)
- [Tasks](#tasks)
  - [Base Functionality](#base-functionality)
  - [Extra Credit](#extra-credit)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

SimpleCalcJS is a JavaScript-based on-screen calculator with basic math operations, decimal input, clear button, backspace functionality, and keyboard support.

## Languages

1. HTML
2. CSS
3. JavaScript.

## Tools

- Visual Studio Code
- Bash Shell
- Git and GitHub

## Features

- Users can perform basic math operations (addition, subtraction, multiplication, division) on the calculator.
- Users can input decimal numbers using the "." button.
- Users can clear the calculator's display and reset the input using the "clear" button.
- Users can undo their input using the "backspace" button.
- Users can use the keyboard for input, including numbers and operators.
- The calculator displays an error message when dividing by zero.
- The calculator handles multiple operations and evaluates them correctly, following the order of operations.
- The calculator's UI is visually appealing with CSS styling, and the math functions are differentiated with distinct colors.

## Preview

🔗 **Live preview:** [Click Here!](https://swhasans.github.io/SimpleCalcJS/)

## Tasks

### Base Functionality

- [x] **Implement Basic Math Functions:** Create functions for basic math operations (add, subtract, multiply, divide) and test them in the browser's console.

- [x] **Create Calculator HTML Structure:** Implement variable initialization, calculation function, and HTML structure for calculator.

- [x] **Add Clear Button Functionality:** Implement the functionality for the "clear" button to wipe out any existing data and reset the calculator.

- [x] **Populate Display with Numbers:** Create functions to populate the display when number buttons are clicked. Store the display value in a variable for further use.

- [x] **Implement Calculator Logic:** Store the first number when a user presses an operator, save the chosen operation, and call the operate() function when the "=" key is pressed. Update the display with the solution.

- [x] **Handle Multiple Operations and Evaluation Order:** Enable the calculator to handle multiple operations by evaluating each pair of numbers at a time. Ensure that only a single pair of numbers is evaluated at each step and display the result correctly. Round answers with long decimals to prevent overflow.

- [x] **Error Handling and Validation:** Handle edge cases and potential bugs in the calculator. Display an error message if the user tries to divide by zero. Prevent issues caused by pressing "=" before entering all numbers or an operator.

### Extra Credit

- [x] **Decimal Input:** Implement the ability for users to input decimals by adding a "." button. Disable the decimal button if there's already one in the display to avoid multiple decimals in a number.

- [ ] **CSS Styling:** Improve the visual appearance of the calculator using CSS. Differentiate the operations by giving them a distinct color from the keypad buttons.

- [ ] **Backspace Functionality:** Add a "backspace" button to allow users to undo input if they click the wrong number.

- [ ] **Keyboard Support:** Enhance the calculator by adding keyboard support. Solve potential issues with specific keys, such as "/", by reading the MDN documentation on event.preventDefault().

## License

- This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements

- This project was inspired by The Odin Project.
