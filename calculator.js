let expression = new Array();
let operand1 = "";
let operand2 = "";
let total = "";
let oper = "";

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    result = 0;
    console.log(`op: ${operator}, a: ${a}, b: ${b}`);
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "x":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}

function getKeyPress(e) {
    let value = e.target.textContent;

    if (value === "C") {
        expression = new Array();
        operand1 = "";
        operand2 = "";
        oper = "";
        total = "";
        updateDisplay(0);
        updateAnswer(0);
    }
    else if (operator(value)) {
        if (oper.length > 0) {
            updateAnswer(operate(oper, operand1, operand2));
        }
        oper = value;
        expression = new Array();
        updateDisplay(`${operand1} ${oper} ${operand2}`)
    }
    else if (value === "=") {
        updateDisplay(`${operand1} ${oper} ${operand2} = `);
        updateAnswer(operate(oper, operand1, operand2));
        expression = new Array();
        operand1 = "";
        operand2 = "";
        oper = "";
    }
    else {
        expression.push(value);
        if (oper.length < 1) {
            operand1 = expression.join("");
        } else {
            operand2 = expression.join("");
        }
        updateDisplay(`${operand1} ${oper} ${operand2}`)

    }
}

function updateDisplay(value) {
    document.querySelector(".work").textContent = value;
}

function updateAnswer(value) {
    document.querySelector(".answer").textContent = value;
    operand1 = value.toString();
    operand2 = "";
}

function operator(value) {
    switch (value) {
        case "+":

        case "-":
        case "x":
        case "/":
            return true;
        default:
            return false;
    }
}
/** Adding an event listener for each button */
const btn = document.querySelectorAll(".btn");

btn.forEach(function (e) {
    e.addEventListener('click', getKeyPress);
});


