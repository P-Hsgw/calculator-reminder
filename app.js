let displayValue = "";
let operator = [];
let values = [];

const btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");

// Computing functions - take two numbers, return result, display the result
const add = (arr) => {
  result = arr.reduce((a, b) => a + b, 0);
  displayValue = result;
  display.innerHTML = displayValue;
};

const substract = (arr) => {
  result = arr.reduce((a, b) => a - b);
  displayValue = result;
  display.innerHTML = displayValue;
};

const multiply = (arr) => {
  result = arr.reduce((a, b) => a * b);
  displayValue = result;
  display.innerHTML = displayValue;
};

const divide = (arr) => {
  result = arr.reduce((a, b) => a / b);
  displayValue = result;
  display.innerHTML = displayValue;
};

// Take operator and two numbers, and call computing functions to return the result
function operate(operator, ...values) {
  if (operator == "+") {
    return add(...values);
  } else if (operator == "-") {
    substract(...values);
  } else if (operator == "*") {
    multiply(...values);
  } else if (operator == "/") {
    divide(...values);
  }
}

// Handle operators - check which operator is clicked, and push values from display to computing values array
const handleOperators = (e) => {
  if (e == "+" || e == "-" || e == "*" || e == "/") {
    if (operator.length <= 0) { // If there is one operator, proceed with regular computing
      operator.push(e);
      values.push(parseFloat(displayValue));
      displayValue = ""; // Bug with NaN when operator is chosen twice is caused by this code
      console.log(operator);
    } else { // If there is more than one operator, compute after clicking the operator
      operator.push(e);
      handleComputing("=");
      values.push(parseFloat(displayValue));
      displayValue = "";
    }
  }
};

// Display clicked numbers
const displayNumericalValues = (e) => {
  if (
    e == "1" ||
    e == "2" ||
    e == "3" ||
    e == "4" ||
    e == "5" ||
    e == "6" ||
    e == "7" ||
    e == "8" ||
    e == "9" ||
    e == "0"
  ) {
    displayValue += e;
    display.innerHTML = displayValue;
  }
};

// Compute numbers from values array
const handleComputing = (e) => {
  if (e == "=") {
    values.push(parseFloat(displayValue));
    operate(operator[0], values);
    values = [];
    operator.shift();
    console.log(operator);
  }
};

// Clear calculator
const handleClear = (e) => {
  if (e == "C" || e == "Escape") {
    displayValue = "";
    operator = "";
    values = [];
    display.innerHTML = displayValue;
  }
};

// Backspace displayed values
const handleBackspace = (e) => {
  if (e == "B" || e == "Backspace") {
    displayValue = displayValue.slice(0, -1);
    display.innerHTML = displayValue;
  }
};

// Add dots, allowing to handle decimals
const handleDot = (e) => {
  if (e == "." && displayValue != "" && displayValue.includes(".") === false) {
    displayValue += e;
    display.innerHTML = displayValue;
  }
};

// Run functions on button click
for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    handleOperators(e.currentTarget.value);

    displayNumericalValues(e.currentTarget.value);

    handleComputing(e.currentTarget.value);

    handleClear(e.currentTarget.value);

    handleBackspace(e.currentTarget.value);

    handleDot(e.currentTarget.value);
  });
}

// Run functions on keyboard click
document.addEventListener("keydown", function (e) {
  handleOperators(e.key);

  displayNumericalValues(e.key);

  handleComputing(e.key);

  handleDot(e.key);

  handleBackspace(e.key);

  handleClear(e.key);
});
