let expression = new Array();
let operand1 = "";
let operand2 = "";
let oper = "";

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        return "Can't divide by zero.  This calculator is unbreakable.";
    }
    return a / b;
}cons

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    result = 0;
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
        updateDisplay(0);
        updateAnswer(0);
    }
    else if (operator(value)) {
        toggleDecimal(true);
        if (oper.length > 0) {
            updateAnswer(operate(oper, operand1, operand2));
        }
        oper = value;
        expression = new Array();
        updateDisplay(`${operand1} ${oper} ${operand2}`)
    }
    else if (value === "=") {
        toggleDecimal(true);
        if (operand2.length < 1) {
            updateAnswer(operand1);
            oper="";
            updateDisplay(`${operand1} = `);
        }
        else {
            updateDisplay(`${operand1} ${oper} ${operand2} = `);
            operand1 = operate(oper, operand1, operand2);
            updateAnswer(operand1);
            expression = new Array();
            operand2 = "";
            oper = "";
        }

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
    if (value === "."){
        toggleDecimal(false);
    }

}

function updateDisplay(value) {
    if (!value.
        toString().
        includes("zero")) {
        document.querySelector(".work").textContent = value;
    }
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

function toggleDecimal(toggle){
    const btn = document.getElementById("decimal");
    if (toggle){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}
/** Adding an event listener for each button */
const btn = document.querySelectorAll(".btn");

btn.forEach(function (e) {
    e.addEventListener('click', getKeyPress);
});


