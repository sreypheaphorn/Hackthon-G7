let currentInput = "";
function handleInput(value) {
  const inputDisplay = document.getElementById("inputValue");

  if (currentInput === "0" && value !== ".") {
    currentInput = value; 
  } else {
    currentInput += value;
  }

  inputDisplay.textContent = currentInput; 
}
function handleReset() {
  currentInput = "";
  document.getElementById("inputValue").textContent = "0";
}
function handleEvaluate() {
  try {
    const result = Function(`'use strict'; return (${currentInput})`)();
    document.getElementById("inputValue").textContent = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("inputValue").textContent = "Error";
    currentInput = "";
  }
}
