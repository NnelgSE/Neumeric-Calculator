const display = document.getElementById("result");

function appendCharacter(char) {
  if (display.value === "0") {
    display.value = char;
  } else {
    display.value += char;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
