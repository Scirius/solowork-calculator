/**
 * Create the class Caclculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */
class Calculator {
  constructor(cObj) {
    this._calcObj = cObj;
    console.log(`Calculator initialized for ${cObj}`);
  }
  history() {}
  equals() {
    console.log("equals clicked");
    let calcToDo = calculatorScreen.innerHTML;
    calcToDo.replace(/x/g, "*");
    if (isNaN(eval(CalcTodo))) {
      calculatorScreen.innerHTML = "Error: Not a number";
    } else {
    }
    calculatorScreen.innerHTML = eval(calcToDo);
  }

  clear() {}
}
const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});

document.querySelector("#calculator .clear").addEventListener("click", () => (calculatorScreen.innerHTML = ""));

var calculator = new Calculator("#calculator");
equals.addEventListener("click", () => calculator.equals());
