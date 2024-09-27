let display = document.getElementById("display");

let appendToDisplay = (value) => {
  display.value += value;
};

let clearDisplay = () => {
  display.value = "";
};

let deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

let calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value(err);
  }
};
