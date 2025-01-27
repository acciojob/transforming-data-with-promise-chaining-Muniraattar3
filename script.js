//your JS code here. If required.
// Select necessary elements
const inputField = document.getElementById("ip");
const startButton = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Function to create a promise that resolves after a given delay
function delayOperation(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

// Event listener for the start button
startButton.addEventListener("click", () => {
  const inputValue = parseFloat(inputField.value); // Get the input value and convert to a number

  // Validate input
  if (isNaN(inputValue)) {
    outputDiv.textContent = "Please enter a valid number.";
    return;
  }

  outputDiv.textContent = "Processing...";

  // Start promise chain
  delayOperation(inputValue, 2000) // Initial promise with input value
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayOperation(result * 2, 1000); // Multiply by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayOperation(result - 3, 1000); // Subtract 3
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayOperation(result / 2, 1000); // Divide by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayOperation(result + 10, 1000); // Add 10
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`; // Display final result
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error.message}`; // Handle any errors
    });
});
