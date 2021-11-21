let displayValue = "";
let operator = "";
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

for (const btn of btns) {
  btn.addEventListener("click", (e) => {

    // Handle operators
    if (
      e.currentTarget.value == "+" ||
      e.currentTarget.value == "-" ||
      e.currentTarget.value == "*" ||
      e.currentTarget.value == "/"
    ) {
      operator = e.currentTarget.value;
      values.push(parseInt(displayValue));
      displayValue = "";
    }

    // Display numerical values
    if (
      e.currentTarget.value != "B" &&
      e.currentTarget.value != "C" &&
      e.currentTarget.value != "+" &&
      e.currentTarget.value != "-" &&
      e.currentTarget.value != "*" &&
      e.currentTarget.value != "/"
    ) {
      displayValue += e.currentTarget.value;
      display.innerHTML = displayValue;
    }

    if (e.currentTarget.value == "=") {
      values.push(parseInt(displayValue));
      operate(operator, values);
      values = [];
    }

    // Handle clear
    if (e.currentTarget.value == "C") {
      displayValue = "";
      operator = "";
      values = [];
      display.innerHTML = displayValue;
    }

    // Handle backspace
    if (e.currentTarget.value == "B") {
      displayValue = displayValue.slice(0, -1);
      display.innerHTML = displayValue;
    }
  });
}
