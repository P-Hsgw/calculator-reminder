
// Computing functions - take two numbers, return result.
function add (number1, number2) {
  return number1+number2
}

function substract (number1, number2) {
  return number1-number2
}

function multiply (number1, number2) {
  console.log(number1*number2)
}

function divide (number1, number2) {
  return number1/number2
}

// Operate functions - take operator and two numbers, and call computing functions to return the result
function operate (operator, number1, number2){
  if (operator == "+") {
    add(number1,number2)
  } else if (operator == "-") {
    substract(number1,number2)
  } else if (operator == "*") {
    multiply(number1,number2)
  } else if (operator == "/") {
    divide(number1,number2)
  }
}

