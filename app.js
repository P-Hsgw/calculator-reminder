let displayValue = "";
let operator = "";
let values = [];

const btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");

// Computing functions - take two numbers, return result.
const add = (arr) => console.log(arr.reduce((a, b) => a + b, 0));

const substract = (arr) => console.log(arr.reduce((a, b) => a - b));

const multiply = (arr) => console.log(arr.reduce((a, b) => a * b));

const divide = (arr) => console.log(arr.reduce((a, b) => a / b));

// Take operator and two numbers, and call computing functions to return the result
function operate(operator, ...values) {
  if (operator == "+") {
    add(...values);
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
    if (
      e.currentTarget.value == "+" ||
      e.currentTarget.value == "-" ||
      e.currentTarget.value == "*" ||
      e.currentTarget.value == "/"
    ) {
      operator = e.currentTarget.value;
      values.push(parseInt(displayValue));
      displayValue = "";
      console.log(values)
    }

    if (
      e.currentTarget.value != "W" &&
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
      secondValue = operate(operator, values);
    }
  });
}

// Push result to the array, and set this result as a displayValue
// After, possibility to use result to compute again