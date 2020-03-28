// Initialize calculator object
const calculator = {
  displayValue: "0",
  firstNumber: null,
  operator: null,
  secondOperatorToBeAdded: false
};

// display input from calculator clicks
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.textContent = calculator.displayValue;
}

updateDisplay();

// Get input from calculatwor clicks
document.addEventListener("click", function(event) {
  const { target } = event;

  // return if target is not a button
  if (!event.target.matches("button")) {
    return;
  }

  if (target.classList.contains("operation")) {
    inputOperation(target.value);
    updateDisplay();
    console.log(calculator);
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("clear")) {
    clearInputs();
    updateDisplay();
  }

  if (target.classList.contains("negative")) {
    togglesign();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
  console.log(calculator);
});

// enter digits and update display
function inputDigit(value) {
  const { displayValue } = calculator;
  if (calculator.secondOperatorToBeAdded === true) {
    calculator.displayValue = value;
    calculator.secondOperatorToBeAdded = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? value : displayValue + value;
  }
}

// convert input to negative and vice versa
function togglesign() {
  if (calculator.displayValue == "0") return;
  var num = parseFloat(calculator.displayValue);
  if (num > 0) {
    num = -Math.abs(num);
  } else {
    num = Math.abs(num);
  }

  calculator.displayValue = String(num);
}

// append decimal to a digit
function inputDecimal(dot) {
  if (calculator.secondOperatorToBeAdded === true) return;
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

// add operator
function inputOperation(val) {
  const { firstNumber, displayValue, operator } = calculator;
  const input = parseFloat(displayValue);

  if (operator && calculator.secondOperatorToBeAdded) {
    calculator.operator = val;
    return;
  }

  if (firstNumber === null) {
    calculator.firstNumber = input;
  } else if (operator) {
    const result = evaluateResult(operator, firstNumber, input);
    calculator.displayValue = String(result);
    calculator.firstNumber = result;
  }

  calculator.secondOperatorToBeAdded = true;
  calculator.operator = val;
}

// evaluate a given expression
function evaluateResult(operator, firstNum, secondNum) {
  let secondNumber = secondNum;
  let firstNumber = firstNum;
  let result = null;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  return result;
}

function clearInputs() {
  calculator.firstNumber = null;
  calculator.displayValue = 0;
  calculator.operator = null;
  calculator.secondOperatorToBeAdded = false;
}
