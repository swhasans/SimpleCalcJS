# SimpleCalcJS
A JavaScript-based on-screen calculator with basic math operations, decimal input, clear button, backspace functionality, and keyboard support.

## Tasks:
### Base Functionality

- [ ] **Implement Basic Math Functions:** Create functions for basic math operations (add, subtract, multiply, divide) and test them in the browser's console.

- [ ] **Create Calculator HTML Structure:** Build a basic HTML calculator with buttons for digits, math functions, and an "Equals" key. Add a display area and fill it with dummy numbers.

- [ ] **Add Clear Button Functionality:** Implement the functionality for the "clear" button to wipe out any existing data and reset the calculator.

- [ ] **Populate Display with Numbers:** Create functions to populate the display when number buttons are clicked. Store the display value in a variable for further use.

- [ ] **Implement Calculator Logic:** Store the first number when a user presses an operator, save the chosen operation, and call the operate() function when the "=" key is pressed. Update the display with the solution.

- [ ] **Handle Multiple Operations and Evaluation Order:** Enable the calculator to handle multiple operations by evaluating each pair of numbers at a time. Ensure that only a single pair of numbers is evaluated at each step and display the result correctly. Round answers with long decimals to prevent overflow.

- [ ] **Error Handling and Validation:** Handle edge cases and potential bugs in the calculator. Display an error message if the user tries to divide by zero. Prevent issues caused by pressing "=" before entering all numbers or an operator.

### Extra Credit
- [ ] **Decimal Input:** Implement the ability for users to input decimals by adding a "." button. Disable the decimal button if there's already one in the display to avoid multiple decimals in a number.

- [ ] **CSS Styling:** Improve the visual appearance of the calculator using CSS. Differentiate the operations by giving them a distinct color from the keypad buttons.

- [ ] **Backspace Functionality:** Add a "backspace" button to allow users to undo input if they click the wrong number.

- [ ] **Keyboard Support:** Enhance the calculator by adding keyboard support. Solve potential issues with specific keys, such as "/", by reading the MDN documentation on event.preventDefault().
