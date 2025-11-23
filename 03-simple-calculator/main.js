// Create simple style
const style = document.createElement("style");
style.textContent = `
    body {
        padding: 20px;
    }
    input {
        display: block;
        margin: 10px;
        padding: 5px;
    }
    button {
        margin: 5px;
        padding: 10px;
    }
    .result {
        margin: 10px;
        font-size: 18px;
    }
`;
document.head.appendChild(style);

// Create calculator
const num1 = document.createElement("input");
num1.type = "text";
num1.placeholder = "First number";

const num2 = document.createElement("input");
num2.type = "text";
num2.placeholder = "Second number";

const addButton = document.createElement("button");
addButton.textContent = "+";

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "*";

const divideButton = document.createElement("button");
divideButton.textContent = "/";

const result = document.createElement("div");
result.className = "result";
result.textContent = "Result: ";

// Add to page
document.body.appendChild(num1);
document.body.appendChild(num2);
document.body.appendChild(addButton);
document.body.appendChild(subtractButton);
document.body.appendChild(multiplyButton);
document.body.appendChild(divideButton);
document.body.appendChild(result);

// Button events
addButton.onclick = function () {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;
  result.textContent = "Result: " + (n1 + n2);
};

subtractButton.onclick = function () {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;
  result.textContent = "Result: " + (n1 - n2);
};

multiplyButton.onclick = function () {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;
  result.textContent = "Result: " + n1 * n2;
};

divideButton.onclick = function () {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;
  if (n2 === 0) {
    result.textContent = "Error: Cannot divide by zero";
  } else {
    result.textContent = "Result: " + n1 / n2;
  }
};
