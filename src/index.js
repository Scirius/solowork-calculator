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
    this._history = [];
    console.log(`Calculator initialized for ${cObj}`);
  }
  history(value) {
    this._history.push(value);
    console.log(`History: ${this._history}`);
  }

  evalErrors(evalExpr) {
    try {
      eval(evalExpr);
    } catch (err) {
      return true;
    }
    return false;
  }

  equals() {
    let calcTodo = calculatorScreen.innerHTML;
    calcTodo = calcTodo.replace(/x/g, "*");
    console.log(`equals clicked with ${calcTodo}`);
    if (this.evalErrors(calcTodo)) {
      calculatorScreen.innerHTML = "Error: Not a number";
      return;
    } else {
      this.history(calcTodo);
      calculatorScreen.innerHTML = "" + eval(calcTodo);
    }
  }

  clear() {
    calculatorScreen.innerHTML = "";
    this._history = [];
  }
}
const calculatorScreen = document.querySelector("#calculator .screen");
const calculatorEquals = document.querySelector("#calculator .eval");
const calculatorClear = document.querySelector("#calculator .clear");

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

var calculator = new Calculator("#calculator");
calculatorEquals.addEventListener("click", () => calculator.equals());
calculatorClear.addEventListener("click", () => calculator.clear());
