let output = document.getElementById("output");

function appendValue(val) {
  if (output.innerText === "0") {
    output.innerText = val;
  } else {
    output.innerText += val;
  }
}

function clearDisplay() {
  output.innerText = "0";
}

function calculateResult() {
  try {
    output.innerText = eval(output.innerText);
  } catch (e) {
    output.innerText = "Error";
  }
}
