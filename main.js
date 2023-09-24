// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    const buttonValue = button.value;

    // Handle different button types (numbers, operators, clear, calculate)
    if (buttonText === "=") {
      try {
        let expression = display.value
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-"); // Reemplaza "×" con "*", Reemplaza "÷" con "/"
        display.value = eval(expression);
      } catch (error) {
        display.value = "Error";
      }
    } else if (buttonText === "C") {
      display.value = "";
    } else if (buttonValue) {
      // Reemplazar símbolos en el display
      display.value +=
        buttonValue === "add"
          ? "+"
          : buttonValue === "multiply"
          ? "×"
          : buttonValue === "divide"
          ? "÷"
          : buttonValue === "split"
          ? "−"
          : buttonValue;
    } else {
      display.value += buttonText;
    }
  });
});
