let displayValue = "";
let operator = "";
let values = [];

// If isComputing, add operator to operatorQueue, and move first operator fro the operatorQueue to operator if computed

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
  if (
    e.currentTarget.value == "+" ||
    e.currentTarget.value == "-" ||
    e.currentTarget.value == "*" ||
    e.currentTarget.value == "/"
  ) {
    operator = e.currentTarget.value;
    values.push(parseFloat(displayValue));
    displayValue = "";
  }
};

// Display clicked numbers
const displayNumericalValues = (e) => {
  if (
    e.currentTarget.value != "B" &&
    e.currentTarget.value != "C" &&
    e.currentTarget.value != "+" &&
    e.currentTarget.value != "-" &&
    e.currentTarget.value != "*" &&
    e.currentTarget.value != "/" &&
    e.currentTarget.value != "=" &&
    e.currentTarget.value != "."
  ) {
    displayValue += e.currentTarget.value;
    display.innerHTML = displayValue;
  }
};

// Compute numbers from values array
const handleComputing = (e) => {
  if (e.currentTarget.value == "=") {
    values.push(parseFloat(displayValue));
    operate(operator, values);
    values = [];
  }
};

// Clear calculator
const handleClear = (e) => {
  if (e.currentTarget.value == "C") {
    displayValue = "";
    operator = "";
    values = [];
    display.innerHTML = displayValue;
  }
};

// Backspace displayed values
const handleBackspace = (e) => {
  if (e.currentTarget.value == "B") {
    displayValue = displayValue.slice(0, -1);
    display.innerHTML = displayValue;
  }
};

// Add dots, allowing to handle decimals
const handleDot = (e) => {
  if (
    e.currentTarget.value == "." &&
    displayValue != "" &&
    displayValue.includes(".") === false
  ) {
    displayValue += e.currentTarget.value;
    display.innerHTML = displayValue;
  }
};

for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    handleOperators(e);

    displayNumericalValues(e);

    handleComputing(e);

    handleClear(e);

    handleBackspace(e);

    handleDot(e);
  });
}


// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });
