let screen = document.getElementById("screen");

function display(value) {
  screen.value += value;
}

function clearAll() {
  screen.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}