// Initialize calculator object
const calculator = {
  displayValue: "0",
  firstNumber: null,
  checkforSecondEntry: false,
  operator: null
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
    console.log(target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    console.log(target.value);
    return;
  }

  if (target.classList.contains("clear")) {
    console.log(target.value);
    return;
  }

  console.log("digit", target.value);
});
